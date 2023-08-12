import { useState, useEffect } from 'react'
import './App.css'

import Card from './components/Card'

function App() {
  const [cardData, setCardData] = useState(null)

  useEffect(() => {
    fetchCards()
  },[])

  const shuffle = (cards) => {
    let randomIndex=0;
    let temp;
    for(let i=0;i<cards.length;i++){
      randomIndex=Math.floor(Math.random()*cards.length)
      // swap 
      temp=cards[randomIndex]
      cards[randomIndex]=cards[i]
      cards[i]=temp
    }
    return cards
  }

  const fetchCards = () => {
    try{
      const url = 'http://localhost:8080/cards'
      fetch(url)
        .then(res => res.json())
        // display cards 2 times
        .then(data=>data.concat(data))
        // shuffle the cards
        .then(cards=>shuffle(cards))
        .then(data => setCardData(data)).catch(err => console.log(err))
       
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
        {cardData && cardData.map((image, index) => 
          <Card key={index} image={image}  />
          )
        }
      </div>
      <button onClick={createGame}>New Game</button>
    </>
  )
}

export default App
