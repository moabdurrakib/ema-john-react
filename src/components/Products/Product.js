import React from 'react';
import './Product.css'

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
          <p><small>by: {seller}</small></p>
          <br />
          <p>${price}</p>
          <br />
          <p><small>only {stock} stock available.</small></p>
        </div>
      </div>
       
    );
};

export default Product;