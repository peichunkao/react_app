import React, { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component {
  static defaultProps = {
    boxNumber: 18,
    colors: ["purple", "magenta", "violet", "pink","blue","red","yellow","black","orange",
    "tomato","LawnGreen","SandyBrown","Khaki","DarkTurquoise"]
  }

  render() {
    const boxes = Array.from({ length: this.props.boxNumber }).map(() => (
      <Box colors={this.props.colors} />
    ));
    return <div className='BoxContainer'>{boxes}</div>;
  }
}

export default BoxContainer