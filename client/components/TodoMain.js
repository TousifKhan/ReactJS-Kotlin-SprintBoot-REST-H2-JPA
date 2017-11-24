import React from "react";
import TodoItem from "./TodoItem.js"

export default class TodoMain extends React.Component{
  render(){
    return (
      <ul className="todo-list">
      {this.props.todos.map((todo, index) => {
        return <TodoItem key={todo.id} {...todo} index={todo.id} {...this.props}/>
      })}
      </ul>
    )
  }
}