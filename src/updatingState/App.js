import React, { Component } from 'react'
//import Dice from './Dice'
import ScoreKeeper from './ScoreKeeper'
import IconList from './IconList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ScoreKeeper />
        <IconList />
      </div>
    )
  }
}

export default App;