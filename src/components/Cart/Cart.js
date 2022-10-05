import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    return (

        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;