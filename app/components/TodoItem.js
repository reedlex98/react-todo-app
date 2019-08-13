import React from 'react'

const handleChange = () => alert('hey, I was changed')

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <input onChange={handleChange}type="checkbox" name="task" defaultChecked={props.completed} disabled={props.completed}/>
            <label htmlFor="task" style={{textDecoration: props.completed ? 'line-through' : 'none'}}>{props.text}</label>
        </div>
    )   
}

export default TodoItem