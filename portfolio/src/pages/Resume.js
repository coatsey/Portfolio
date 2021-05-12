import React from 'react';
import '../App.css';
// import Cards from '../Cards';
import Footer from '../components/Footer';
// import Hero from '../Hero';

function Resume () {
    return (
        <><div>
        <div className="cards">
          <h1 className="title">My Resume</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <li className="cards__item">
                  <div className="cards__item__link" to="">
                    <figure
                      className="cards__item__pic-wrap"
                      data-category="Resume"
                    >
                      <img
                        src="images/resume.jpg"
                        alt="travel"
                        className="cards__item__img"
                      />
                    </figure>
                    <div className="cards__item__info">
                      <h5 className="cards__item__text">
                        Here is a link to my Resume
                      </h5>
                      <a
                        href="https://drive.google.com/file/d/1bHmCia85buLkC10HgxQeNtMszUNXeeze/view?usp=sharing"
                        className="btn btn-outline-dark"
                      >
                        Resume
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
        </>
    )
}

export default Resume;