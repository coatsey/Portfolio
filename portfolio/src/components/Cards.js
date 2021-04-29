import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1 className="title">Check out</h1>
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
              src="images/contact.jpg"
              text="Contact Me"
              label="Contact"
              path="/contact"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              src="images/project.jpeg"
              text="My Works and Projects "
              label="Projects"
              path="/project"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
