import React from "react";
import "./Projectcard.css";
import "../App.css";
import CardItem from "../components/CardItem";

function Projectcard() {
  return (
    <div>
      <div className="cards">
        <h1 className="title">My Projects</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/click-game.png"
                text="This is a game where you have to remember the card you clicked on and cant click on that card again "
                label="Memory Game"
                path="/project"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/budget.png"
                text="This app can track you income and spending habits"
                label="Budget"
                path="https://memory-games-project.herokuapp.com/"
              />
              <CardItem
                src="images/note-taker.png"
                text="This app will help you take and keep track of notes"
                label="Note taker"
                path="/contact"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;
