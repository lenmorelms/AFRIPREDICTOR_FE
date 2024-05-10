import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ZimpslHeader from "../components/ZimpslHeader";
import ZimpslByGameweek from "../components/ZimpslByGameweek";
import Footer from "../components/Footer";

const ZimpslGameweekScreen = () => {
    const { gameweek } = useParams();

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
            <ZimpslByGameweek gameweek={gameweek} />
        </div>
        </div>
        <Footer />
        </>
    );
}

export default ZimpslGameweekScreen;