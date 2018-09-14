import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  render(){
    return(
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span className="description">{ this.props.description }</span>
        <button onClick={ this.props.deleteTodo }>Delete</button>
      </li>
    );
  }
}

export default ToDo;
