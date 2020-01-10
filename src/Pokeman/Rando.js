import React, { Component } from 'react'

class Rando extends Component {
  constructor(props) {
    super(props)
    this.state = {num: 0}
    this.maketimer()
  }

  maketimer() {
    setInterval(()=> {
      let random = Math.floor(Math.random() * this.props.maxNum)
      console.log(random)
      this.setState({num:random})
    },1000);
  }

  render() {
    return <h1>{this.state.num}</h1>
  }
}

export default Rando