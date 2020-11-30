import React from 'react'
import {useSelector} from 'react-redux'
import ProductDetails from './ProductDetails'
import ProductCard from './ProductCard'



const ProductList = () => {
    const products = useSelector(s => s.products)
    const listOfProducts = Object.keys(products).map(id => (
        <ProductCard key={id} id={id} name={products[id].name} />
    ))
    console.log(products)
    return(
        <div>
            <h1>Products</h1>
            {listOfProducts}
        </div>
    )
}

export default ProductList