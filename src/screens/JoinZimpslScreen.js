import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { joinTournament } from "../Redux/Actions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Team from "../components/resusables/Team";
import Teams from "../components/data/Teams";
import Button from "../components/resusables/Button";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { useNavigate } from "react-router-dom";

const JoinZimpslScreen = () => {
    const [tournament] = useState("Zimpsl");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const partOfTournament = userInfo.tournaments.some(obj => obj.tourName === "Zimpsl");

    const joinData = useSelector((state) => state._joinTournament);
    const { data, loading, error } = joinData;

    useEffect(() => {
        if (partOfTournament || (data && data.token)) {
          navigate("/zimpsl");
        }
    }, [partOfTournament, data, navigate]);

    return (
        <>
        <Header />
        {error && <Message variant="alert-danger">Failed to Join Tournament, Try Again.</Message>}
        {loading && <Loading />}
        <div className="homepage-hero">
            <div style={{border: "3px solid transparent", margin: "auto"}} className="container rounded-border">
                <div className="row col-12" style={{backgroundColor: "navy", padding: "2px", border: "2px solid navy", borderRadius: "5px"}}>
                    <h2>Zimbabwe Premier League Predictor</h2>
                </div>
                <div className="row col-12" style={{backgroundColor: "#fefefe", color: "red", padding: "2px"}}>
                    <h3>Heyy {userInfo.username}</h3>
                    <p>Select your team</p>
                </div>
                <div className="row col-12" style={{backgroundColor: "#fefefe"}}>
                        <div className="flex-container-wrap">
                            {Teams.map((team) => (
                                <div 
                                    className="flex-team"
                                    style={{ backgroundColor: "#fefefe" }}
                                    
                                >
                                    <Button
                                        className="btn "
                                        type="button"
                                        children={<label className="label-item">
                                                    <Team logoUrl={team.image} name={team.name}/>
                                                    </label>
                                                }
                                        onClick={() => dispatch(joinTournament(userInfo._id, userInfo.username, tournament, team.name))}
                                    />
                                </div>
                            ))}
                        </div>
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default JoinZimpslScreen;