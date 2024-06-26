import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div onClick={this.props.mark}>
        Todo: {this.props.task}
        {this.props.completed? <span>   -finished</span> : <></> }
      </div>
    )
  }
}
