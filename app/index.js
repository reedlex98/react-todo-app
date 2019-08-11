// From scratch, initialize the React app
// Render an <App /> component
// Create the <App /> component from scratch
// Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
// like you're making a todo list with some hard-coded items on it

import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div className="todo">
            <div>
                <input type="checkbox" name="task1" value="finished"/>
                <label htmlFor="task1">First task</label>
            </div>
            <div>
                <input type="checkbox" name="task2" value="finished"/>
                <label htmlFor="task2">Second task</label>
            </div>
            <div>
                <input type="checkbox" name="task3" value="finished"/>
                <label htmlFor="task3">Third task</label>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))