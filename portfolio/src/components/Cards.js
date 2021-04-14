import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/resume.jpg"
              text="My Resume"
              label="Resume"
              path="/Resume"
            />
            <CardItem
              src="images/grandpa fish.jpg"
              text="My Works and Projects "
              label="Projects"
              path="/fishing"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              src="images/ammo.jpg"
              text="Contact Me"
              label="Contact"
              path="/contact"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
