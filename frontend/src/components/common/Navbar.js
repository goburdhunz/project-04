import React from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends React.Component {

  constructor() {
    super()
    this.state = {}
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
              <Link to="/register" className="navbar-item">Register</Link>
              <Link to="/login" className="navbar-item">Login</Link>
              <a className="navbar-item">Logout</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }



}

export default withRouter(Navbar)
