import './VendorDashboard.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bangles from "../components/bangles.jpg";
import ccup from "../components/ccup.jpg";
import bottle from "../components/bottle.jpg";
import cycle from "../components/cycle.jpg";
import basket from "../components/basket.jpg";
import hdress from "../components/hangingdress.jpg";
import flowerpot from "../components/flowerpot.jpg";
const VendorDashboard = () => {
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const handleLikeClick = () => {
    showNotification('Added to favourites');
  };

  const handleCartClick = () => {
    showNotification('Added to cart');
  };

  const handleBuyClick = () => {
    navigate('/checkout');
  };

  const dashboardItems = [
    { id: 1, title: 'coffee cups', cost: '$10.00', imgSrc: ccup ,Quantity:"10"},
    { id: 2, title: 'Product 2',  cost: '$15.00', imgSrc:flowerpot ,Quantity:"20"},
    { id: 3, title: 'Product 3',  cost: '$20.00', imgSrc: basket,Quantity:"10" },
    { id: 4, title: 'Product 4', cost: '$25.00', imgSrc: cycle ,Quantity:"20"},
    { id: 5, title: 'Product 5', cost: '$30.00', imgSrc: hdress,Quantity:"25" },
    { id: 6, title: 'Product 6',  cost: '$35.00', imgSrc: bangles,Quantity:"30" },
    
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2>Welcome to Your Dashboard</h2>
        <div className="dashboard-grid">
          {dashboardItems.map(item => (
            <div key={item.id} className="dashboard-item">
              <img src={item.imgSrc} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="cost">{item.cost}</p>
              <p> Quantity:{item.Quantity}</p>
              <button className="like-button" onClick={handleLikeClick}>❤️</button>
              <button className="cart-button" onClick={handleCartClick}>🛒</button>
              <button className="buy-button" onClick={handleBuyClick}>Buy</button>
            </div>
          ))}
        </div>
      </div>
      {notification && (
        <div className={`notification ${notification ? 'show' : ''}`}>
          {notification}
        </div>
      )}
    </div>
  );
};

export default VendorDashboard;
