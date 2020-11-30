import React from 'react'
import {Link} from 'react-router-dom'
import CartIcons from './CartIcons'

const ProductCard = ({id, name}) => {
    console.log(id)
    return (
    <div className="col-md-3 mb-3" key={id}>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">
            <Link to={`/products/${id}`}>{name}</Link>
          </h2>
          <CartIcons id={id} />
        </div>
      </div>
    </div>
    )
}

export default ProductCard