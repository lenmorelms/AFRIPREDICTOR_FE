import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { profileDetails } from "../Redux/Actions";

const LeaderboardNav = () => {
    const dispatch = useDispatch();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const userData = useSelector((state) => state._profileDetails);
    const data = userData.data.tournaments;

    useEffect(() => {
        dispatch(profileDetails(userInfo._id));
    }, [dispatch, userInfo._id]);
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100 justify-content-between">
          <li className="nav-item">
            <Link className="nav-link" to="/zimpsl/leaderboard">OVERALL LEADERBOARD</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/zimpsl/leaderboard/${data && data[0].playerTeam}`}>{data && data[0].playerTeam + " LEADERBORAD"}</Link>
          </li>
        </ul>
      </div>
    </nav>
        </div>
    );
};

export default LeaderboardNav;