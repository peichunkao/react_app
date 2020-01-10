import React, { Component } from 'react'
import './Pokecard.css'

const Poke_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
let padToThree = number => (number <=999) ? `00${number}`.slice(-3) : number

class Pokecard extends Component {
  render() {
    let pokeNumber = '00${this.props.name}'
    let imgSrc = `${Poke_API}${padToThree(this.props.id)}.png`;
    console.log(imgSrc)
    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{this.props.name}</h1>
        <div className='Pokecard-image'>
          <img  src={imgSrc} alt={"pokeName"}/> 
        </div>
        <p className='Pokecard-data'>Type:{this.props.type}</p>
        <p className='Pokecard-data'>Exp:{this.props.exp}</p>
      </div>
    )
  }
}

export default Pokecard


// import React, { Component } from 'react'

// class Pokecard extends Component {
//   render() {
//     return (
//       <p>Pokecard</p>
//     )
//   }
// }

// export default Pokecard