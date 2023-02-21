import React, { PureComponent } from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import './App.css'
class App extends PureComponent {
 state= {
pathHome:'/'
 }
  render() {
    return (
      <div className='app'>
    {window.location.pathname === this.state.pathHome?<Register StateRoute={(e) => this.setState(e)}/>: <Login StateRoutes={(e) => this.setState(e)} />}
      
      </div>
    )
  }
}

export default App