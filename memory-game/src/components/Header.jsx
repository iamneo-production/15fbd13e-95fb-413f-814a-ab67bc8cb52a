import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-center">
                    <Link to='/' className="text-decoration-none">Memory Game</Link>
                </div>
            </nav>
        </div>
    )
}
export default Header;