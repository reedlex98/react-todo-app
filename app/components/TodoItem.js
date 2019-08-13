import React from 'react'

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <input type="checkbox" name="task" defaultChecked={props.completed} disabled={props.completed}/>
            <label htmlFor="task" style={{textDecoration: props.completed ? 'line-through' : 'none'}}>{props.text}</label>
        </div>
    )   
}

export default TodoItem