import '../styles/Card.css'
import PlayCardImg from '../assets/images/playcard.png'
import PropTypes from 'prop-types';

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
				<img src={image} alt='flipped image'/> 
			</div>
		</div>
	</div>
	)
}

Card.propTypes = {
	image: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	isFlipped: PropTypes.bool.isRequired,
	handleCardClicked: PropTypes.func.isRequired,
	isMatched: PropTypes.bool.isRequired
}

export default Card