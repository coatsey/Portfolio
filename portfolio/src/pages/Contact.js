import React from "react";
import "../App.css";
import "../pages/Contact.css";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <div className="cards">
        <h1 className="title">Contact Me</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <li className="cards__item">
                <div className="cards__item__link" to="">
                  <figure
                    className="cards__item__pic-wrap"
                    data-category="Email"
                  >
                    <img
                      src="images/email.png"
                      alt="travel"
                      className="cards__item__img"
                    />
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">
                      Coates.logan1125@gmail.com
                    </h5>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="cards__items">
              <li className="cards__item">
                <div className="cards__item__link" to="">
                  <figure
                    className="cards__item__pic-wrap"
                    data-category="Github"
                  >
                    <img
                      src="images/github.jpg"
                      alt="travel"
                      className="cards__item__img"
                    />
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">
                      Checkout my projects on Github
                    </h5>
                    <a
                      href="https://github.com/coatsey"
                      className="btn btn-outline-dark"
                    >
                      Github Link
                    </a>
                  </div>
                </div>
              </li>
              <li className="cards__item">
                <div className="cards__item__link" to="">
                  <figure
                    className="cards__item__pic-wrap"
                    data-category="LinkedIn"
                  >
                    <img
                      src="images/Linked.png"
                      alt="travel"
                      className="cards__item__img"
                    />
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">
                      Checkout my projects on LinkedIn
                    </h5>
                    <a
                      href="https://www.linkedin.com/in/logan-coates-b404b61bb/"
                      className="btn btn-outline-dark"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
