import React, { useState } from 'react';
import './UploadProduct.css';

const UploadProduct = ({ onProductUpload }) => {
  const [productData, setProductData] = useState({
    name: '',
    quantity: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (e) => {
    setProductData({ ...productData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!productData.name || !productData.quantity || !productData.price || !productData.image) {
      alert('Please fill in all fields');
      return;
    }
    
    onProductUpload(productData);
    
    setProductData({
      name: '',
      quantity: '',
      price: '',
      image: '',
    });
  };

  return (
    <div className="upload-form-container">
      <form className="upload-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={productData.name}
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
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
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
  );
};

export default UploadProduct;