import React from 'react'


import Form from './Form'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [
        {name: 'Michael Jordan', position: 'Shooting Guard'}
      ]
    }

    this.addPlayer = this.addPlayer.bind(this)
  }
  //
  addPlayer(player) {
    const {players} = this.state
    players.push(player)
    this.setState({players})
  }
  render() {
    return <div>
      <h1>React development has begun!</h1>
      <Form add={this.addPlayer}/>
      <table>
  <thead>
   <tr>
   <td>Name</td>
   <td>Position</td>
   </tr>
  </thead>
<tbody>
   {this.state.players.map((player, i) =><tr key={i}>
 <td>{player.name}</td>
 <td>{player.position}</td>
</tr>)}
</tbody>
</table>
</div>
  }

}

export default App
