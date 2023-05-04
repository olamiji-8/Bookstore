import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import AddBook from './Components/AddBook'
import Books from './Components/Book/Books'
import Header from './Components/Header'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>} exact />
        <Route path="/books" element ={<Books/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path ="/add" element ={<AddBook/>}/>
      </Routes>
    </div>
  )
}

export default App