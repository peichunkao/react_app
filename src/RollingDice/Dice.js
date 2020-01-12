import React, { Component } from 'react'
import './Dice.css'

class Dice extends Component {
  render() {
    return (
        // <i className={'${face}'}></i>
        <i
        className={`Dice fas fa-dice-${this.props.face} ${this.props.isRolling &&
          "shaking"}`}
      />
    )
  }
}

export default Dice