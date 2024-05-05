import React from "react";
import { useParams } from "react-router-dom";
import Leaderboard from "../components/Leaderboard";
import Header from "../components/Header";
import ZimpslHeader from "../components/ZimpslHeader";
import Footer from "../components/Footer";
import LeaderboardNav from "../components/LeaderboardNav";

const LeaderboardScreen = () => {
    const { pagenumber } = useParams();

    return (
        <>
        <Header />
        <div className="homepage-hero">
        <div className="my-component" style={{ margin: "0% 10%" }}>
            {/* Head */}
            <ZimpslHeader />
            {/* Body */}
            <LeaderboardNav />
            <Leaderboard pagenumber={pagenumber} />
        </div>
        </div>
        <Footer />
        </>
    );
}

export default LeaderboardScreen;