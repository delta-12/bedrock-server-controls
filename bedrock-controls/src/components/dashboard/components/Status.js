import React from 'react'
import StartStop from './StartStop'

class Status extends React.Component {

  render() {
    return (
      <div>
        <div><h2>Status</h2></div>
        <code>{this.props.status}</code>
        <StartStop />
      </div>
    )
  }

}

export default Status
