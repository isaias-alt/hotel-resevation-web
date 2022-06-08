import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import Header from './components/Header'
import Home from './components/Home'
import SearchPage from './components/SearchPage'

// TODO: fix the Switch error

function App () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/search'>
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
