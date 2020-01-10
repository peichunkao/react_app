import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component {
  render() {
		let title;
		if (this.props.isWinner) {
			title = <h1 className="Pokedex-winner">Winning Hand</h1>;
		} else {
			title = <h1 className="Pokedex-loser">Losing Hand</h1>;
		}

    return (
      <div className='Pokedex'>
        <h1>{title}</h1>
        <div className='Pokedex-cards'>
          {this.props.pokemon.map((element)=>(
            <Pokecard id={element.id} name={element.name} type={element.type} exp={element.base_experience}/>
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex