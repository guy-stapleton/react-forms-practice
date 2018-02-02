import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newPlayer: {
        name: '',
        position: ''
      }
    }
    this.updateField = this.updateField.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  // Methods
  updateField(e) {
    console.log(e.target.name, e.target.value)
    const {newPlayer} = this.state
    newPlayer[e.target.name] = e.target.value
    this.setState({newPlayer})
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.add(this.state.newPlayer)
    this.setState({newPlayer: {
      name: '',
      position: ''
    }})
    console.log(this.state)
  }
  // Render
  render() {
    const {name, position} = this.state.newPlayer
    return <form onSubmit={this.onSubmit}>
      <h1>1990s Basketball Players</h1>
      <input placeholder="name" name="name" type="text" onChange={this.updateField} />
      <input placeholder="position" name="position" type="text" onChange={this.updateField}/>
      <input type="submit" value="Add a player" />
    </form>
  }
}

export default Form
