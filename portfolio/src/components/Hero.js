import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      <h1>Logan Coates</h1>
      <p>Full Stack Web Developer</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          My Projects
        </Button>
      </div>
    </div>
  );
}

export default Hero;
