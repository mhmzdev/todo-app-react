import React from 'react'
import Todo from './Todo';

export default function TodoList({ todos, toggle }) {
    return (
        todos.map(todo => {
            return <Todo toggle={toggle} key={todo.id} todo={todo} />
        })
    );
}
