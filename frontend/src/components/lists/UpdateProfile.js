import React from 'react'
import axios from 'axios'


class UpdateProfile extends React.Component {

  constructor() {

    super()

    this.state = {
      formdata: {
        first_name: '',
        last_name: '',
        location: '',
        job_title: '',
        summary: '',
        image: '',
        event_type: [],
        news_topic: [],
        job_sector: []
      },
      errors: {}
    }
  }
















}

export default UpdateProfile
