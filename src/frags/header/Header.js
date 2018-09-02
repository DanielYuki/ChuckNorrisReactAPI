import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          <h1>CHUCK NORIS</h1>
          <h2>Jokes Generator</h2>
        </header>
      </div>
    );
  }
}

export default Header;