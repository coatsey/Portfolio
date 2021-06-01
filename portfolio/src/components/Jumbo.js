import React from "react";
import "./Jumbo.css";

function Jumbo() {
  return (
    <div className="cardmb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img className="image" src="images/ME.jpg" alt="Me and remi" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">About Me</h5>
            <p className="card-texts">
              I'm Logan Coates and I just finished a bootcamp at the University
              of Utah to become a Full Stack Web Developer. I was born and
              rasied in Utah. Growing up I was really into sports. As I got
              older and had some injuries I've turned more to video game and
              computers.{" "}
            </p>
            <p className="card-text2">
              React, JavaScript, CSS, SQL, HTML {" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbo;
