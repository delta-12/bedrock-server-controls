import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"
import axios from "axios"

import Server from './components/Server'
import Status from './components/Status'
import Connect from './components/Connect'
import Players from './components/Players'
import Software from './components/Software'
import Share from './components/Share'

class Dashboard extends React.Component {

  intervalID

  constructor() {
    super()
    this.state = {
      name: "Unknown",
      online: null,
      address: "Unknown",
      port: "Unknown",
      onlinePlayers: "Unknown",
      maxPlayers: "Unknown",
      gamemode: "Unknown",
      difficulty: "Unknown",
      seed: "Unknown",
      software: "Unknown",
      version: "Unknown",
      error: null
    }
  }

  onLogoutClick = e => {
    e.preventDefault()
    this.props.logoutUser()
  }

  onProfileClick = e => {
    e.preventDefault()
    // alert('Profile Click')
  }

  componentDidMount() {
    this.getData()
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID)
  }

  getData() {
    const reqData = {
      id: this.props.auth.user.id
    }
    axios
      .post("/api/servers/info", reqData)
      .then(res => {
        this.setState({
          name: res.data.data.name,
          online: res.data.data.online,
          address: res.data.data.address,
          port: res.data.data.port,
          onlinePlayers: res.data.data.onlinePlayers,
          maxPlayers: res.data.data.maxPlayers,
          gamemode: res.data.data.gamemode,
          difficulty: res.data.data.difficulty,
          seed: res.data.data.seed,
          software: res.data.data.software,
          version: res.data.data.version
        })
      })
      .catch(err =>
        this.setState({
          error: err.response.data.error
        })
      )
    this.intervalID = setTimeout(this.getData.bind(this), 5000)
  }

  render() {
    const { user } = this.props.auth
    if(this.state.error === null && this.state.online){
      return (
        <div className="appDiv">
          <nav className="navtop">
            <div>
              <h1>Bedrock Server Controls (v1.0-beta)</h1>
              <button onClick={this.onProfileClick}><i className="fas fa-user-circle"></i>{user.username}</button>
              <button onClick={this.onLogoutClick}><i className="fas fa-sign-out-alt"></i>Logout</button>
            </div>
          </nav>
          <div className="headerCards">
            <Server name={this.state.name}/>
          </div>
          <div className="cards">
            <Status id={user.id} online={this.state.online}/>
            <Connect address={this.state.address} port={this.state.port}/>
            <Players onlinePlayers={this.state.onlinePlayers} maxPlayers={this.state.maxPlayers}/>
            <Software software={this.state.software} version={this.state.version}/>
            <Share baseURL="https://bedrockcontrols.sytes.net"/>
          </div>
        </div>
      )
    }
    else if(this.state.error === null && !this.state.online){
      return (
        <div className="appDiv">
          <nav className="navtop">
            <div>
              <h1>Bedrock Server Controls (v1.0-beta)</h1>
              <button onClick={this.onProfileClick}><i className="fas fa-user-circle"></i>{user.username}</button>
              <button onClick={this.onLogoutClick}><i className="fas fa-sign-out-alt"></i>Logout</button>
            </div>
          </nav>
          <div className="headerCards">
            <Server name={this.state.name}/>
          </div>
          <div className="cards">
            <Status id={user.id} online={this.state.online}/>
            <Connect address={this.state.address} port={this.state.port}/>
            <Software software={this.state.software} version={this.state.version}/>
            <Share baseURL="https://bedrockcontrols.sytes.net"/>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="appDiv">
          <nav className="navtop">
            <div>
              <h1>Bedrock Server Controls (v1.0-beta)</h1>
              <button onClick={this.onProfileClick}><i className="fas fa-user-circle"></i>{user.username}</button>
              <button onClick={this.onLogoutClick}><i className="fas fa-sign-out-alt"></i>Logout</button>
            </div>
          </nav>
          <div className="headerCards">
            <p style={{color: "red"}}>Error: {this.state.error}</p>
            <p style={{color: "red"}}>Contact the server admin</p>
          </div>
        </div>
      )
    }
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard)
