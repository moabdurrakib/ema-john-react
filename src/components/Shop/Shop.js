import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    console.log(products);
    return (
        <div className="shop-container">
            <div className="product-container">
                
                    {products.map(product => <Product product={product}></Product>)}
                
            </div>

            <div className="cart-container">
                <h3>This is a cart</h3>
            </div>
           
        </div>
    );
};

export default Shop;