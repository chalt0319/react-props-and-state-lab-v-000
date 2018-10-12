import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const adoptedPetsArray = this.props.adoptedPets
    const filteredPets = this.props.pets.map((pet) => {
         return <div key={pet.id}><Pet pet={pet} isAdopted={adoptedPetsArray.includes(pet.id)} onAdoptPet={this.props.onAdopt}/></div>
      })
    
    return <div className="ui cards">{filteredPets}</div>
  }
}

export default PetBrowser
