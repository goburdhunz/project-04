import React from 'react'
// import {Link} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'


const Home = () => {
  return (
    <div className="container main">
      <div className="video-container">
        <video autoPlay muted loop>
          <source src= "https://i.imgur.com/SESbxyX.mp4"
            type="video/mp4"/>
        </video>
        <div className="homeintro">
          <h2 className="title is-size-1 has-text-white">HELLO, WELCOME TO PROFESS</h2>
          <h4 className="subtitle is-size-4 has-text-white">Consume content that <i>you</i> care about</h4>
        </div>
      </div>
      <footer className="footer has-background-white">
        <nav className="navbar has-background-white">
          <SocialIcon className="icon1" target="_blank" rel="noopener noreferrer" url="https://www.linkedin.com/in/zeeshan-goburdhun/"/>
          <SocialIcon className="icon2" target="_blank" rel="noopener noreferrer" url="https://www.facebook.com/"/>
          <SocialIcon className="icon3" target="_blank" rel="noopener noreferrer" url="https://twitter.com/"/>
          <SocialIcon className="icon4" target="_blank" rel="noopener noreferrer" url="https://www.instagram.com"/>
        </nav>
      </footer>
    </div>
  )

}


export default Home

// "https://i.imgur.com/SESbxyX.mp4"
// "https://imgur.com/xhiotRc.mp4"
