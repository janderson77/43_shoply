import React from 'react'
import {useSelector} from 'react-redux'
import ProductCard from './ProductCard'
import './ProductList.css'



const ProductList = () => {
    const products = useSelector(s => s.products)
    const cartTotal = useSelector(s => s.cartValue)
    const listOfProducts = Object.keys(products).map(id => (
        <ProductCard key={id} id={id} name={products[id].name} img={products[id].image_url} />
    ))
    return(
        <div>
            <h1>Products</h1>
            <h3>Cart Total: {cartTotal}</h3>
            <div className="ProductList col-md-8 offset-md-2">
                {listOfProducts}
            </div>
        </div>
    )
}

export default ProductList