import React from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'


class JobsIndex extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/myjobs')
      .then(res => this.setState({ jobs: res.data}))
  }


  render() {
    if (!this.state.jobs) return <h1 className="loadertext"><span><img width='500px' height='500px' src="https://media1.giphy.com/media/5wJ8ZN7or1N1m/source.gif"/></span>We have our fastest hamster grabbing your content</h1>
    return(
      <section className="section has-background-light">
        <div className="container is-family-monospace">
          <div className="columns is-horizontal is-multiline">
            {this.state.jobs.map(job =>
              <div className="column is-half-tablet is-one-third-desktop" key={job.jobId}>
                <div className="card jobcard">
                  <header className="card-header">
                    <p className="card-header-title jobtitle">
                      {job.jobTitle}
                    </p>
                  </header>
                  <div className="card-content">
                    <div maxLength="100" className="content">
                      <ReactMarkdown source={job.jobDescription} className="content"/>
                      <br />
                      <p className="card-header-subtitle has-text-weight-semibold">
                        Posted on {job.date} by {job.employerName}
                      </p>
                      <p className="card-header-subtitle has-text-weight-semibold">No.of Applicants:{job.applications}</p>
                      <p className="card-header-subtitle has-text-weight-semibold">Closing date:{job.expirationDate}</p>
                    </div>
                  </div>
                  <header className="card-header">
                    <footer className="card-footer">
                      <a target="_blank" rel="noopener noreferrer" href={job.jobUrl} className="card-footer-item">Apply</a>
                      <p className="card-footer-item">{job.locationName}</p>
                    </footer>
                  </header>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }


}

export default JobsIndex
