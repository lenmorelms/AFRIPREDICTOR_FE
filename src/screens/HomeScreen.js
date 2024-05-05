// src/screens/HomeScreen.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowToPlay from '../components/HowToPlay';
import CalltoAction from '../components/CallToAction';

const HomeScreen = () => {

  return (
    <>
    <Header />
    <div className='homepage-hero'>
      <h1 style={{fontWeight: "600", boxShadow: "100"}}><span className="navy">AFRI</span><span className="red">PREDICTOR</span></h1>
      <h3>Join the African Football Prediction Craze!</h3>
      <hr />
      <h4>Become one of the first to play the Afrileaugue predictor games</h4>
    </div>
    <HowToPlay />
    <CalltoAction />
    <Footer />
    </>
  );
};

export default HomeScreen;