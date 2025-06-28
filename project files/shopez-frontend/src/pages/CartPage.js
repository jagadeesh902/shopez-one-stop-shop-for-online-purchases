import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems?.reduce((acc, item) => acc + item.price, 0) || 0;

  return (
    <Container className="mt-4">
      <h2>Your Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <Row>
          {cartItems.map((item) => (
            <Col md={4} key={item.id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.image} height="200" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col md={12} className="text-end mt-3">
            <h4>Total: ${total.toFixed(2)}</h4>
            <Link to="/checkout">
              <Button variant="success">Proceed to Checkout</Button>
            </Link>
          </Col>
        </Row>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Container>
  );
};

export default CartPage;
