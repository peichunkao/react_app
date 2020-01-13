import React, { Component } from 'react'
import './LotteryBall.css'

class LotteryBall extends Component {
  render() {
    return (
      <div className="ball">
        {this.props.number}
      </div>
    )
  }
}

export default LotteryBall