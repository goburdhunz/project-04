import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'



class App extends React.Component {


  componentDidMount()  {
    axios.get('api/events/')
      .then(res => console.log(res.data))
  }



  render() {
    return (
      <h1>Welcome to Profess</h1>
    )
  }






}


ReactDom.render(
  <App />,
  document.getElementById('root')
)
