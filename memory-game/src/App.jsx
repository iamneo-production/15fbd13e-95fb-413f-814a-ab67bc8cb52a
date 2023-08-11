import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [response, setResponse] = useState(null)

  useEffect(() => {
    fetchCards()
  },[])


  const fetchCards = () => {
    try{
      const url = 'http://localhost:3000/cards'
      fetch(url).then(res => res.json()).then(data => setResponse(data)).catch(err => console.log(err))
       
    } catch(err){
      console.log(err)
    }
  }

  const createGame = () => {
    console.log("New Game created")
    

  }

  return (
    <>
      <button onClick={createGame}>New Game</button>
    </>
  )
}

export default App
