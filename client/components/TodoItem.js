import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TodoItem extends React.Component{

  handlerChange(){
    let isDone = !this.props.done;
    this.props.changeTodoState(this.props.id, isDone);
  }

  handlerMouseOver(){
    ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = "inline";
  }

  handlerMouseOut(){
    ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = "none";
  }

  handlerDelete(){
    this.props.deleteTodo(this.props.id);
  }

  render(){
    let doneStyle = this.props.done ? {textDecoration: 'line-through'} : {textDecoration: 'none'};

    return (
      <li
        onMouseOver={this.handlerMouseOver.bind(this)}
        onMouseOut={this.handlerMouseOut.bind(this)}
        >
        <input type="checkbox" checked={this.props.done} onChange={this.handlerChange.bind(this)}/>
        <span style={doneStyle}>{this.props.name}</span>
        <button ref="deleteBtn" onClick={this.handlerDelete.bind(this)} style={{'display': 'none'}} className="fr">Delete</button>
      </li>
    )
  }
}