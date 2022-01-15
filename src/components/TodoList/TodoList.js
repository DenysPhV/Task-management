import React from 'react';
import classNames from 'classnames';

import Todo from 'components/Todo';
import s from './TodoList.module.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={s.TodoList}>
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames(s.TodoList__item, {
          [s.TodoList__itemCompleted]: completed,
        })}
      >
        <Todo
          text={text}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDeleteTodo={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);
export default TodoList;
