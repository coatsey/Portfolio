import React from "react";
import "./Projectcard.css";
import '../App.css';
import './Projectcard.css';
import Clicky from '../images/click-game.png';
import Budget from '../images/budget.png';
import Note from '../images/note-taker.png';

function Projectcard() {
  return (
    <div className="card-group">
  <div className="card">
    <img src={Clicky} className="card-img-top" alt="bad" />
    <div className="card-body">
      <h5 className="card-title">Clicky Game</h5>
      <p className="card-text">This is a matching game where you click on an image and then as they get shuffled you try not to pick the same image again.</p>
      <a href='https://memory-games-project.herokuapp.com/' className="card-link">Website Link</a>
    </div>
  </div>
  <div className="card">
    <img src={Budget} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Budget Tracker</h5>
      <p className="card-text">This is a app where you can track your money. You can add or subtract the money and it shows up on a graph.</p>
      <a href='https://secret-river-70452.herokuapp.com/' className="card-link">Website Link</a>
    </div>
  </div>
  <div className="card">
    <img src={Note} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <a href='https://shrouded-shelf-54377.herokuapp.com/' className="card-link">Website Link</a>
    </div>
  </div>
</div>
  )
}

export default Projectcard;
