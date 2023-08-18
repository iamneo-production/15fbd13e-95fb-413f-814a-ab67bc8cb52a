import '../styles/Popup.css';
import PropTypes from 'prop-types';

const Popup = ({score,createGame}) => {

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-content">
          <h5>Score: {score}</h5>
          <button onClick={createGame}>Restart Game</button>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  score: PropTypes.number.isRequired,
  createGame: PropTypes.func.isRequired

}

export default Popup;
