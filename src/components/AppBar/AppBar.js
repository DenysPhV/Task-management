import React from 'react';
import s from './AppBar.module.scss';
const AppBar = ({ totalTodoCount, completedTodosCount }) => (
  <div className={s.barContainer}>
    <p className={s.counter}>Общее кол-во:{totalTodoCount}</p>
    <p className={s.counter}>Кол-во выполненных:{completedTodosCount}</p>
  </div>
);
export default AppBar;
