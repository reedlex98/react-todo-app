import React from 'react'
import TodoItem from './components/TodoItem'
import todosData from './../database/todosData'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState( prev => {
            return ({
                data: prev.data.map( todo => {
                    if (todo.id === id)
                        todo.completed = !todo.completed
                    return todo
                })
            })
        })
    }

    render(){   
        const TodoItems = this.state.data.map(todoData => <TodoItem app={this} id={todoData.id} key={todoData.id} text={todoData.text} completed={todoData.completed}/>)
        
        return (
            <div className="todo">
                {TodoItems}
            </div>
        )
    }
}

export default App