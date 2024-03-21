import React from 'react'
import Todo from "./Todo.js"

export default class TodoList extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        TodoList
        {this.props.list.map(item => {
          return <Todo 
          task={item.task} 
          key={item.id} 
          completed={item.completed} 
          mark={() => this.props.markComplete(item.id)}
          />
        })}
      </div>
    )
  }
}
