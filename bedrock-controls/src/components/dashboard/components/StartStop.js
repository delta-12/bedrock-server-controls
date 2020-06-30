import React from 'react'

class StartStop extends React.Component {

  constructor() {
    super()
    this.state = {
      started: null,
    }
    this.handlestarted = this.handlestarted.bind(this)
  }

  componentsDidMount() {
    return null // get status
  }

  handlestarted() {
    this.setState (
      function() {
        if(this.state.started) {
          return {
            started: false
          }
        }
        else {
          return {
            started: true
          }
        }
      }
    )
  }

  render() {

    if(this.state.started) {
      return (
        <div>
          <button className="stopButton" onClick={this.handlestarted}><h3>Stop</h3></button>
        </div>
    )}
    else {
      return (
        <div>
          <button className="startButton" onClick={this.handlestarted}><h3>Start</h3></button>
        </div>
    )}
  }

}

export default StartStop
