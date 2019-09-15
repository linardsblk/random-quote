import React from 'react';
import quotes from './quotes.json';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core'
import styled from 'styled-components'


const colorOptions = [
  {
    quoteBox: "#31420a",
    background: "#cde595"
  }
]

const StyledBox = styled(({ color, ...other }) => <Box {...other} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;

  background-color: ${props => props.color};
`

const Container = styled.div`
  margin: 5em;
  padding: 25px;

  background-color: ${props => props.color}

`

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
    console.log(colorOptions[0])
    /*return '#'+Math.random().toString(16).substr(2,6);*/
    if(!colorOptions.length)
      return;

    return colorOptions[0];
  }

  newQuote() {
    this.setState({
      quote: this.getRandomQuote(),
      color: this.getRandomColor()
    })
  }

  
  render(){
    return (
      <StyledBox m='auto' className="App" color={this.state.color.background}>
        <Container id="quote-box" color={this.state.color.quoteBox} >
          {console.log(this.getQuoteBoxStyle)}
          <Typography>
            <div id="text">{`"${this.state.quote.quote}"`}</div>
            <div id="author">{`- ${this.state.quote.author}`}</div>
          </Typography>
          <Button value='Tweet this'as={Link} target='_blank' href={`https://twitter.com/intent/tweet?text=${this.state.quote.quote}&hashtags=quote`} className='twitter-share-button' id='tweet-quote'>Tweet this</Button>
          <Button id='new-quote' onClick={this.newQuote}>New quote</Button>
        </Container>
      </StyledBox>
    );
  }
}

export default App;
