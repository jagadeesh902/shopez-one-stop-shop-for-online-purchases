import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: '',
    address: '',
    email: '',
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!userDetails.name || !userDetails.address || !userDetails.email) {
      alert('Please fill in all fields');
      return;
    }

    // Simulate order placement
    clearCart();
    navigate('/order-success', { state: { user: userDetails, total: calculateTotal() } });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Checkout</h2>

      <div className="row">
        <div className="col-md-6">
          <h5>Shipping Information</h5>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="form-control mb-2"
            value={userDetails.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="form-control mb-2"
            value={userDetails.address}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3"
            value={userDetails.email}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <h5>Order Summary</h5>
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between border-bottom py-2">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <div className="d-flex justify-content-between mt-3 fw-bold">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
          <button className="btn btn-success mt-4 w-100" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
