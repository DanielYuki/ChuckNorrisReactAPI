import React, { Component } from 'react';
import './App.css';
import Footer from './frags/footer/Footer'
import Header from './frags/header/Header'
import Content from './frags/content/Content'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: ''
    }
  }

  gerarJoke = (dados) => {
    this.setState({content: dados["value"]});
  }

  gerar = () => {
    fetch("https://api.chucknorris.io/jokes/random").then(response => {
      return response.json()
    }).then(dados => {
      this.gerarJoke(dados);
      console.log(dados);
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Content content={this.state.content} />
        <Footer gerando={this.gerar} />
      </div>
    );
  }
}

export default App;