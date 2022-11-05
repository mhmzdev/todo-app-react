import { useState, useRef, useEffect } from "react";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = 'todoApp.todos';

  const [todos, setTodo] = useState([]);
  const todoInput = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodo(storedTodos);

  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggle(id) {
    const copyTodos = [...todos];
    const todo = copyTodos.find(t => t.id === id);
    todo.isDone = !todo.isDone;

    setTodo(copyTodos)
  }

  function handleAddTodo(event) {
    const title = todoInput.current.value;
    if (title === '') return;

    setTodo(prevsTodos => {
      return [...prevsTodos, { id: uuidv4(), title: title, isDone: false }]
    });

    todoInput.current.value = null;
  }

  function handleClearCompleted() {
    const todoCopy = [...todos];
    const completedTodos = todoCopy.filter(t => !t.isDone);

    setTodo(completedTodos)
  }

  return (
    <>
      <TodoList toggle={toggle} todos={todos} />
      <input ref={todoInput} type='text' />
      <button onClick={handleAddTodo} >Add Todo</button>
      <button onClick={handleClearCompleted} >Clear Completed</button>
    </>
  );
}

export default App;
