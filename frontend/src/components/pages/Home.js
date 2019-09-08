import React from 'react'
import {Link} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'


const Home = () => {
  return (
    <div className="container main">
      <div className="video-container">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item giflogo"><img src='https://i.imgur.com/6MbbX2i.gif'/></Link>
            </div>

            <div className='navbar-menu'>
              <div className= "navbar-start">
                <Link to="/" className="navbar-item">Blogs</Link>
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
        <video autoPlay muted loop>
          <source src= "https://i.imgur.com/SESbxyX.mp4"
            type="video/mp4"/>
        </video>
        <h2 className="title is-size-1 has-text-white">HELLO, WELCOME TO PROFESS</h2>
        <h4 className="subtitle is-size-4 has-text-white">Blog and consume content that you care about</h4>
      </div>
      <footer className="footer has-background-white">
        <nav className="navbar has-background-white">
          <SocialIcon className="icon1" url="https://www.linkedin.com/in/zeeshan-goburdhun/"/>
          <SocialIcon className="icon2" url="https://www.facebook.com/"/>
          <SocialIcon className="icon3" url="https://twitter.com/"/>
          <SocialIcon className="icon4" url="https://www.instagram.com"/>
        </nav>
      </footer>
    </div>
  )

}


export default Home

// "https://i.imgur.com/SESbxyX.mp4"
// "https://imgur.com/xhiotRc.mp4"
