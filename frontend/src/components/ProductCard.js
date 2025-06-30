// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm card-hover">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
          }}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title" dangerouslySetInnerHTML={{ __html: product.name }} />
          <p className="card-text">${product.price}</p>
          <Link to={`/product/${product.id}`} className="btn btn-outline-primary mt-auto">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
