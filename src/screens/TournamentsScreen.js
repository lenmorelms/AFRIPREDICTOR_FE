import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tournament from "../components/resusables/Tournament";
import { serverUrl } from "../components/resusables/Functions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { joinTournament } from "../Redux/Actions";

const TournamentsScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const partOfUCLTournament = userInfo.tournaments.some(obj => obj.tourName === "Uclfinal");

    const joinUCLData = useSelector((state) => state._joinTournament);
    const { data: uclData, loading: uclLoading, error: uclError } = joinUCLData;

    const joinUCLHandler = (e) => {
        e.preventDefault();
        if(partOfUCLTournament) {
            navigate("/uclfinal");
        } else {
            dispatch(joinTournament(userInfo._id, userInfo.username, "Uclfinal", "team")); 
        }
    }

    useEffect(() => {
        if (uclData && uclData.token) {
            navigate("/uclfinal");
        }
    }, [uclData, navigate]);
    return (
        <>
        <Header />
        {uclError && <Message variant="alert-danger">Failed to Join UCL final Tournament, Try Again.</Message>}
        {uclLoading && <Loading />}
        <div className="homepage-hero">
            <h3 style={{textAlign: "center"}}>JOIN A TOURNAMENT</h3>
            <div className="container">
            <div className="flex-container-wrap" style={{color:"#000"}}>
                <div className="flex-tournament">
                    <Tournament
                        logoUrl={`${serverUrl}/images/UEFA_Champions_League.png`}
                        heading="Uefa Champions League Final"
                        text="join the ucl final tournament"
                        // url="/join/zimpsl"
                        submitHandler={joinUCLHandler}
                        buttonText="Join Tournament"
                    />
                </div>
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