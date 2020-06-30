import React from "react"

class Software extends React.Component {

  render() {
    return (
      <div>
        <h2>Address</h2>
        <code>{this.props.address}</code>
        <h2>Port</h2>
        <code>{this.props.port}</code>
      </div>
    )
  }

}

export default Software
