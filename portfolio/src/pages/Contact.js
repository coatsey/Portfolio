import React from "react";
import "../App.css";
import "../pages/Contact.css";
import Footer from "../components/Footer";
import CardItem from "../components/CardItem";

function Contact() {
  return (
    <div>
      <div className="cards">
        <h1 className="title">Contact Me</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/github.jpg"
                text="Check out all my works on my github page"
                label="Github"
                path="https://memory-games-project.herokuapp.com/"
              />
              <CardItem
                src="images/email.png"
                text="Coates.logan1125@gmail.com"
                label="Email"
                path="/contact"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/Linked.png"
                text="My Works and Projects "
                label="LinkedIn"
                path="/project"
              />
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
