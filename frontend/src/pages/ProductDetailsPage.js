import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

function ProductDetailsPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="container mt-5"><h2>Product not found</h2></div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4 className="text-success">${product.price}</h4>
          <p className="mt-3"><strong>Specifications:</strong></p>
          <ul>
            {product.specifications && product.specifications.length > 0 ? (
              product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))
            ) : (
              <li>No specifications available.</li>
            )}
          </ul>

          <div className="mt-4 d-flex gap-3">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-success">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4>Reviews</h4>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="border p-2 mb-2 rounded bg-light">
              <strong>{review.user}</strong>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
