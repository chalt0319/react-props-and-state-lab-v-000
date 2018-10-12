import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const adoptedPetsArray = this.props.adoptedPets
    const filteredPets = this.props.pets.map((pet) => {
         return <div key={pet.id}><Pet id={pet.id} name={pet.name} age={pet.age} gender={pet.gender} weight={pet.weight} type={pet.type} isAdopted={adoptedPetsArray.includes(pet.id)} onAdoptPet={this.props.onAdopt}/></div>
      })

    return <div className="ui cards">{filteredPets}</div>
  }
}

export default PetBrowser
