import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VendorUpload.css';

const VendorUpload = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    image: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    } else {
      console.log('User data not found in localStorage');
      navigate('/login');
    }
    setLoading(false);
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', productData);
    setProductData({
      name: '',
      description: '',
      price: '',
      quantity: '',
      image: null,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProductData({
      ...productData,
      image: file,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="upload-container">
      <div className="upload-header">
        <h2>Welcome, {user ? user.username : 'Guest'}!</h2>
      </div>
      <div className="upload-form-container">
        <form className="upload-form" onSubmit={handleSubmit}>
          <h2>Upload Product</h2>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={productData.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={productData.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={productData.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={productData.quantity}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            required
          />
          <button type="submit">Upload Product</button>
        </form>
      </div>
    </div>
  );
};

export default VendorUpload;
