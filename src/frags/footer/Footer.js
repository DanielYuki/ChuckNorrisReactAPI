import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  ativar = () => {
    this.props.gerando();
  }

  render() {
    return (
      <div className="Footer">
        <footer>
          <button onClick={this.ativar}></button>
        </footer>
      </div>
    );
  }
}

export default Footer;