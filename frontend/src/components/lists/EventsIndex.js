import React from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'


class EventsIndex extends React.Component {
  constructor() {
    super()

    this.state = {events: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/myevents')
      .then(res => this.setState({ events: res.data}))
  }


  render() {
    return(
      <section className="section has-background-light">
        <div className="container is-family-monospace">
          <div className="columns is-horizontal is-multiline">
            {this.state.events.map(event =>
              <div className="column is-half-tablet is-one-half-desktop" key={event.id}>
                <div className="card jobcard">
                  <header className="card-header">
                    <p className="card-header-title">
                      {event.name.text}
                    </p>
                  </header>
                  <img src={event.logo.original.url}/>
                  <hr />
                  <div className="card-content">
                    <div maxLength="100" className="content ellipsis">
                      <ReactMarkdown
                        source={event.description.text} className="content"/>
                      <br />
                    </div>
                  </div>
                  <header className="card-header">
                    <footer className="card-footer">
                      <a target="_blank" rel="noopener noreferrer" href={event.url} className="card-footer-item">Attend Here</a>
                      <p className="card-footer-item has-text-weight-semibold tickettype">Ticket type:{event.inventory_type}</p>
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

export default EventsIndex