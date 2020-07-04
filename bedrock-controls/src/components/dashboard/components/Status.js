import React from 'react'
import StartStop from './StartStop'

class Status extends React.Component {

  render() {

    let styles = {
      color: "red"
    }
    let text = "Offline"

    if(this.props.online){
      styles = {
        color: "green"
      }
      text = "Online"
    }

    return (
      <div>
        <div><h2>Status</h2></div>
        <code style={styles}>{text}</code><br />
        <code>Update interval: 5.0s</code>
        <StartStop id={this.props.id} online={this.props.online}/>
      </div>
    )
  }

}

export default Status
