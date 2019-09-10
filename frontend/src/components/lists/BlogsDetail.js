import React from 'react'
import axios from 'axios'
import Tile from './Tile'
// import {Link} from 'react-router-dom'


class BlogDetail extends React.Component {

  constructor() {
    super()
    this.state = {}
  }



  componentDidMount() {
    axios.get(`/api/blogs/${this.props.match.params.id}`)
      .then(res => this.setState({ blog: res.data}))
  }


  render() {
    if(!this.state.blog) return null
    return(
      <section className="section has-background-light">
        <div key={this.state.blog.id}>
          <Tile
            title={this.state.blog.title}
            author= {this.state.blog.created_by.first_name}
            authorImage={this.state.blog.created_by.image}
            image={this.state.blog.image}
            content={this.state.blog.blog_content}
          />
        </div>
      </section>
    )
  }
}


export default BlogDetail
