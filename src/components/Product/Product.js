import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({ addToCart, product }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name.slice(0, 10)}</p>
            <div className="product-info">
                <p>Price: ${price} </p>
                <p><small>Seller: {seller} </small></p>
                <p><small>Ratings: {ratings} stars </small></p>
            </div>
            <button onClick={() => addToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;