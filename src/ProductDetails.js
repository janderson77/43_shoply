import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import CartIcons from './CartIcons'
import './ProductDetails.css'

const ProductDetails = () => {
    const id = useParams();
    const product = useSelector(s => s.products[id.id])
    const cartTotal = useSelector(s => s.cartValue)

    return(
        <div className="Product col-lg-8 col-md-6 offset-lg-2 offset-md-1">
            <h2>Cart Total: {cartTotal}</h2>
            <div className="card">
                <img className="Card-img card-img-top " src={product.image_url} alt={product.name} />
                    <h2 className="card-title">{product.name}</h2>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">${product.price}</p>
                    <div className="card-text"><CartIcons id={id.id} /></div>
            </div>            
        </div>
    )

}

export default ProductDetails