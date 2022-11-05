import React from 'react'

export default function Todo({ todo, toggle }) {
    function handleOnClickCheckBox() {
        toggle(todo.id)
    }


    return (
        <div>
            <input type='checkbox' checked={todo.isDone} onChange={handleOnClickCheckBox} />
            {todo.title}
        </div>
    );
}
