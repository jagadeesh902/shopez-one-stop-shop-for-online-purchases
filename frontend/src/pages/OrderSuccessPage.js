import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function OrderSuccessPage() {
  const location = useLocation();
  const { user, total } = location.state || {};

  return (
    <div className="container text-center mt-5">
      <h2 className="text-success mb-4">🎉 Order Placed Successfully!</h2>
      <p>Thank you, <strong>{user?.name}</strong>!</p>
      <p>Your order totaling <strong>${total}</strong> has been received.</p>
      <p>A confirmation email will be sent to <strong>{user?.email}</strong>.</p>
      <Link to="/" className="btn btn-primary mt-4">Back to Home</Link>
    </div>
  );
}

export default OrderSuccessPage;
