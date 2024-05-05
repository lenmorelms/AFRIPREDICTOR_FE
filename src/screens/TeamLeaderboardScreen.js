import React from "react";
import { useParams } from "react-router-dom";
import TeamLeaderboard from "../components/TeamLeaderboard";
import Header from "../components/Header";
import ZimpslHeader from "../components/ZimpslHeader";
import Footer from "../components/Footer";
import LeaderboardNav from "../components/LeaderboardNav";

const TeamLeaderboardScreen = () => {
    const { team, pagenumber } = useParams();

    return (
        <>
        <Header />
        <div className="homepage-hero">
        <div className="my-component" style={{ margin: "0% 10%" }}>
            {/* Head */}
            <ZimpslHeader />
            {/* Body */}
            <LeaderboardNav />
            <TeamLeaderboard team={team} pagenumber={pagenumber} />
        </div>
        </div>
        <Footer />
        </>
    );
}

export default TeamLeaderboardScreen;