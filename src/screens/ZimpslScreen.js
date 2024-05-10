import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ZimpslHeader from "../components/ZimpslHeader";
import Zimpsl from "../components/Zimpsl";

const ZimpslScreen = () => {
    return (
        <>
        <Header />
        <div className="homepage-hero">
<div className="container-fluid">
  <div className="row">
    <div className="col">
      <div className="banner">
        <h1>Submit Predictions Before Matchday</h1>
      </div>
    </div>
  </div>
</div> 
        <div className="my-component">
        {/* Header */}
        <ZimpslHeader />
        {/* Body */}
        <Zimpsl />
        {/* Add your body content here */}
        </div>
        </div>
        <Footer />
        </>
    );
}

export default ZimpslScreen;