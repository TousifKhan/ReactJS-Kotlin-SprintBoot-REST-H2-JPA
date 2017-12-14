import React from "react";
import ReactDOM from 'react-dom';

import TodoHeader from "./components/TodoHeader.js";
import TodoMain from "./components/TodoMain.js";
import TodoFooter from "./components/TodoFooter.js";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos: [],
      isAllChecked: false
    };
  }
    
  componentDidMount(){
    fetch('http://localhost:9090/api/',{
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      this.setState({todos: data});
    }.bind(this))
    .catch(function(){
      console.log('[componentDidMount] Error....');
    })
  }
    
  allChecked(){
    let isAllChecked = false;
    if(this.state.todos.every((todo)=> todo.done)){
      isAllChecked = true;
    }
    this.setState({todos: this.state.todos, isAllChecked});
  }

  addTodo(todoItem){
    fetch('http://localhost:9090/api/',{
      method: 'PUT',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todoItem)
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      this.setState({todos: data});
    }.bind(this))
    .catch(function(){
      console.log('[addTodo] Error....');
    })
    //this.state.todos.push(todoItem);
    this.allChecked();
  }

  changeTodoState(index, isDone, isChangeAll=false){
    if(isChangeAll){
      this.setState({
        todos: this.state.todos.map((todo) => {
          todo.done = isDone;
          return todo;
          }),
          isAllChecked: isDone
      })
    }
    else{
      this.state.todos[index-1].done = isDone;
      this.allChecked();
    }
  }

  clearDone(){
    let todos = this.state.todos.filter(todo => !todo.done);
    this.setState({
      todos: todos,
      isAllChecked: false
    });
  }

  deleteTodo(id){
    let url = 'http://localhost:9090/api/';
    fetch(url + id, {
      method: 'delete',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(response => response.json())
    .then(data => {this.setState({todos: data})}.bind(this))
    .catch(function(){
      console.log('Error....');
    })
  }

  render(){
    var props = {
      todoCount: this.state.todos.length || 0,
      todoDoneCount: (this.state.todos && this.state.todos.filter((todo)=>todo.done)).length || 0
    };
    return (
      <div className="panel">
        <TodoHeader addTodo={this.addTodo.bind(this)}/>
        <TodoMain deleteTodo={this.deleteTodo.bind(this)} todos={this.state.todos} changeTodoState={this.changeTodoState.bind(this)}/>
        <TodoFooter isAllChecked={this.state.isAllChecked} clearDone={this.clearDone.bind(this)} {...props} changeTodoState={this.changeTodoState.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
