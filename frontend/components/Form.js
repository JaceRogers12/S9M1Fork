import React from 'react'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: ""
    }
  }
changeHandler = (event) => {
  let {value} = event.target;
  this.setState({...this.state, input: value})
}
anotherItem = (event) => {
  event.preventDefault()
  let newItem = {task: this.state.input, id: Date.now(), completed: false}
  this.props.addTodo(newItem)
  this.setState({...this.state, input: ""})
}

  render() {
    return (
      <div>
        <form onSubmit={this.anotherItem}>
        Form
        <input type="text" placeholder="add a task?" onChange={event => this.changeHandler(event)} value={this.state.input}/>
        <input type="submit" value="add task" />
        <button onClick={event => this.props.clearComplete(event)}>Clear finished tasks</button>
        </form>
      </div>
    )
  }
}
