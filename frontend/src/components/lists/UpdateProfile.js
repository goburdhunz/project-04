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
      jobSectors: [],
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
      jobSectors: axios.get('/api/job_sectors/').then(res => res.data)
    })
      .then(data => this.setState(data))
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({ formData})
  }

  handleCheckbox(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.checked }
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

  handleJobCheckbox(jobSector) {

    const index = this.state.formData.job_sector.findIndex(et => et.id === jobSector.id)

    let jobSectors = null

    if(index === -1) {
      jobSectors = this.state.formData.job_sector.concat(jobSector)
    } else {
      jobSectors = [
        ...this.state.formData.job_sector.slice(0, index),
        ...this.state.formData.job_sector.slice(index+1)
      ]
    }

    const formData = { ...this.state.formData, job_sector: jobSectors }
    this.setState({ formData })
  }


  handleNewsCheckbox(newsTopic) {

    const index = this.state.formData.news_topic.findIndex(et => et.id === newsTopic.id)

    let newsTopics = null

    if(index === -1) {
      newsTopics = this.state.formData.news_topic.concat(newsTopic)
    } else {
      newsTopics = [
        ...this.state.formData.news_topic.slice(0, index),
        ...this.state.formData.news_topic.slice(index+1)
      ]
    }

    const formData = { ...this.state.formData, news_topic: newsTopics }
    this.setState({ formData })
  }



  checkForEventType(eventType) {
    return this.state.formData.event_type.find(et => et.id === eventType.id)
  }

  checkForJobSector(jobSector) {
    return this.state.formData.job_sector.find(js => js.id === jobSector.id)
  }

  checkForNewsTopic(newsTopic) {
    return this.state.formData.news_topic.find(nt => nt.id === newsTopic.id)
  }


  handleSubmit(e) {
    e.preventDefault()
    const { formData } = this.state

    const user = this.getLoggedInUser()
    const eventTypes = formData.event_type.map(et => et.id)
    const jobSectors = formData.job_sector.map(js => js.id)
    const newsTopics = formData.news_topic.map(nt => nt.id)

    const data = { ...formData, event_type: eventTypes, job_sector: jobSectors, news_topic: newsTopics }

    axios.put(`/api/profile/${user}/`, data)
      .then(() => this.props.history.push('/profile/'))
      .catch(err => this.setState({errors: err.response.data}))
  }


  render() {
    console.log(this.state.formData)
    return(
      <section className="section formbox has-background-light">
        <div className="containers formcontainer">
          <form className="updateprofileform" onSubmit={this.handleSubmit}>
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

            <div className="checkboxesdiv">
              <div className="field is-horizontal eventeditlist">
                <div className="field-label is-normal">
                  <label className="label">Event types</label>
                </div>
                {this.state.eventTypes.map(eventType =>
                  <label className="checkbox" key={eventType.id}>
                    <input
                      defaultChecked={this.checkForEventType(eventType)}
                      onChange={() => this.handleEventCheckbox(eventType)} type="checkbox"
                      className="checkbox"
                    />
                    {eventType.event_type}
                  </label>
                )}
              </div>

              <div className="field is-horizontal eventeditlist">
                <div className="field-label is-normal">
                  <label className="label">Job Sectors</label>
                </div>
                {this.state.jobSectors.map(jobSector =>
                  <label className="checkbox" key={jobSector.id}>
                    <input
                      defaultChecked={this.checkForJobSector(jobSector)}
                      onChange={() => this.handleJobCheckbox(jobSector)}
                      type="checkbox"
                      className="checkbox"
                    />
                    {jobSector.job_sector}
                  </label>
                )}
              </div>

              <div className="field is-horizontal eventeditlist">
                <div className="field-label is-normal">
                  <label className="label">News Topics</label>
                </div>
                {this.state.newsTopics.map(newsTopic =>
                  <label className="checkbox" key={newsTopic.id}>
                    <input
                      defaultChecked={this.checkForNewsTopic(newsTopic)}
                      onChange={() => this.handleNewsCheckbox(newsTopic)} type="checkbox"
                      className="checkbox"
                    />
                    {newsTopic.news_topic}
                  </label>
                )}
              </div>
            </div>

            <hr />

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
                    <button className="button is-primary updateprofilesubmit">
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
