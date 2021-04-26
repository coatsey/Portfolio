import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import Projectcard from '../components/Projectcard';
import '../pages/Projects.css'


function Projects () {
    return (
        <>
            <div className="page">
                <Projectcard />
                <Footer />
            </div>
        </>
    )
}

export default Projects;