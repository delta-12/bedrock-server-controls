import React from "react"

class Players extends React.Component {

  render() {
    return (
      <div>
        <h2>Players</h2>
        <code>{this.props.onlinePlayers}/{this.props.maxPlayers} Online</code>
      </div>
    )
  }

}

export default Players
