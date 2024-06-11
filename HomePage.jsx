import './HomePage.css';
import React, { useState } from 'react';
import mealsImage from '../components/meals.jpg'; 
import shoes from "../components/shoes.jpg";
import cloth from "../components/clothes.jpg";
import bangle from "../components/bangle.jpg";
import decorative from "../components/decorativelamp.jpg";
import skincare from "../components/skincebottle.jpg";
import sofas from "../components/sofas.jpg";

const HomePage = () => {
  const [notification, setNotification] = useState('');

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


  const dashboardItems = [
    { id: 1, title: 'Shoes',  cost: '$100.00', imgSrc: shoes },
    { id: 2, title: 'Bangles',  cost: '$30.00', imgSrc: bangle },
    { id: 3, title: 'Dresses', cost: '$20.00', imgSrc: cloth },
    { id: 4, title: 'Sofa',  cost: '$250.00', imgSrc: sofas },
    { id: 5, title: 'Lamp',  cost: '$150.00', imgSrc: decorative },
    { id: 6, title: 'SkinCare', cost: '$180.00', imgSrc: skincare },
  
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2>WELCOME USER</h2>
        <div className="dashboard-grid">
          {dashboardItems.map(item => (
            <div key={item.id} className="dashboard-item">
              <img src={item.imgSrc} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="cost">{item.cost}</p>
              <button className="like-button" onClick={handleLikeClick}>❤️</button>
              <button className="cart-button" onClick={handleCartClick}>🛒</button>
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

export default HomePage;
