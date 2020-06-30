import React from "react"

class Players extends React.Component {

  render() {
    return (
      <div>
        <h2>Players</h2>
        <code>{this.props.players}</code>
      </div>
    )
  }

}

export default Players
