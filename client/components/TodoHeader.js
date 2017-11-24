import React from "react";

class TodoHeader extends React.Component {

  handlerKeyUp(event){
    if(event.keyCode === 13){
      let value = event.target.value;
      if(!value) return false;
      
      let newTodoItem = {
        name: value,
        done: false
      };
      event.target.value = "";
      this.props.addTodo(newTodoItem);
    }
  }

  render(){
    return (
      <div className="panel-header">
        <input onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="what's your task ?"/>
      </div>
    )
  }
}

export default TodoHeader;

