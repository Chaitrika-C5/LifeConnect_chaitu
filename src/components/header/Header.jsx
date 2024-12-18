import React from 'react';
import './Header.css';
import { FaUser, FaSignInAlt, FaInfoCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://www.canva.com/design/DAGZd8WSmiA/Arw6BYfj69JzEEHoWBuT9w/view?utm_content=DAGZd8WSmiA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he86a6d42d9"  alt="Logo" /> {/* Replace src with the path to your logo */}
      </div>
      <div className="nav-icons d-flex rt-icons ">
        <div>
        <a href="/register"><FaSignInAlt title="Register" /></a>
        </div>
        <div>
        <a href="/login"><FaUser title="Login" /></a>
        </div>
        <div>
        <a href="/about"><FaInfoCircle title="About" /></a>

        </div>
      </div>
    </header>
  );
}

export default Header;