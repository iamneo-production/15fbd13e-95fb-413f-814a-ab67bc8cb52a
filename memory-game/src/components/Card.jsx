import React, {useState} from 'react'
import '../styles/Card.css'
import PlayCardImg from '../assets/images/playcard.png'

const Card = ({image}) => {

	const [isFlipped, setIsFlipped] = useState(false)

	const handleCardClicked = () => {
		setIsFlipped(true)
	}

  return (
	<div className="card-grid">
		<div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClicked}>
			<div className="front">
				<img src={PlayCardImg}/>
			</div>
			<div className="back">
				{/* back */}
				{isFlipped && <img src={image.url} /> }
				{/* <img ref={currentFlipped} src={image.url}/>  */}
			</div>
		</div>
	</div>
  )
}

export default Card