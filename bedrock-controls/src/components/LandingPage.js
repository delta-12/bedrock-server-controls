import React from 'react'
import {Link} from "react-router-dom"

class LandingPage extends React.Component {

  render() {
    return (
      <div className="appDiv">
        <h1 className="headerStyle">Bedrock Server Controls</h1>
        <div className="landing">
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/register">Register</Link>
        </div>
      </div>
    )
  }

}

export default LandingPage
