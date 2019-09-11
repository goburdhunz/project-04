import React from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'


class EventsIndex extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/mynews')
      .then(res => this.setState({ news: res.data}))
  }


  render() {
    if (!this.state.news) return <h1 className="loadertext"><span><img width='500px' height='500px' src="https://media1.giphy.com/media/5wJ8ZN7or1N1m/source.gif"/></span>We have our fastest hamster grabbing your content</h1>
    return(
      <section className="section has-background-light">
        <div className="container is-family-monospace">
          <div className="columns is-horizontal is-multiline">
            {this.state.news.map(news =>
              <div className="column is-half-tablet is-one-third-desktop" key={news.source.name}>
                <div className="card jobcard">
                  <header className="card-header">
                    <p className="card-header-title jobtitle">
                      {news.title}
                    </p>
                  </header>
                  <img src={news.urlToImage}/>
                  <hr />
                  <span className="subtitle newsauthor">By {news.author}</span>
                  <div className="card-content">
                    <div maxLength="100" className="content ellipsis">
                      <ReactMarkdown
                        source={news.content} className="content"/>
                      <br />
                    </div>
                  </div>
                  <header className="card-header">
                    <footer className="card-footer">
                      <a target="_blank" rel="noopener noreferrer" href={news.url} className="card-footer-item">Read Here</a>
                      <p className="card-footer-item has-text-weight-semibold tickettype">{news.source.name}</p>
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
