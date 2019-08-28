import React from 'react';
import './App.css';
import quotes from './quotes.json';
class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      quote: this.getRandomQuote(),
      color: this.getRandomColor()
    }

    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
  }

  getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  getRandomColor() {
    return '#'+Math.random().toString(16).substr(2,6);
  }
  render(){
    return (
      <div className="App">
        <div style={{backgroundColor: this.state.color}} className="quote-box">
          {this.state.quote.quoteText}
        </div>
      </div>
    );
  }
}

export default App;
