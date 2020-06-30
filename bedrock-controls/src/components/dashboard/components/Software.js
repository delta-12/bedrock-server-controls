import React from "react"

class Software extends React.Component {

  render() {
    return (
      <div>
        <h2>Software</h2>
        <code>{this.props.software}</code>
        <h2>Version</h2>
        <code>{this.props.version}</code>
      </div>
    )
  }

}

export default Software
