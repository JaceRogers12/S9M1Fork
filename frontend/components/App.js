import React from 'react'
import TodoList from "./TodoList.js"
import Form from "./Form.js"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [
        { task: "wash dishes", id: 1243, completed: false },
        { task: "clean house", id: 43, completed: false },
        { task: "vacuum", id: 98, completed: true }
      ]
    }
  }
  addTodo = (value) => {
    this.setState({...this.state, list: [...this.state.list, value]})
  }
  clearComplete = (event) => {
    event.preventDefault()
    this.setState({...this.state, list: this.state.list.filter(item => {
      return !item.completed
    })})
  }
  markComplete = (id) => {
    this.setState({...this.state, list: this.state.list.map(item => {
      if (item.id == id) return {...item, completed: !item.completed};
      return item;
    })})
  }

  render() {
    return (
      <div>
        Todo App
        <TodoList list={this.state.list} markComplete={this.markComplete}/>
        <Form addTodo={this.addTodo} clearComplete={this.clearComplete}/>
      </div>
    )
  }
}
