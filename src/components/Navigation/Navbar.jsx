import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='main-nav'>
      
        <Link to="/"><h2 className="nav-link">Home</h2></Link> 
      
      
        <Link to="/about"><h2 className="nav-link">About</h2></Link>
      
      
        <Link to="/sports"><h2 className="nav-link">Sports</h2></Link>
      
      
        <Link to="/politics"><h2 className="nav-link">Politics</h2></Link>
      <div>
      
      </div>
    </div>
    
  );
};

export default Navbar;
