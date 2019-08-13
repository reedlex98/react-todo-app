import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './../database/todosData'

const App = () => {
    const TodoItems = todosData.map(todoData => <TodoItem key={todoData.id} text={todoData.text} completed={todoData.completed}/>)
    return (
        <div className="todo">
            {TodoItems}
        </div>
    )
}

export default App