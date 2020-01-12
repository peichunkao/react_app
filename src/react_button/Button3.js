import React, { Component } from 'react'
import './Button.css'

class Button3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked:false,
      number:0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({clicked: true, number:this.random(this.props.maxNumber)})
  }

  random(maxNumber) {
    return Math.floor(Math.random() * maxNumber) + 1
  }

  render() {
    return (
      <div>
        <div className='container'>
          <h1>Number is {this.state.number}</h1>
          <button className={this.state.number === 7? 'button-hidden': 'button-display'} onClick={this.handleClick}>
          Random Number
          </button>
          <h1 className={this.state.number === 7? 'button-display': 'button-hidden'}>You win!</h1>
        </div>

        <div className='container'>
          <h1>Number is {this.state.number}</h1>
          {this.state.number === 7
            ? <h2>You Win!!</h2>
            : <button onClick={this.handleClick}>Random Number</button>
          }
        </div>
      </div>
    )
  }
}

export default Button3