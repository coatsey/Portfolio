import React from "react";
import "../App.css";
import "../pages/Contact.css";
import Footer from "../components/Footer";
import Email from "../images/email.png";
import Linked from "../images/Linkedin.png";
import github from "../images/github.jpg";

function Contact() {
  return (
    <div>
      <div className="card-group">
        <div className="card1">
          <img src={Email} className="card-img-top" alt="Email Logo" />
          <div className="card-body">
            <h5 className="card-title">Email</h5>
            <p className="card-text">Coates.logan1125@gmail.com</p>
          </div>
        </div>
        <div className="card2">
          <img src={Linked} className="card-img-top1" alt="..." />
          <div className="card-body">
            <h5 className="card-title">LinkedIn</h5>
            <p className="card-text">
            </p>
            <button type="button" className="btn btn-outline-dark">
              <a
                href="https://www.linkedin.com/in/logan-coates-b404b61bb/"
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
            <img src={github} className="card-img-top2" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Github</h5>
            <p className="card-text">Check out all my Github</p>
            <button type="button" className="btn btn-outline-dark"><a href="https://github.com/coatsey" className="card-link2">Website link</a></button>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
