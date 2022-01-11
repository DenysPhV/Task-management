import React, { Component } from 'react';

import s from './Counter.module.css';
import Controls from './Controls';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  // state всегда объект и под Бабелем компилируется в конструктор
  state = {
    value: this.props.initialValue,
  };
  //public arrow function
  //евент доступен только в синхроном коде, если необходимо асинроный нужно сохронить в переменую

  //не имею права обновлять стайт в ручную из любой функции ни когда запомни
  handleIncrement = () => {
    console.log('click +1');

    // this.setState({ value: 12345 }); это изменяет состояние всего объекта стейт
    //   А это меняет от предыдущего сотояния стейта
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    console.log('click -1');
    //   А это меняет от предыдущего сотояния стейта и записать можно без ретёрна
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className={s.container}>
        <span>{value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div>
          <button type="button" onClick={this.handleIncrement}>
            +1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            -1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
