import React from "react"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { registerUser } from "../../actions/authActions"
import classnames from "classnames"
import {Link} from "react-router-dom"

class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      username: "",
      email: "",
      server: "",
      password: "",
      password2: "",
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
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      server: this.state.server,
      password: this.state.password,
      password2: this.state.password2
    }
    this.props.registerUser(newUser, this.props.history)
  }

  render() {
    const {errors} = this.state

    return (
      <div className="appDiv">
        <h1 className="headerStyle">Bedrock Server Controls</h1>
        <div className="login">
          <h1>Register New User</h1>
          <form noValidate onSubmit={this.onSubmit}>
            <span className="red-text">{errors.username}</span><br />
            <label>
              <input className={classnames("", {invalid: errors.username})} onChange={this.onChange} value={this.state.username} placeholder="Username" error={errors.username} id="username" type="text"/>
            </label>
            <span className="red-text">{errors.email}</span><br />
            <label>
              <input className={classnames("", {invalid: errors.email})} onChange={this.onChange} value={this.state.email} placeholder="Email" error={errors.email} id="email" type="email"/>
            </label>
            <span className="red-text">{errors.server}</span><br />
            <label>
              <input className={classnames("", {invalid: errors.server})} onChange={this.onChange} value={this.state.server} placeholder="Server Name" error={errors.server} id="server" type="text"/>
            </label>
            <span className="red-text">{errors.password}</span><br />
            <label>
              <input className={classnames("", {invalid: errors.password})} onChange={this.onChange} value={this.state.password} placeholder="Password" error={errors.password} id="password" type="password"/>
            </label>
            <span className="red-text">{errors.password2}</span><br />
            <label>
              <input className={classnames("", {invalid: errors.password2})} onChange={this.onChange} value={this.state.password2} placeholder="Confirm Password" error={errors.password2} id="password2" type="password"/>
            </label>
            <p>Already have an account? <Link className="otherLink" to="/login">Login</Link></p>
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    )

  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register))
