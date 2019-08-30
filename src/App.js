import React from 'react';
import './App.css';
import quotes from './quotes.json';
import Button from './Components/Button';
import TweetThis from './Components/TweetThis'


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      quote: this.getRandomQuote(),
      color: this.getRandomColor()
    }

    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
    this.newQuote       = this.newQuote.bind(this);
  }

  getRandomQuote() {
    if(!quotes.length) {
      return;
    }
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  getRandomColor() {
    return '#'+Math.random().toString(16).substr(2,6);
  }

  newQuote() {
    this.setState({
      quote: this.getRandomQuote(),
      color: this.getRandomColor()
    })
  }

  
  render(){
    return (
      <div className="App" >
        <div id="quote-box" style={{backgroundColor: this.state.color}} >
          <div id="text">{`"${this.state.quote.quote}"`}</div>
          <div id="author">{`- ${this.state.quote.author}`}</div>
          <TweetThis elementId='tweet-quote' buttonDisplayName='Tweet this' tweetText={this.state.quote.quote}/>
          <Button elementId="new-quote" buttonDisplayName="New quote" clickHandler={this.newQuote}/>
        </div>
      </div>
    );
  }
}

export default App;
