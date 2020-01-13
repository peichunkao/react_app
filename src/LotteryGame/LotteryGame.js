import React, { Component } from 'react'
import LotteryBall from './LotteryBall'
import './LotteryGame.css'

//import LotteryBall from './LotteryBall'

class LotteryGame extends Component {
  static defaultProps = {
    title: "Lotto",
    ballNumber: 6,
    maxNumber: 40
  };

  constructor(props) {
    super(props)
    this.state = {
      numberArray:Array.from({length: this.props.ballNumber})
    }
    this.handleClick = this.handleClick.bind(this)
  }

  generateNumber() {
    // let newArray = []
    // for(var i=0; i<this.props.ballNumber ; i++) {
    //   let randomNumber = Math.floor(Math.random() * this.props.maxNumber) + 1
    //   newArray.push(randomNumber)
    // }
    // this.setState({numberArray: newArray})

    let numArray = Array.from({length: this.props.maxNumber})
    for(var i=0; i<this.props.maxNumber; i++) {
      numArray[i] = i + 1
    }


    this.setState(curState => ({
      numberArray: curState.numberArray.map(
        () => numArray.splice(Math.floor(Math.random() * numArray.length), 1)[0]
      )
    }));
  }

  handleClick() {
    this.generateNumber()
  }
  
  render() {
    return (
      <div className="lottery">
        <h1>{this.props.title}</h1>
          <div className="container">
            <p>{this.state.numberArray.map(item => <LotteryBall number={item}/>)}</p>
          </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    )
  }
}

export default LotteryGame