import React from 'react'
import ReactDom from 'react-dom'
import { ToastContainer} from 'react-toastify'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/common/Navbar'
import BlogIndex from './components/lists/BlogsIndex'
import BlogDetail from './components/lists/BlogsDetail'
import BlogCreate from './components/lists/BlogsCreate'
import ProfileDetail from './components/lists/ProfileDetail'
import UpdateProfile from './components/lists/UpdateProfile'
import './style.scss'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Auth from './lib/Auth'
import JobsIndex from './components/lists/JobsIndex'
import EventsIndex from './components/lists/EventsIndex'
import NewssIndex from './components/lists/NewssIndex'


class App extends React.Component {

  getLoggedInUser() {
    const user = Auth.getUserId()
    return user
  }


  render() {
    return (
      <HashRouter>
        <Navbar />
        <ToastContainer
          position="top-center"
        />
        <Switch>
          <Route path= "/myevents" component={EventsIndex}/>
          <Route path= "/mynews" component={NewssIndex}/>
          <Route path= "/myjobs" component={JobsIndex}/>
          <Route path= "/profile/:id" component={UpdateProfile} />
          <Route path= "/profile" component={ProfileDetail}/>
          <Route path= "/blogs/new" component={BlogCreate}/>
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
