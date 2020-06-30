import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"

import Server from './components/Server'
import Status from './components/Status'
import Connect from './components/Connect'
import Players from './components/Players'
import Software from './components/Software'
import Share from './components/Share'

class Dashboard extends React.Component {
  onLogoutClick = e => {
    e.preventDefault()
    this.props.logoutUser()
  }

  onProfileClick = e => {
    e.preventDefault()
    alert('Profile Click')
  }

  render() {
    const { user } = this.props.auth
    return (
      <div className="appDiv">
        <nav className="navtop">
          <div>
            <h1>Bedrock Server Controls</h1>
            <button onClick={this.onProfileClick}><i className="fas fa-user-circle"></i>{user.username}</button>
            <button onClick={this.onLogoutClick}><i className="fas fa-sign-out-alt"></i>Logout</button>
          </div>
        </nav>
        <div className="headerCards">
          <Server name="Server"/>
        </div>
        <div className="cards">
          <Status status="Offline"/>
          <Connect address="192.168.0.100" port="19132"/>
          <Players players="3/10 Online"/>
          <Software software="Bedrock" version="1.16"/>
          <Share baseURL="http://3.128.29.141"/>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard)
