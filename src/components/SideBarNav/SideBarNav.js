import TodoList from '../TodoList/TodoList';

export default function SideBarNav({ todos }) {
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
}
