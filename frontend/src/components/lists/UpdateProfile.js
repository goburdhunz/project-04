import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Forms from './Forms'


class UpdateProfile extends React.Component {


  constructor() {
    super()

    this.state = {
      formData: {
        eventtype: [],
        jobsector: [],
        newstopic: []
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  getLoggedInUser() {
    const user = Auth.getUserId()
    return user
  }

  componentDidMount() {
    const user = this.getLoggedInUser()
    axios.get(`/api/profile/${user}`)
      .then(res => this.setState({ formData: res.data }))
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({ formData})
  }

  handleCheckbox(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.checked }
    this.setState({ formData })
  }

  handleEventCheckbox(e) {
    let eventtype = [ ...this.state.formData.event_type ]
    if(e.target.checked) {
      eventtype.push(e.target.name)
      eventtype = [...new Set(eventtype)]
    } else {
      const index = eventtype.indexOf(e.target.name)
      eventtype.splice(index, 1)
    }
    const formData = { ...this.state.formData, eventtype }
    this.setState({ formData })
  }

  checkForEvent(item) {
    return this.state.formData.eventtype.includes(item)
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = this.getLoggedInUser()
    axios.put(`/api/profile/${user}/`, this.state.formData)
      .then(() => this.props.history.push(`/api/profile/${user}`))
      .catch(err => this.setState({errors: err.response.data}))
  }


  render() {
    console.log(this.state.formData)
    return(
      <Forms
        firstname={this.state.formData.first_name}
        lastname={this.state.formData.last_name}
        image={this.state.formData.image}
        location={this.state.formData.location}
        jobtitle={this.state.formData.job_title}
        summary={this.state.formData.summary}
        jobsector={this.state.formData.job_sector}
        newstopic={this.state.formData.news_topic}
        eventtype={this.state.formData.event_type}
        onChange={this.handleChange}
        onChange2={this.handleCheckbox}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

export default UpdateProfile
