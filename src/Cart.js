import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import CartIcons from './CartIcons'
import './Cart.css'

const Cart = () => {
    const products = useSelector(s => s.products)
    const cartItems = useSelector(s => s.cartItems)
    const cartValue = useSelector(s => s.cartValue)
    const cartTable =() => {
        const rows = Object.keys(cartItems).map(id => (
            <tr key={id} id={id}>
                <td>
                    <NavLink to={`/products/${id}`} >
                        {products[id].name}
                    </NavLink>
                </td>
                    <td>${products[id].price}</td>
                    <td>{cartItems[id]}</td>
                    <td><CartIcons id={id}/></td>
                
            </tr>
    ))

        return(
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Item Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Add More/Remove</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }

    return(
        <div>
            <h2 style={{margin: '2rem'}}>Shopping Cart</h2>
            <div className="col-lg-8 col-md-6 offset-lg-2 offset-md-1">
                    {Object.keys(cartItems).length > 0 ? (
                        <div>
                            <div>{cartTable()}</div>
                            <div>
                                <div id="cart-total" className="float-right">Subtotal: ${cartValue}</div>
                            </div>
                        </div>) : <div>
                        <div style={{marginBottom: '1rem'}}>Your Cart Is Empty</div>
                        <div><NavLink style={{textDecoration: 'none'}} to="/">Go Shopping!</NavLink></div>
                    </div>
                    }                
            </div>
        </div>
        
    )
}

export default Cart