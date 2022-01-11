import React from 'react';

import IconButton from 'components/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

import s from './Todo.module.scss';

const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleCompleted}
        className={s.TodoList__checkbox}
      />
      <p className={s.TodoList__text}>{text}</p>

      <IconButton onClick={onDeleteTodo} aria-label="delete todo item">
        <DeleteIcon width="30" height="30" fill="#ffffff" />
      </IconButton>
      {/* <button type="button" onClick={onDeleteTodo} className={s.TodoList__btn}>
        Delete
      </button> */}
    </>
  );
};

export default Todo;
