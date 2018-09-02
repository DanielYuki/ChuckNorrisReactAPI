import React, { Component } from 'react';
import './App.css';
import Footer from './frags/footer/Footer'
import Header from './frags/header/Header'
import Content from './frags/content/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;