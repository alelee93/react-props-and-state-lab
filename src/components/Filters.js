import React from 'react'

class Filters extends React.Component {

  filterPet = (event) => {
    //console.log('props is ', this.props.onChangeType)
    this.props.onChangeType(event.target.value)
  }

  // handleOnclick = (event) => {
  //   console.log("THIS IS EVENT", event)
  //   this.props.onFindPetsClick(event.target.value)
  // }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={event => this.filterPet(event)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
