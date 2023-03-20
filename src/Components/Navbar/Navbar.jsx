import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
          <Link to='/home'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/users'>Users</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/'>Log out</Link>
      </ul>
    </div>
  );
};

export default Navbar;
