import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
  }
  // Methods
  render() {
    return <form>
      <h1>1990s Basketball Players</h1>
      <input placeholder="name" name="name" type="text" />
      <input placeholder="position" name="name" type="text" />
      <input type="submit" value="Add a player" />
    </form>
  }
}

export default Form
