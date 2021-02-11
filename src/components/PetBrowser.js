import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {



  render() {
    let myPets = this.props.pets

    const petsList = myPets.map(renderPet => {
      //console.log(this.props)
      return <div className="ui cards"> <Pet pet = {renderPet} onAdoptPet = {this.props.onAdoptPet}/> </div>
    })

    return(
    <div>{petsList}</div>
    )
    
  }
}

export default PetBrowser
