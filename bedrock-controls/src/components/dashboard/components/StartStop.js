import React from 'react'
import axios from "axios"

class StartStop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      online: this.props.online,
      id: this.props.id,
      success: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.online !== prevProps.online){
      this.setState({
        online: this.props.online,
      })
    }
  }

  handleClick = e => {
    e.preventDefault()
    let reqData = {}
    if(this.state.online === true){
      reqData = {
        id: this.props.id,
        online: false
      }
    }
    else if(this.state.online === false){
      reqData = {
        id: this.props.id,
        online: true
      }
    }
    axios
      .post("/api/servers/online", reqData)
      .catch(err =>
        this.setState({
          error: err.response.data.error
        })
      )
  }

  render() {
    if(this.props.online) {
      return (
        <div>
          <button className="stopButton" onClick={this.handleClick}><h3>Stop</h3></button>
        </div>
    )}
    else {
      return (
        <div>
          <button className="startButton" onClick={this.handleClick}><h3>Start</h3></button>
        </div>
    )}
  }

}

export default StartStop
