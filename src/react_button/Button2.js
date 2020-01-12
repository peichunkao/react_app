import React, { Component } from 'react'

class Button2 extends Component {
  state = {clicked:false}

  handleClick = e => {
    this.setState({clicked: true})
  }

  render() {
    return (
      <div>
        <h1>This Button is 
          {this.state.clicked? ' clicked.' : ' not clicked.'}
        </h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default Button2