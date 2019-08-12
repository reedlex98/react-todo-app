import React from 'react'

const TodoItem = () => {
    return (
        <div className="todo-item">
            <input type="checkbox" name="task"/>
            <label htmlFor="task">Placeholder text here</label>
        </div>
    )   
}

export default TodoItem