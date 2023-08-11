import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  const [cardData, setCardData] = useState(null)

  useEffect(() => {
    fetchCards()
  },[])


  const fetchCards = () => {
    try{
      const url = 'http://localhost:8080/cards'
      fetch(url).then(res => res.json()).then(data => setCardData(data)).catch(err => console.log(err))
       
    } catch(err){
      console.log(err)
    }
  }

  const createGame = () => {
    console.log("New Game created")
  }
  return (
    <>
	    <div className="card-container">
        {cardData && cardData.map(image => <Card key={image.id} image={image} />)}
      </div>
      <button onClick={createGame}>New Game</button>
    </>
  )
}

export default App
