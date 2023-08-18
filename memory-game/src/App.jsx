import { useState, useEffect, useRef } from "react";
import Popup from "./components/Popup";
import "./App.css";

import Card from "./components/Card";

function App() {
  const [cardData, setCardData] = useState(null);
  // stores index of the cards open
  const [openCards, setOpenCards] = useState([]);
  // Stores matched cards 
  const [matchedCards, setMatchedCards] = useState([]);
  // Record moves
  let score = useRef(0);
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  
  useEffect(() => {
    const fetchCards = () => {
      const url = "http://localhost:8080/cards";
      fetch(url)
        .then((res) => res.json())
        // display cards 2 times
        .then((data) => data.concat(data))
        // shuffle the cards
        .then((cards) => shuffle(cards))
        .then((data) => setCardData(data))
        .catch((err) => console.log(err));
    };
    fetchCards();
  }, []);

  useEffect(() => {
    if (openCards.length == 2) {
      const [first, second] = openCards;
      console.log(cardData[first], cardData[second]);
      if (cardData[first].name === cardData[second].name) {
        console.log("matched");
        setMatchedCards((prev) => [...prev, first, second]);
        setOpenCards([]);
      } else {
        console.log("not matched");
        // if not matched, have to flip both the cards and make opencards as 0
        setTimeout(() => {
          setOpenCards([]);
        }, 750);
      }
    }
  }, [openCards]);

  useEffect(() => {
    const checkGameCompleted = () => {
      if (matchedCards.length == cardData?.length) {
        console.log(openCards.length, matchedCards.length);
        setIsGameCompleted(true);
      }
    };
    checkGameCompleted();
  }, [matchedCards]);

  useEffect(()=> {
    checkGameCompleted()
  },[matchedCards])

  const checkIfFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIfMatched = (index) => {
    return matchedCards.includes(index);
  };

  const shuffle = (cards) => {
    let randomIndex = 0;
    let temp;
    for (let i = 0; i < cards.length; i++) {
      randomIndex = Math.floor(Math.random() * cards.length);
      // swap 
      temp = cards[randomIndex];
      cards[randomIndex] = cards[i];
      cards[i] = temp;
    }
    return cards;
  };

  const createGame = () => {
    console.log("New Game created");
    setIsGameCompleted(false);
    setMatchedCards([]);
    setOpenCards([]);
    score.current = 0;
    setCardData(shuffle(cardData));
  };

  const handleCardClicked = (index) => {
    if (openCards.length == 1) {
      score.current++;
      setOpenCards((prev) => [...prev, index]);
    } else if (openCards.length == 2) {
      console.log("Error: Cant open more than 2 cards at same time. Ignoring the last card clicked");
      setError("Error: Cant open more than 2 cards at same time. Ignoring the last card clicked");
    } else {
      score.current++;
      setOpenCards([index]);
    }
  };
 
  return (
    <>
	    <div className="card-container">
        {cardData?.map((image, index) => (
          <Card
            key={index}
            image={image.url}
          index={index}
          setOpenCards={setOpenCards}
          isFlipped={checkIfFlipped(index)}
          isMatched={checkIfMatched(index)}
            handleCardClicked={handleCardClicked}
          />
        ))}
      </div>
      <button onClick={createGame}>New Game</button>
      {isGameCompleted && <Popup score={score.current} createGame={createGame} />}
    </>
  );
}

export default App;
