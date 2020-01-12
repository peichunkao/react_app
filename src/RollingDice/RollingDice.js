import React, { Component } from 'react'
import Dice from './Dice'
import './RollingDice.css'


class RollingDice extends Component {
  static defaultProps = {
    sides: ["one","two","three","four","five","six"]
  }

  constructor(props) {
    super(props)
    this.state = { dice1: 'one', dice2: 'one', isRolling: false }
    this.roll = this.roll.bind(this)
  }

  roll() {
    let newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    let newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    this.setState({dice1:newDice1, dice2:newDice2, isRolling: true})

    setTimeout(() => {
      this.setState({isRolling: false})
    },1000)
  }
  
  render() {
    return (
      <div className='RollingDice'>
        <div className='container'>
          <Dice face={this.state.dice1} isRolling={this.state.isRolling}/>
          <Dice face={this.state.dice2} isRolling={this.state.isRolling}/>
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    )
  }
}

export default RollingDice