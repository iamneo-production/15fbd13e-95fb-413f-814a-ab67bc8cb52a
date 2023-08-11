import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import PlayGame from './components/PlayGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/play-game" element={<PlayGame/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
