import React from 'react'
import ReactDom from 'react-dom'
import { ToastContainer} from 'react-toastify'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/common/Navbar'
import BlogIndex from './components/lists/BlogsIndex'
import BlogDetail from './components/lists/BlogsDetail'
import './style.scss'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'


class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Navbar />
        <ToastContainer />
        <Switch>
          <Route path= "/login" component={Login}/>
          <Route path= "/register" component={Register}/>
          <Route path= "/blogs/:id" component={BlogDetail}/>
          <Route path= "/blogs" component={BlogIndex}/>
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
