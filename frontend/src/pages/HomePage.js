// src/pages/HomePage.js

import React, { useState } from 'react';
import productsData from '../data/products';
import ProductCard from '../components/ProductCard';
import 'animate.css';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(productsData.map(p => p.category).filter(Boolean))];

  let filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory ? product.category === selectedCategory : true)
  );

  if (sortOrder === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'highToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container mt-4">

      {/* 🔥 Summer Sale Banner */}
      <div className="p-4 mb-4 bg-warning text-dark rounded animate__animated animate__fadeInDown text-center shadow">
        <h2 className="display-6 fw-bold">🔥 Summer Sale is Live!</h2>
        <p className="lead">Up to 50% off on electronics, fashion & more. Hurry, limited time offer!</p>
        <button className="btn btn-dark btn-lg mt-2">Shop Now</button>
      </div>

      {/* Search + Filter + Sort Controls */}
      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            placeholder="Search products..."
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Featured Products */}
      <h2 className="text-center mb-4">📱 Featured Products</h2>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="text-center">
            <h5>No products found.</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
