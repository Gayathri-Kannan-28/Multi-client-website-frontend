// src/components/Cart.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import styles from '../styles/Cart.module.css';

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.cart}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className={styles.cartItems}>
          {cart.map((item, index) => (
            <li key={index} className={styles.cartItem}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
      <Link to="/checkout" className={styles.checkoutLink}>Proceed to Checkout</Link>
    </div>
  );
}

export default Cart;
