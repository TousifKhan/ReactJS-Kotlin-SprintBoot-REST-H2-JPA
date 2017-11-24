import React from "react";

export default class TodoFooter extends React.Component{

  handlerAllState(event){
    this.props.changeTodoState(null, event.target.checked, true);
  }

  handlerClick(){
    this.props.clearDone();
  }

  render(){
    return (
      <div className="clearfix todo-footer">
        <input checked={this.props.isAllChecked} onChange={this.handlerAllState.bind(this)} type="checkbox" className="fl"/>
        <span className="fl">{this.props.todoDoneCount} Completed / {this.props.todoCount} total</span>
        <button onClick={this.handlerClick.bind(this)} className="fr">Clearance completed</button>
      </div>
    )
  }
}