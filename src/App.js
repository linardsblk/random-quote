import React from 'react';
import quotes from './quotes.json';
import colorOptions from './colorOptions.json';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled(({ color, ...other }) => <Box {...other} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;

  background-color: rgba(${props => props.color.r}, ${props => props.color.g}, ${props => props.color.b}, 0.05);

  
`

const QuoteBox = styled.div`
  margin: 5em;
  padding: 25px;
  opacity: 1;
  max-width: 30%;

  border-left: 7px solid rgba(${props => props.dark.r}, ${props => props.dark.g}, ${props => props.dark.b}, 1);
  background-color: rgba(${props => props.color.r}, ${props => props.color.g}, ${props => props.color.b}, 1);

  @media (max-width: 768px) {
    max-width: 65%;
  }

  @media (max-width: 1024px) {
    max-width: 50%;
  }

  @media (max-width: 1440px) {
    max width: 40%;
  }
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
    this.hexToRgb       = this.hexToRgb.bind(this);
  }

  
  getRandomQuote() {
    if(!quotes.length) {
      return;
    }
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  getRandomColor() {
    if(!colorOptions.length)
      return;

    return colorOptions[Math.floor(Math.random() * colorOptions.length)];
  }

  newQuote() {
    this.setState({
      quote: this.getRandomQuote(),
      color: this.getRandomColor()
    })
  }

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  
  render(){
    return (
      <Container m='auto' className="App" color={this.hexToRgb(this.state.color.light)}>
        <QuoteBox id="quote-box" dark={this.hexToRgb(this.state.color.dark)} color={this.hexToRgb(this.state.color.primary)} >
          {console.log(this.getQuoteBoxStyle)}
          <Typography>
            <div id="text">{`"${this.state.quote.quote}"`}</div>
            <div id="author">{`- ${this.state.quote.author}`}</div>
          </Typography>
          <Button value='Tweet this'as={Link} target='_blank' href={`https://twitter.com/intent/tweet?text=${this.state.quote.quote}&hashtags=quote`} className='twitter-share-button' id='tweet-quote'>Tweet this</Button>
          <Button id='new-quote' onClick={this.newQuote}>New quote</Button>
        </QuoteBox>
      </Container>
    );
  }
}

export default App;
