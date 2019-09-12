import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Promise from 'bluebird'


class UpdateProfile extends React.Component {


  constructor() {
    super()

    this.state = {
      formData: {
        event_type: [],
        jobs_sector: [],
        news_topic: []
      },
      eventTypes: [],
      newsTopics: [],
      jobsSector: [],
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleEventCheckbox = this.handleEventCheckbox.bind(this)
    this.checkForEventType = this.checkForEventType.bind(this)
  }

  getLoggedInUser() {
    const user = Auth.getUserId()
    return user
  }

  componentDidMount() {
    const userId = this.getLoggedInUser()

    Promise.props({
      formData: axios.get(`/api/profile/${userId}/`).then(res => res.data),
      eventTypes: axios.get('/api/event_types/').then(res => res.data),
      newsTopics: axios.get('/api/news_topics/').then(res => res.data),
      jobsSector: axios.get('/api/job_sectors/').then(res => res.data)
    })
      .then(data => this.setState(data))
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({ formData})
  }

  handleCheckbox(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.checked }
    console.log(e.target.checked)
    this.setState({ formData })
  }

  handleEventCheckbox(eventType) {

    const index = this.state.formData.event_type.findIndex(et => et.id === eventType.id)

    let eventTypes = null

    if(index === -1) {
      eventTypes = this.state.formData.event_type.concat(eventType)
    } else {
      eventTypes = [
        ...this.state.formData.event_type.slice(0, index),
        ...this.state.formData.event_type.slice(index+1)
      ]
    }

    const formData = { ...this.state.formData, event_type: eventTypes }
    this.setState({ formData })
  }

  checkForEventType(eventType) {
    return this.state.formData.event_type.find(et => et.id === eventType.id)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { formData } = this.state

    const user = this.getLoggedInUser()
    const eventTypes = formData.event_type.map(et => et.id)

    const data = { ...formData, event_type: eventTypes }

    axios.put(`/api/profile/${user}/`, data)
      .then(() => this.props.history.push(`/api/profile/${user}`))
      .catch(err => this.setState({errors: err.response.data}))
  }


  render() {
    return(
      <section className="section formbox has-background-light">
        <div className="containers formcontainer">
          <form onSubmit={this.handleSubmit}>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Name</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      onChange={this.handleChange}
                      defaultValue={this.state.formData.first_name || ''}
                      name="first_name"
                      placeholder="e.g 'John'"/>
                  </p>
                </div>

                <div className="field">
                  <p className="control is-expanded">
                    <input className="input" type="text" onChange={this.handleChange} defaultValue={this.state.formData.last_name || ''} name="last_name" placeholder="e.g 'Smith'"/>
                  </p>
                </div>
                <div className="field-label is-normal">
                  <label className="label">Location</label>
                </div>
                <div className="field">
                  <p className="control is-expanded">
                    <input className="input is-success" type="text"
                      onChange={this.handleChange}
                      name="location" defaultValue={this.state.formData.location || ''} placeholder="e.g London"/>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Image URL</label>
              </div>
              <div className="field-body">
                <div className="field is-expanded">
                  <p className="control is-expanded">
                    <input className="input" type="text"
                      onChange={this.handleChange}
                      name="image" defaultValue={this.state.formData.image || ''}
                      placeholder="e.g Software Engineer"
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Jobtitle</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <p className="control is-expanded">
                    <input className="input" type="text" onChange={this.handleChange} name="job_title" defaultValue={this.state.formData.job_title || ''} placeholder="e.g Software Engineer"/>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal eventeditlist">
              <div className="field-label is-normal">
                <label className="label">Event type</label>
              </div>
              {this.state.eventTypes.map(eventType =>
                <label className="checkbox" key={eventType.id}>
                  <input
                    defaultChecked={this.checkForEventType(eventType)}
                    onChange={() => this.handleEventCheckbox(eventType)} type="checkbox"
                  />
                  {eventType.event_type}
                </label>
              )}
            </div>

            <div className="field is-horizontal jobeditlist">
              <div className="field-label is-normal">
                <label className="label">Job Sectors</label>
              </div>
              <label className="checkbox">
                <input id='1' type="checkbox"/>
                Consulting
              </label>
              <label className="checkbox">
                <input id='2' type="checkbox"/>
                Human Resources
              </label>
              <label className="checkbox">
                <input id='3' type="checkbox"/>
                Public Relations
              </label>
              <label className="checkbox">
                <input id='4' type="checkbox"/>
                Marketing
              </label>
              <label className="checkbox">
                <input id='5' type="checkbox"/>
                Finance
              </label>
              <label className="checkbox">
                <input id='6' type="checkbox"/>
              Tech
              </label>
              <label className="checkbox">
                <input id='7' type="checkbox"/>
                Advertising
              </label>
            </div>

            <div className="field is-horizontal newseditlist">
              <div className="field-label is-normal">
                <label className="label">News topics</label>
              </div>
              <label className="checkbox ">
                <input id='1' type="checkbox"/>
                Science
              </label>
              <label className="checkbox">
                <input id='2' type="checkbox"/>
                Politics
              </label>
              <label className="checkbox">
                <input id='3' type="checkbox"/>
                Environment
              </label>
              <label className="checkbox">
                <input id='4' type="checkbox"/>
                Advertising
              </label>
              <label className="checkbox">
                <input id='5' type="checkbox"/>
                Finance
              </label>
              <label className="checkbox">
                <input id='6' type="checkbox"/>
              Tech
              </label>
              <label className="checkbox">
                <input id='7' type="checkbox"/>
                Education
              </label>
            </div>


            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Summary</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input" onChange={this.handleChange} name="summary" defaultValue={this.state.formData.summary || ''} type="text" placeholder="e.g. Partnership opportunity"/>
                  </div>
                </div>
              </div>
            </div>


            <div className="field is-horizontal">
              <div className="field-label">

              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <button className="button is-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default UpdateProfile
