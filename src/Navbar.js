import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Shoply</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    
                </ul>
                    <NavLink className="nav-link" to="/cart">Cart</NavLink>
            </div>
            </nav>
    )
}

export default Navbar