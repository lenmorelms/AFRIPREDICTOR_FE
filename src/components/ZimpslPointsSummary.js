import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayerPoints } from "../Redux/Actions";

const ZimpslPointsSummary = () => {
    const dispatch = useDispatch();

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const playerPointsData = useSelector((state) => state._fetchPlayerPoints);
    const { data } = playerPointsData;

    useEffect(() => {
        dispatch(fetchPlayerPoints(userInfo._id));
    }, [dispatch, userInfo._id]);
    return (
        <>
        <div className="container">
      <b className="text-center mb-2">{userInfo.username}</b>
      <div className="row">
        { data && data.map((d) => (
          <>
        <div className="col">
          <b>Played</b>
          <p>{d.predicted}</p>
        </div>
        <div className="col">
          <b>Result</b>
          <p>{d.result}</p>
        </div>
        <div className="col">
          <b>Close</b>
          <p>{d.close}</p>
        </div>
        <div className="col">
          <b>Exact</b>
          <p>{d.score}</p>
        </div>
        <div className="col">
          <b>Points</b>
          <p>{d.total_points}</p>
        </div>
        </>
        ))}
      </div>
    </div>
        </>
    );
};

export default ZimpslPointsSummary;