import React, {Component} from 'react';
import './App';
import './App.css';
import Game from './Game'
import Rando from './Rando'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
        <Rando maxNum = {7}/>
      </div>
    );
  }
}

export default App;
