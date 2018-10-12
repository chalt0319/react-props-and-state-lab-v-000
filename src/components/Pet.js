import React from 'react'

class Pet extends React.Component {

  gender = () => {
    if (this.props.gender === "male") {
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
    this.props.onAdoptPet(this.props.id)
  }

  render() {
    return (
      <div className="card" id={this.props.id}>
        <div className="content">
        <p></p>
          <a className="header">
            {this.gender()}
            <strong>{this.props.name}</strong>
          </a>
          <div className="meta">
            <p></p>
            <span className="date">Type: {this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
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
