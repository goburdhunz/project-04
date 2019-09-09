import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { withRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'


class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value}
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState( { formData, errors })

  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('api/register/', this.state.formData)
      .then(res => {
        toast.success(res.data.message)
        this.props.history.push('/login')
      })
      .catch(err => this.setState({ errors: err.response.data.errors}))
  }

  render() {
    return (
      <section className="section has-background-white-ter">
        <div className="container registercontainer">
          <img className="cherry" src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-parent">
                <div className="tile is-child box registerbox">
                  <form className="registerform has-text-light" onSubmit={this.handleSubmit}>
                    <div className="field">
                      <label className="label usernamelabel">Username</label>
                      <div className="control">
                        <input
                          className="input"
                          name="username"
                          type="username"
                          placeholder="eg: Bloggerman2000"
                          onChange={this.handleChange}
                        />
                      </div>
                      {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
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
                      {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
                    </div>

                    <div className="field">
                      <label className="label">Confirm Password</label>
                      <div className="control">
                        <input
                          className="input"
                          type="password"
                          name="password_confirmation"
                          placeholder="eg: ••••••••"
                          onChange={this.handleChange}
                        />
                      </div>
                      {this.state.errors.password_confirmation && <small className="help is-danger">{this.state.errors.password_confirmation}</small>}
                    </div>

                    <button className="button has-text-white has-background-black registerbutton">Submit</button>
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

export default withRouter(Register)
