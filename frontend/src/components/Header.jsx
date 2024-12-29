import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Header = () => (
  <header>
    <h1>Train Reservation System</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/reserve">Reserve Seats</Link>
    </nav>
  </header>
);

export default Header;
