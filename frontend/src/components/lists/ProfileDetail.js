import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'



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
    console.log(this.state.user)
    return (
      <section className="section has-background-light">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-3">
              <article className="tile is-child box">
                <article className="tile is-child box has-background-light">
                  <img src={this.state.user.image}/>
                </article>
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
                  <p className="subtitle is-6 box">{this.state.user.news_topic[0].news_topic}</p>
                  <p className="subtitle is-6 box">{this.state.user.news_topic[1].news_topic}</p>
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
                      <p className="subtitle is-6 box">{this.state.user.event_type[0].event_type}</p>
                      <p className="subtitle is-6 box">{this.state.user.event_type[1].event_type}</p>
                      <p className="subtitle is-6 box">{this.state.user.event_type[1].event_type}</p>
                      <p className="subtitle is-6 box">{this.state.user.event_type[2].event_type}</p>
                    </article>
                  </article>
                  <article className="tile is-child box">
                    <article className="tile is-child box has-background-light">
                      <p className="title is-4">Jobs Sectors Interested In</p>
                      <p className="subtitle is-6 box">{this.state.user.job_sector[0].job_sector}</p>
                      <p className="subtitle is-6 box">{this.state.user.job_sector[1].job_sector}</p>
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
