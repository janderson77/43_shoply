import React from 'react'
import { useDispatch } from 'react-redux'
import {addToCart, removeFromCart} from './actions'

const CartIcons = ({id}) => {
    const dispatch = useDispatch();
    const add = () => dispatch(addToCart(id))
    const remove = () => dispatch(removeFromCart(id))
    return(
        <div>
            <i className="CartIcon far fa-minus-square fa-2x text-danger" onClick={remove} />
            <i className="CartIcon far fa-plus-square fa-2x text-success" onClick={add} />
        </div>    
    )
}

export default CartIcons