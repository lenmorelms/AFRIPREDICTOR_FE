import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UclfinalHeader from "../components/UclfinalHeader";
import UclfinalLeaderboard from "../components/UclfinalLeaderboard";

const UclfinalLeaderboardScreen = () => {
    const { pagenumber } = useParams();

    return (
        <>
        <Header />
        <div className="homepage-hero">
        <div className="my-component">
            {/* Head */}
            <UclfinalHeader />
            {/* Body */}
            <UclfinalLeaderboard pagenumber={pagenumber} />
        </div>
        </div>
        <Footer />
        </>
    );
}

export default UclfinalLeaderboardScreen;