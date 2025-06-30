import React from 'react';

const dummyOrders = [
  {
    id: 1,
    date: '2025-06-28',
    total: 2999,
    items: [
      { name: 'Wireless Headphones', quantity: 1, price: 2999 }
    ]
  },
  {
    id: 2,
    date: '2025-06-26',
    total: 14999,
    items: [
      { name: 'Smartphone', quantity: 1, price: 14999 }
    ]
  }
];

const OrderHistoryPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Orders</h2>
      {dummyOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        dummyOrders.map((order) => (
          <div key={order.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Items:</strong></p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.name} - ₹{item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistoryPage;
