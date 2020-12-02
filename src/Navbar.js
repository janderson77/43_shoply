import React from 'react'
import {NavLink} from 'react-router-dom'
import {calculateTotalQuantity} from './helpers'
import {useSelector} from "react-redux"
import './Navbar.css'

const Navbar = () => {
    const cart = useSelector(s => s.cartItems)

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Shoply</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    
                </ul>
                    <NavLink id="cart-icon" className="nav-link" to="/cart">
                        <div id="nav-cart-count">{calculateTotalQuantity(cart)}</div>
                        <i className="fas fa-shopping-cart"></i>
                    </NavLink>
            </div>
            </nav>
    )
}

export default Navbar