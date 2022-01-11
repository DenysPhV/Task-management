import React from 'react';

import s from './TodoFilter.module.scss';

const Filter = ({ value, onChange }) => (
  <div className={s.TodoFilter}>
    <p className={s.TodoFilter__label}>Фильтр по: </p>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={s.TodoFilter__input}
    />
  </div>
);

export default Filter;
