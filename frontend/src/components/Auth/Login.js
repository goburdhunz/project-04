import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { withRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Auth from '../../lib/Auth'


class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {},
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(e) {
    const formData = {...this.state.formData, [e.target.name]: e.target.value}
    this.setState({ formData, error: ''})
  }


  handleSubmit(e) {
    e.preventDefault()

    axios.post('api/login/', this.state.formData)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/blogs')
        toast.success(res.data.message)
      })
      .catch(() => {
        Auth.removeToken()
        this.setState({error: 'Wrong credentials'})
      })
  }


  render() {
    console.log(this.state.formData)
    return (
      <section className="section has-background-white-ter">
        <div className="container registercontainer">
          <img className="cherry" src="https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"/>
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-parent">
                <div className="tile is-child box registerbox">
                  <form className="loginform" onSubmit={this.handleSubmit}>

                    <div className="field">
                      <label className="label emaillabel">Email</label>
                      <div className="control">
                        <input
                          className="input"
                          type="email"
                          name="email"
                          placeholder="eg: johndoe@profess.com"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control">
                        <input
                          className="input"
                          type="password"
                          name="password"
                          placeholder="eg: ••••••••"
                          onChange={this.handleChange}
                        />
                      </div>
                      {this.state.error && <small className="help is-danger">{this.state.error}</small>}
                    </div>

                    <button className="button is-black loginsubmit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(Login)
