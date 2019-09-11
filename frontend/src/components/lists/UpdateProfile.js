import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'


class UpdateProfile extends React.Component {


  constructor() {
    super()

    this.state = {
      formData: {
        event_type: [],
        jobs_sector: [],
        news_topic: []
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleEventCheckbox = this.handleEventCheckbox.bind(this)
    this.checkForEvent = this.checkForEvent.bind(this)
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
    console.log(e.target.checked)
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
    return this.state.formData.event_type.includes(item)
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
                    <input className="input is-success" type="text"
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
                    <input className="input is-success" type="text" onChange={this.handleChange} name="job_title" defaultValue={this.state.formData.job_title || ''} placeholder="e.g Software Engineer"/>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal eventeditlist">
              <div className="field-label is-normal">
                <label className="label">Event type</label>
              </div>
              <label className="checkbox">
                <input
                  name="Bid Data" defaultChecked={this.checkForEvent('Big Data') || false}
                  onChange={this.handleIngredientCheckbox} type="checkbox"
                />
                Big Data
              </label>
              <label className="checkbox">
                <input id='6' type="checkbox"/>
                Social
              </label>
              <label className="checkbox">
                <input id='5' type="checkbox"/>
                Finance
              </label>
              <label className="checkbox">
                <input id='4' type="checkbox"/>
                Language
              </label>
              <label className="checkbox">
                <input id='3' type="checkbox"/>
                Charity
              </label>
              <label className="checkbox">
                <input id='2' type="checkbox"/>
              Networking
              </label>
              <label className="checkbox">
                <input id='1' type="checkbox"/>
                Tech
              </label>
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
                    <input className="input is-danger" onChange={this.handleChange} name="summary" defaultValue={this.state.formData.summary || ''} type="text" placeholder="e.g. Partnership opportunity"/>
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
