import { Component } from 'react';
import shortid from 'shortid';
// import initialTodos from './todos.json';

import Container from 'components/Container';
import AppBar from 'components/AppBar';
// import Dropdown from 'components/Dropdown/Dropdown';
import TodoList from 'components/TodoList';
import TodoFilter from 'components/TodoFilter';
import TodoEditor from './components/TodoEditor';
import Modal from 'components/Modal';
import IconButton from 'components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';

import s from './App.module.scss';

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    // warning!!! to checking on there a data
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //don`t never write "setState" in inside this is function, by only condition

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }
    // have toggle modal
    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
  };

  // delete card todo`s
  deleteTodo = (todoID) => {
    this.setState(({ todos }) => ({
      todos: todos.filter((todo) => todo.id !== todoID),
    }));
  };

  // тоглим чекбоксы типа выполнили на каротчках
  toggleCompleted = (todoID) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoID ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return todos.filter((todo) =>
      todo.text.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    //вычесляемые значения возми то что у тебя есть и вычесли не засерая стейт
    const totalTodoCount = todos.length;
    const completedTodosCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <Container>
          <section className={s.appBar}>
            <TodoFilter value={filter} onChange={this.changeFilter} />
            <AppBar
              totalTodoCount={totalTodoCount}
              completedTodosCount={completedTodosCount}
            />
          </section>

          <IconButton onClick={this.toggleModal} aria-label="add todo item">
            <AddIcon width="30" height="30" fill="#ffffff" />
          </IconButton>

          {/* <button type="button" onClick={this.toggleModal}>
            on modal
          </button> */}
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <TodoEditor onSubmit={this.addTodo} />
            </Modal>
          )}
          {/*Работа с колекциями*/}
          {/* <Dropdown /> */}

          {/* 
          <div>
            <p>Общее кол-во:{totalTodoCount}</p>
            <p>Кол-во выполненных:{completedTodosCount}</p>
          </div> */}

          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </Container>
      </>
    );
  }
}

export default App;
