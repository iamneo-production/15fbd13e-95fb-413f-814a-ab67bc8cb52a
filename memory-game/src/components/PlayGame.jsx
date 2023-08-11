import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Front from '../assets/subtle-prism.svg'
import Back from '../assets/bullseye.svg'

const PlayGame = () => {
    const [isFlipped,setIsFlipped]=useState(false);
    
    const handleClick=()=>{
        setIsFlipped(true);
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div onClick={handleClick} >
                <img src={Front} className="imgDiv"/>
            </div>
            <div>
                <img src={Back} className="imgDiv"/>
            </div>
        </ReactCardFlip>
    )
}
export default PlayGame;