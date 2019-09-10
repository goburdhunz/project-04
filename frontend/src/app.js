import React from 'react'
import ReactDom from 'react-dom'
import { ToastContainer} from 'react-toastify'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/common/Navbar'
import BlogIndex from './components/lists/BlogsIndex'
import BlogDetail from './components/lists/BlogsDetail'
import ProfileDetail from './components/lists/ProfileDetail'
import './style.scss'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Auth from './lib/Auth'


class App extends React.Component {

  getLoggedInUser() {
    const user = Auth.getUserId()
    return user
  }


  render() {
    const user = this.getLoggedInUser()
    console.log(user)
    return (
      <HashRouter>
        <Navbar />
        <ToastContainer
          position="top-center"
        />
        <Switch>
          <Route path= "/profile" component={ProfileDetail}/>
          <Route path= "/blogs/:id" component={BlogDetail}/>
          <Route path= "/blogs" component={BlogIndex}/>
          <Route path= "/login" component={Login}/>
          <Route path= "/register" component={Register}/>
          <Route path= "/" component={Home}/>
        </Switch>
      </HashRouter>
    )
  }
}


ReactDom.render(
  <App />,
  document.getElementById('root')
)
