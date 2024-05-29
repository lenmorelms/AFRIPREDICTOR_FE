import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tournament from "../components/resusables/Tournament";
import { serverUrl } from "../components/resusables/Functions";

const TournamentsScreen = () => {
    return (
        <>
        <Header />
        <div className="homepage-hero">
            <h3 style={{textAlign: "center"}}>JOIN A TOURNAMENT</h3>
            <div className="container">
            <div className="flex-container-wrap" style={{color:"#000"}}>
                <div className="flex-tournament">
                    <Tournament
                        logoUrl={`${serverUrl}/images/Zimbabwe.jpg`}
                        heading="Zimbabwean Premier League"
                        text="join the castle lager premier league"
                        url="/join/zimpsl"
                        buttonText="Join Tournament"
                    />
                </div>
                <div className="flex-tournament">
                    <Tournament
                        logoUrl={`${serverUrl}/images/Zambia.png`}
                        heading="Zambian Premier League"
                        text="join the Zambian premier league"
                        url="#!"
                        buttonText="Upcoming Tournamnet"
                    />
                </div>
                <div className="flex-tournament">
                    <Tournament
                        logoUrl={`${serverUrl}/images/Tanzania.jpg`}
                        heading="Tanzanian Premier League"
                        text="join the Tanzanian premier league"
                        url="#!"
                        buttonText="Upcoming Tournamnet"
                    />
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default TournamentsScreen;