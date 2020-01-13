import React, { Component } from 'react'

class ScoreKeeper extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       score: 0
    }
    this.singleKill = this.singleKill.bind(this)
    this.tripleKill = this.tripleKill.bind(this)
  }

  singleKill() {
    this.setState({score:this.state.score+1})
  }

  // tripleKill() {
  //   this.setState(curState => 
  //     {return {score:curState.score + 1}
  //   });
  //   this.setState(curState => 
  //     {return {score:curState.score + 1}
  //   });
  //   this.setState(curState => 
  //     {return {score:curState.score + 1}
  //   });
  // }

  increment(curState) {
    return {
      score: curState.score + 1
    }
  }

  tripleKill() {
    this.setState(this.increment);
    this.setState(this.increment);
    this.setState(this.increment);
  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>One kill!!</button>
        <button onClick={this.tripleKill}>Triple kill!!</button>
      </div>
    )
  }
}

export default ScoreKeeper