import React from 'react'
import ReactDom from 'react-dom'
import { ToastContainer} from 'react-toastify'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import './style.scss'

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <ToastContainer />
        <Switch>
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
