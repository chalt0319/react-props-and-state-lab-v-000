import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeFilters = (e) => {
    this.setState({
      filters: {type: e}
    })
  }

  findPetsButton = () => {
    if (this.state.filters.type === "all") {
      fetch('/api/pets')
        .then(response => response.json())
        .then(data => this.setState({ pets: data }))
    } else {
      fetch('/api/pets?type=' + this.state.filters.type)
        .then(response => response.json())
        .then(data => this.setState({ pets: data }))
    }
  }

  onAdopt = (id) => {
    debugger
    let petsArray = this.state.adoptedPets

    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeFilters} onFindPetsClick={this.findPetsButton}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdopt={this.onAdopt.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
