import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Jumbo from '../components/Jumbo';


function Home () {
    return (
        <>
            <Hero />
            <Jumbo />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;