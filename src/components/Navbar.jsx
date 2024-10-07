import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1 className="logo"><img style={{width: '100px', borderRadius: '50%'}} src="https://tse3.mm.bing.net/th?id=OIP.ODrqYRY-t7ORbuf9zt3QfAHaE8&pid=Api&P=0&h=180" alt="" /></h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">
          <FaShoppingCart /> Cart ({cartCount})
        </Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
