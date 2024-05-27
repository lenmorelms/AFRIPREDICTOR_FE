import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UclfinalHeader from "../components/UclfinalHeader";
import Uclfinal from "../components/Uclfinal";

const UclfinalScreen = () => {
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
                <UclfinalHeader />
                {/* Body */}
                <Uclfinal />
                {/* Add your body content here */}
            </div>
        </div>
        <Footer />
        </>
    );
}

export default UclfinalScreen;