import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './../database/todosData'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: todosData
        }
    }

    render(){   
        const TodoItems = this.state.data.map(todoData => <TodoItem key={todoData.id} text={todoData.text} completed={todoData.completed}/>)
        return (
            <div className="todo">
                {TodoItems}
            </div>
        )
    }
}

export default App