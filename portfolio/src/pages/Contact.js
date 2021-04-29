import React from 'react';
import '../App.css';
import '../pages/Contact.css';
import Footer from '../components/Footer';
import Golf from '../images/email.png';
import Github from '../images/github.jpg';
import Linkedin from '../images/Linkedin.png';


function Contact () {
    return (
    <div>
          <img className="contact-img" src={Golf} alt="Me" />
          <p className="p-tag">Email:Coates.logan1125@gmail.com</p>
          <img className="github-img" src={Github} alt="Me" />
          <p className="p-tag"><a className="a-tag" href="https://github.com/coatsey"> Github</a></p>
          <img className="linkedin-img" src={Linkedin} alt="Me" />
          <p className="p-tag"><a className="a-tag" href="https://www.linkedin.com/in/logan-coates-b404b61bb/"> Linkedin</a></p>
        <Footer />
    </div>
    )
}

export default Contact;