import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class BlogsCreate extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {
        created_by: 1
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value}
    const errors = { ...this.state.errors, [e.target.name]: ''}
    this.setState({ formData, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/blogs/', this.state.formData)
      .then(() => this.props.history.push('/blogs'))
      .catch(err => this.setState({errors: err.response.data}))
  }


  render() {
    console.log(this.state.formData)
    return(
      <section className="section has-background-light">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input className="input" type="text" name="title" onChange={this.handleChange} placeholder="Text input"/>
              </div>
            </div>

            <div className="field">
              <label className="label">Author</label>
              <div className="control">
                <input className="input" type="text" name="created_by" placeholder="The Big Data Dilemma"/>
              </div>
            </div>

            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input className="input" type="text" name="image" onChange={this.handleChange} placeholder="www.image.jpg"/>
              </div>
            </div>

            <textarea className="textarea" name="blog_content" onChange={this.handleChange} placeholder="The reason why..." rows="10"></textarea>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link newblogsubmit">Submit</button>
              </div>
              <div className="control">
                <Link to={'/blogs'}><button className="button is-link cancelcreateblog is-danger">Cancel</button></Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }

}


export default BlogsCreate
