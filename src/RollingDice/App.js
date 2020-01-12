import React, { Component } from 'react'
//import Dice from './Dice'
import RollingDice from './RollingDice'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <RollingDice />
      </div>
    )
  }
}

export default App;