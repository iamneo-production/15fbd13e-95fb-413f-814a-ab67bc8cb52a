import React from 'react';
import '../styles/Popup.css';

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

export default Popup;
