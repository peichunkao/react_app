import React, {Component} from 'react';
import './App';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 5,
      gameOver: false
    }
  }
  render() {
    return <div><h1>Your score is: {this.state.score}</h1></div>
  }
}

export default Game;