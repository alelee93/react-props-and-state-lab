import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  selectedFilter = (word) => {
    this.setState({
      filters: word
    })
  }

  fetchReq = () => {
    console.log('THIS IS PARAM!!!!!')
    let url = '/api/pets'
    if(this.state.filters.type !== 'all') {
       url += `?type=${this.state.filters.type }`
    } 

    fetch(`${url}`)
    .then(response => response.json())
    .then(data => this.setState({
      pets: data
    }))
  }

  adoptPet = (petId) => {
    let adoptedPet = this.state.pets.find(pet => pet.id == petId)
    adoptedPet.isAdopted = true
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
              <Filters onChangeType={this.selectedFilter} onFindPetsClick={this.fetchReq}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
