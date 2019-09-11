import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'


class UpdateProfile extends React.Component {

  constructor() {

    super()

    this.state = {
      formdata: {},
      errors: {}
    }
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

  render() {
    console.log(this.state.formdata)
    return(
      <div>Hello World, edit me</div>




    )
  }










}

export default UpdateProfile
