import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import SearchPage from './components/SearchPage'

// TODO: fix the Switch error

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/search' element={ <SearchPage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
