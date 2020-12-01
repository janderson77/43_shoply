import React from 'react'
import {NavLink} from 'react-router-dom'
import CartIcons from './CartIcons'
import './ProductCard.css'

const ProductCard = ({id, name, img}) => {
    return (
      <div className="card">
        <NavLink to={`/products/${id}`}><img className="card-img-top" alt={name} src={img} /></NavLink>
        <div className="card-body">
          <h2 className="card-title text-center">
            <NavLink to={`/products/${id}`}>{name}</NavLink>
          </h2>
          <CartIcons id={id} />
        </div>
      </div>
    )
}

export default ProductCard