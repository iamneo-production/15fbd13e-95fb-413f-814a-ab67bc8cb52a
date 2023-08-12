import { useState, useEffect } from 'react'
import './App.css'

import Card from './components/Card'

function App() {
  const [cardData, setCardData] = useState(null)
  // stores index of the cards open
  const [openCards, setOpenCards] = useState([])
  // Stores matched cards 
  const [matchedCards,setMatchedCards] = useState([])

  
  useEffect(() => {
    fetchCards()
  },[])

  useEffect(()=>{
    if(openCards.length==2){
      const [first, second] = openCards
      console.log(cardData[first],cardData[second])
      if(cardData[first].name === cardData[second].name){
        console.log("matched")
        setMatchedCards((prev)=>[...prev,first,second])
      } 
      else {
        console.log("not matched")
        // if not matched, have to flip both the cards and make opencards as 0
        setTimeout(()=>{setOpenCards([])},1000)
      }
    }

  }, [openCards])

  const checkIfFlipped = (index) => {
    return openCards.includes(index)
  }

  const checkIfMatched = (index) => {
    return matchedCards.includes(index)
  }

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
    const url = 'http://localhost:8080/cards'
    fetch(url)
      .then(res => res.json())
      // display cards 2 times
      .then(data=>data.concat(data))
      // shuffle the cards
      .then(cards=>shuffle(cards))
      .then(data => setCardData(data)).catch(err => console.log(err))
  }

  const createGame = () => {
    console.log("New Game created")
    setMatchedCards([])
    setOpenCards([])
  }

  const handleCardClicked = (index) => {
		if(openCards.length==1){
			setOpenCards((prev) => [...prev,index] )
		} else{
      setOpenCards([index])
    }
	}

  return (
    <>
	    <div className="card-container">
        {cardData?.map((image, index) => 
          <Card key={index} 
            image={image}
            index={index}
            setOpenCards={setOpenCards}
            isFlipped={checkIfFlipped(index)}
            isMatched={checkIfMatched(index)}
            handleCardClicked={handleCardClicked}  />
          )
        }
      </div>
      <button onClick={createGame}>New Game</button>
    </>
  )
}

export default App
