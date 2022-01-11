import { Component } from 'react';

import s from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;

    return (
      <div className={s.drop}>
        <button onClick={this.toggle}>{visible ? 'Hide' : 'Show'}</button>

        {visible && <div className={s.drop__menu}>Menu a dropdown</div>}
      </div>
    );
  }
}
export default Dropdown;
