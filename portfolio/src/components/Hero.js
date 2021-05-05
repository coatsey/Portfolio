import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='hero-container'>
      <h1>Logan Coates</h1>
      <p>Full Stack Web Developer</p>
      <div className='hero-btns'>
        <Link to='/projects'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            View My Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
