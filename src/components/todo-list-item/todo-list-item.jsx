import React from 'react'
import {FaRegTrashAlt, FaExclamation} from 'react-icons/fa'

import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <FaExclamation />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <FaRegTrashAlt />
      </button>
    </span>
  );
};

export default TodoListItem;