import React from "react";
import "./Projectcard.css";
import "../App.css";
import Clicky from "../images/click-game.png";
import Budget from "../images/budget.png";
import Note from "../images/note-taker.png";

function Projectcard() {
  return (
    <div>
      <div className="card-group">
        <div className="card1">
          <img src={Clicky} className="card-img-top1" alt="bad" />
          <div className="card-body">
            <h5 className="card-title">Clicky Game</h5>
            <p className="card-text">
              This is a matching game where you click on an image and then as
              they get shuffled you try not to pick the same image again.
            </p>
            <button type="button" className="btn btn-outline-dark">
              <a
                href="https://memory-games-project.herokuapp.com/"
                className="card-link1"
              >
                Website link
              </a>
            </button>
          </div>
        </div>
        <div className="card2">
          <img src={Budget} className="card-img-top6" alt="budget" />
          <div className="card-body">
            <h5 className="card-title">Budget Tracker</h5>
            <p className="card-text">
              This is a app where you can track your money. You can add or
              subtract the money and it shows up on a graph.
            </p>
            <button type="button" className="btn btn-outline-dark">
              <a
                href="https://secret-river-70452.herokuapp.com/"
                className="card-link2"
              >
                Website link
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="card-group1">
        <div className="card3">
          <img src={Note} className="card-img-top9" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Note Taker</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <button type="button" className="btn btn-outline-dark">
              <a
                href="https://shrouded-shelf-54377.herokuapp.com/"
                className="card-link2"
              >
                Website link
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;
