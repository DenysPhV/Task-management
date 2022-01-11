import { Component } from 'react';
import s from './TodoEditor.module.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = (e) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.TodoEditor}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
          className={s.TodoEditor__textarea}
        ></textarea>
        <button type="submit" className={s.TodoEditor__button}>
          Save
        </button>
      </form>
    );
  }
}

export default TodoEditor;
