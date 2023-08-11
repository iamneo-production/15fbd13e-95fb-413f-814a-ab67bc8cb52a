import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const playGame=()=>{
        console.log("Called");
    }
    return (
        <div className="d-flex align-items-center justify-content-center height-home">
            <div className="flex-column">
                <h1>Welcome to Home!!</h1>
                <div className="d-flex justify-content-center">
                    <Link to='/play-game'>
                        <button type="button" className="btn btn-primary" onClick={playGame}>Play Game</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home;