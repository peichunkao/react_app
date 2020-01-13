import React, { Component } from 'react'
import './App.css';
import LotteryGame from './LotteryGame'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <LotteryGame title="Lottery" ballNumber={6} maxNumber={40}/>
        <LotteryGame title="SmallLotery" ballNumber={4} maxNumber={5}/>
      </div>
    )
  }
}

export default App;