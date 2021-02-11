import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {



  render() {
    let myPets = this.props.pets

    myPets.forEach(renderPet => {
      return <div className="ui cards"> <Pet pet = {renderPet}/> </div>
    })

    
  }
}

export default PetBrowser
