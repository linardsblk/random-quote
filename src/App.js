import React from 'react';
import quotes from './quotes.json';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const appStyles = {
    height: '100vh',
    textAlign: 'center'
}


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
      <div style={appStyles} className="App" >
        <Grid md={6} alignItems='center' id="quote-box" style={{backgroundColor: this.state.color}} >
          <Grid item>
          <Typography>
            <div id="text">{`"${this.state.quote.quote}"`}</div>
            <div id="author">{`- ${this.state.quote.author}`}</div>
          </Typography>
          <Button>
            <Link href={`https://twitter.com/intent/tweet?text=${this.state.quote.quote}&hashtags=quote`} className='twitter-share-button' id='tweet-quote'>Tweet this</Link>
          </Button>
          <Button id='new-quote' onClick={this.newQuote}>New quote</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;