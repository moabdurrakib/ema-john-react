import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
  console.log(props.product.name);
  const {name, img, seller,price,stock} = props.product;
    return (
      <div className="product">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h4 className="product-name">
            {name}
          </h4>
          <br />
          <p><small>By: {seller}</small></p>
          <br />
          <p>${price}</p>
          <br />
          <p><small>Only {stock} stock available.</small></p>
            <button className="shopping-cart"> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart </button>
        </div>
      </div>
       
    );
};

export default Product;