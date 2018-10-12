import React from 'react'

class Pet extends React.Component {

  gender = () => {
    if (this.props.pet.gender === "male") {
      return "♂"
    } else {
      return "♀"
    }
  }

  adopted = () => {
    if (this.props.isAdopted === false) {
      return <button className="ui primary button" onClick={this.gotAdopted.bind(this)}>Adopt pet</button>
    } else {
      return <button className="ui disabled button">Already adopted</button>
    }
  }

  gotAdopted = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card" id={this.props.pet.id}>
        <div className="content">
        <p></p>
          <a className="header">
            {this.gender()}
            <strong>{this.props.pet.name}</strong>
          </a>
          <div className="meta">
            <p></p>
            <span className="date">Type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adopted()}
        </div>
      </div>
    )
  }
}

export default Pet
