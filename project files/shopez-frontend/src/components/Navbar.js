import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-warning" to="/">
          <i className="bi bi-cart4 me-2"></i>ShopEZ
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">
                <i className="bi bi-box-arrow-in-right me-1"></i>Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/register">
                <i className="bi bi-person-plus me-1"></i>Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/cart">
                <i className="bi bi-cart-check me-1"></i>Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
