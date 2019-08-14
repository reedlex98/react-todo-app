import React from 'react'

        // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
        // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <input onChange={props.handleChange} type="checkbox" name="task" defaultChecked={props.completed}/>
            <label htmlFor="task" style={{textDecoration: props.completed ? 'line-through' : 'none'}}>{props.text}</label>
        </div>
    )   
}

export default TodoItem