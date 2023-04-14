import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route to="/" element ={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App