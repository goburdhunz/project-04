import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import Auth from '../../lib/Auth'

class Navbar extends React.Component {

  constructor() {
    super()
    this.state = {}
    this.logout = this.logout.bind(this)
  }

  logout() {
    Auth.removeToken()
    this.props.history.push('/')
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item giflogo"><img src='https://i.imgur.com/6MbbX2i.gif'/></Link>
          </div>

          <div className='navbar-menu'>
            <div className= "navbar-start">
              <Link to="/blogs/" className="navbar-item">Blogs</Link>
              <Link to="/" className="navbar-item">Profile</Link>
            </div>

            <div className="navbar-end">
              {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
              {Auth.isAuthenticated() && <a onClick={this.logout} className="navbar-item">Logout</a>}
            </div>
          </div>
        </div>
      </nav>
    )
  }



}

export default withRouter(Navbar)
