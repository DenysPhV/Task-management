import React from 'react';

import s from './Controls.module.css';
const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className={s.btn}>
      <button type="button" onClick={onIncrement} className={s.btnItem}>
        +1
      </button>
      <button type="button" onClick={onDecrement} className={s.btnItem}>
        -1
      </button>
    </div>
  );
};

export default Controls;
