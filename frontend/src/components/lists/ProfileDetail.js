import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import {Link} from 'react-router-dom'


class ProfileDetail extends React.Component {


  constructor() {
    super()
    this.state = {}
    this.getLoggedInUser = this.getLoggedInUser.bind(this)

  }

  getLoggedInUser() {
    const user = Auth.getUserId()
    return user
  }


  componentDidMount() {
    const user = this.getLoggedInUser()
    axios.get(`/api/profile/${user}`)
      .then(res => this.setState({user: res.data}))
  }


  render() {
    if (!this.state.user) return null
    return (
      <section className="section has-background-light">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-3">
              <article className="tile is-child box">
                <article className="tile is-child box has-background-light">
                  <img className="profileimage" src={this.state.user.image}/>
                </article>

                <div className ="buttons">
                  <Link to={`/profile/${this.state.user.id}/`} className="button has-background-success editbutton">Edit</Link>
                </div>

              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <article className="tile is-child box has-background-light">
                  <p className="title">{this.state.user.first_name} {this.state.user.last_name}</p>
                  <p className="subtitle">{this.state.user.job_title}</p>
                  <p className="subtitle">{this.state.user.location}</p>
                  <div className="content">
                    <p>{this.state.user.summary}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                  </div>
                </article>
              </article>
            </div>
            <div className="tile is-parent is-3">
              <article className="tile is-child box">
                <article className="tile is-child box has-background-light">
                  <p className="title is-4">News Topics Interested In</p>
                  {this.state.user.news_topic.map(newstopic =>
                    <p key={newstopic.id} className="subtitle is-8 box">{newstopic.news_topic}</p>
                  )}
                </article>
              </article>
            </div>
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child box">
                    <article className="tile is-child box has-background-light">
                      <p className="title is-4">Event Type Interested In</p>
                      {this.state.user.event_type.map(eventtype =>
                        <p key={eventtype.id} className="subtitle is-8 box">{eventtype.event_type}</p>
                      )}
                    </article>
                  </article>
                  <article className="tile is-child box">
                    <article className="tile is-child box has-background-light">
                      <p className="title is-4">Jobs Sectors Interested In</p>
                      {this.state.user.job_sector.map(jobsector =>
                        <p key={jobsector.id} className="subtitle is-8 box">{jobsector.job_sector}</p>
                      )}
                    </article>
                  </article>
                </div>


                <div className="tile is-parent is-vertical is-8">
                  <article className="tile is-child box">
                    <article className="tile is-child box has-background-light">
                      <img src={this.state.user.blogs[0].image}/>
                      <p className="title is-4">{this.state.user.blogs[0].title}</p>
                      <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                      <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                    </article>
                  </article>
                </div>
              </div>
              <div className="tile is-parent is-8">
                <article className="tile is-child box">
                  <article className="tile is-child box has-background-light">
                    <img src={this.state.user.blogs[1].image}/>
                    <p className="title is-4">{this.state.user.blogs[1].title}</p>
                    <div className="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                    </div>
                  </article>
                </article>
              </div>
            </div>
            <div className="tile is-parent is-4">
              <article className="tile is-child box">
                <article className="tile is-child box has-background-light">
                  <div className="content has-background-light">
                    <p className="subtitle">What do you think of this ad?</p>
                    <div className="content">
                      <figure className="image is-3by3">
                        <img src="https://i.imgur.com/wloz6kt.png"/>
                      </figure>
                    </div>
                  </div>
                </article>
              </article>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

export default ProfileDetail
