import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'steven',
      age: 31,
      clicked: false      
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    if (this.state.clicked) {
      this.setState({clicked: false})
      console.log("true")
    } else {
      this.setState({clicked: true})
      console.log("false")
    }
  }

  render() {
    return (
      <div>
        <h1>This Button is 
          {this.state.clicked? ' clicked.' : ' not clicked.'}
        </h1>
        <button onClick={this.handleClick}>Broken</button>
      </div>
    )
  }
}

export default Button