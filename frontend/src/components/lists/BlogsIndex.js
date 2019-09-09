import React from 'react'
import {Link} from 'react-router-dom'
import Cards from './Cards'
import axios from 'axios'


class BlogsIndex extends React.Component {
  constructor() {
    super()

    this.state = {blogs: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/blogs')
      .then(res => this.setState({ blogs: res.data}))
  }


  render() {
    return (
      <section className="section has-background-white-ter">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.blogs.map(blog =>
              <div className="column is-half-tablet is-one-quarter-desktop" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                  <Cards
                    title={blog.title}
                    author= {blog.created_by.first_name}
                    authorImage={blog.created_by.image}
                    image={blog.image}
                    content={blog.blog_content}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}


export default BlogsIndex
