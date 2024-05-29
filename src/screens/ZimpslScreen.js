import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ZimpslHeader from "../components/ZimpslHeader";
import Zimpsl from "../components/Zimpsl";
import { useNavigate } from "react-router-dom";

const ZimpslScreen = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const checkIfPartOfZimpsl = userInfo.tournaments[0].tourName;

  useEffect(() => {
    if(!checkIfPartOfZimpsl) navigate("/tournaments");
  }, [checkIfPartOfZimpsl, navigate]);
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