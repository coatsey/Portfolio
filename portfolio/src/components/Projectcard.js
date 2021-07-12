import React from "react";
import "./Projectcard.css";
import "../App.css";

function Projectcard() {
  return (
    <div>
      <div className="cards">
        <h1 className="title">My Projects</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <li className="cards__item">
                <div className="cards__item__link" to="">
                  <figure
                    className="cards__item__pic-wrap"
                    data-category="Memory game"
                  >
                    <img
                      src="images/click-game.png"
                      alt="travel"
                      className="cards__item__img"
                    />
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">
                      This is a memory game where you can get 30 pictures of characters and you choose one and then you cant pick that same picture again
                    </h5>
                    <h5 className="cards__item__text">
                      React, JavaScript, CSS, Mongo AtlasDB database, Bootstrap
                    </h5>
                    <a
                      href="https://memory-games-project.herokuapp.com/"
                      className="btn btn-outline-dark"
                    >
                      Website Link
                    </a>
                    <a
                      href="https://github.com/jrobi133/memory-games"
                      className="btn btn-outline-dark"
                    >
                      Github Link
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="cards__items">
              <li className="cards__item">
                <div className="cards__item__link" to="">
                  <figure
                    className="cards__item__pic-wrap"
                    data-category="Blueslides"
                  >
                    <img
                      src="images/blue.png"
                      alt="travel"
                      className="cards__item__img"
                    />
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">
                      Checkout my projects on Github
                    </h5>
                    <h5 className="cards__item__text">
                      ReactJs, JavaScript, CSS, HTML
                    </h5>
                    <a
                      href="https://github.com/coatsey/blueslides-/tree/master/blueslides"
                      className="btn btn-outline-dark"
                    >
                      Github Link
                    </a>
                    <a
                      href="https://glacial-cliffs-95785.herokuapp.com/"
                      className="btn btn-outline-dark"
                    >
                      Website Link
                    </a>
                  </div>
                </div>
              </li>
              <li className="cards__item">
                <div className="cards__item__link" to="">
                  <figure
                    className="cards__item__pic-wrap"
                    data-category="Budget"
                  >
                    <img
                      src="images/budget.png"
                      alt="travel"
                      className="cards__item__img"
                    />
                  </figure>
                  <div className="cards__item__info">
                    <h5 className="cards__item__text">
                      This budget app helps you track your earnings and your spending
                    </h5>
                    <h5 className="cards__item__text">
                      JavaScript, CSS, HTML
                    </h5>
                    <a
                      href="https://secret-river-70452.herokuapp.com/"
                      className="btn btn-outline-dark"
                    >
                      Website Link
                    </a>
                    <a
                      href="https://github.com/coatsey/PWA_Budget_Tracker"
                      className="btn btn-outline-dark"
                    >
                      Github Link
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;
