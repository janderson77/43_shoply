import React from 'react'
import { useDispatch } from 'react-redux'
import {addToCart, removeFromCart} from './actions'

const CartIcons = ({id}) => {
    const dispatch = useDispatch();
    const add = () => dispatch(addToCart(id))
    const remove = () => dispatch(removeFromCart(id))
    return(
        <div>
            <i className="CartIcon fas fa-cart-plus fa-2x text-success" onClick={add} />
            <i className="CartIcon fas fa-cart-arrow-down fa-2x text-danger" onClick={remove} />
        </div>    
    )
}

export default CartIcons