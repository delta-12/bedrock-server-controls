import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { loginUser } from "../../actions/authActions"
import classnames from "classnames"
import {Link} from "react-router-dom"

class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      errors: {}
    }
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard")
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard") // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const userData = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.loginUser(userData) // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  }

  // fix email and password errors as to not reveal which is incorrect
  render() {
    const { errors } = this.state

    return (
      <div className="appDiv">
        <h1 className="headerStyle">Bedrock Server Controls</h1>
        <div className="login">
          <h1>Server Login</h1>
          <form noValidate onSubmit={this.onSubmit}>
            <span className="red-text">
                  {errors.username}
                  {errors.usernamenotfound}
            </span>
            <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
            </span>
            <br />
            <label>
              <input
                onChange={this.onChange}
                value={this.state.username}
                error={errors.username}
                id="username"
                type="text"
                placeholder="Username"
                className={classnames("", {
                    invalid: errors.username || errors.usernamenotfound
                  })}
              />
            </label>
            <br />
            <label>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                placeholder="Password"
                className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
              />
            </label>
            <p>Don't have an account? <Link className="otherLink" to="/register">Register</Link></p>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(
  mapStateToProps,
  { loginUser }
)(Login)
