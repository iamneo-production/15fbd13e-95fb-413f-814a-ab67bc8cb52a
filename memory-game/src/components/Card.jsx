import '../styles/Card.css'
import PlayCardImg from '../assets/images/playcard.png'

const Card = ({image, index,isFlipped, handleCardClicked, isMatched}) => {

	const handleClick = () => {
		!isFlipped && !isMatched && handleCardClicked(index)
	}


	return (
	<div className="card-grid">
		<div className={`card ${isFlipped || isMatched ? 'flipped' : ''}`} 
			onClick={handleClick}>
			<div className="front">
				<img src={PlayCardImg}/>
			</div>
			<div className="back">
				<img src={image.url} alt='flipped image'/> 
			</div>
		</div>
	</div>
	)
}

export default Card