import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchZimpsl, zimpslPredict } from "../Redux/Actions";
import Button from "../components/resusables/Button"
import Image from "./resusables/Image";
import Gameweeks from "./Gameweeks";
import { formatDate, getCurrentDateTime } from "./resusables/Functions";
import Loading from "./LoadingError/Loading";
import Message from "./LoadingError/Error";
import { serverUrl } from "./resusables/Functions";

const Zimpsl = () => {
  const dispatch = useDispatch();

  const docValue = (id) => {
    return document.getElementById(id).value;
  };
  
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const zimpslData = useSelector((state) => state._fetchZimpsl);
  const { data, loading, error } = zimpslData;

  const handlePrediction = (userId, fixtureId, gameweek, score1, score2) => {
    if(score1 === "" || score2 === "") {
      alert("Enter Scoreline");
    } else {
      dispatch(zimpslPredict(userId, fixtureId, parseInt(gameweek), parseInt(score1), parseInt(score2)));
      alert("Prediction Updated");
    }
  };

  useEffect(() => {
    dispatch(fetchZimpsl(userInfo._id));
  }, [dispatch, userInfo._id]);
  return (
    <>
    <div className="zimpsl bg-light" style={{ color: "#000" }}>
    <Gameweeks />
    <div className="row zimpsl-fixtures">
    {loading ? (
            <Loading />
        ) : error ? (
            <Message variant="alert-danger">Failed to Get Fixtures, Reload Page.</Message>
        ) : (
      <div className="col-8">
        <table className="fixture-board" style={{ color: "#000", width: "100%" }}>
          {data.map((d) => (
          <tr>
            <td><input id={`fixtureId_${d.fixtureCount}`} value={d._id} hidden /></td>
            <td><input id={`gameweek_${d.fixtureCount}`} value={d.gameweek} hidden /></td>
            <td><Image className="predictor-logo" src={`${serverUrl}/images/zimpsl/${d.team1}.jpg`}/><br />{d.team1}</td>
            <td>
              {d.playerPredicted ? 
                <input className="form-control predict-box" type="number" value={d.playerResult.score1} min="0" max="19" disabled={true} />
                :
                <input className="form-control predict-box" type="number" id={`playerScore1_${d.fixtureCount}`} min="0" max="19" disabled={d.result && true} />
              }
            </td>
            <td><button className="btn predict-box">{d.score1}</button></td>
            <td> {formatDate(d.date)} <br /> {d.kickoff} </td>
            <td><button className="btn predict-box">{d.score2}</button></td>
            <td>
              {d.playerPredicted ? 
                <input className="form-control predict-box" type="number" value={d.playerResult.score2} min="0" max="19" disabled={true} />
                :
                <input className="form-control predict-box" type="number" id={`playerScore2_${d.fixtureCount}`} min="0" max="19" disabled={d.result && true} />
              }
            </td>
            <td><Image className="predictor-logo" src={`${serverUrl}/images/zimpsl/${d.team2}.jpg`}/><br />{d.team2}</td>
            <td> <Button className="btn btn-primary" type="submit" children="Lock" disabled={(d.playerPredicted && true) || (d.result && true) || (d.date <= getCurrentDateTime().date)}
                    onClick={() => handlePrediction(userInfo._id, docValue(`fixtureId_${d.fixtureCount}`), docValue(`gameweek_${d.fixtureCount}`), docValue(`playerScore1_${d.fixtureCount}`), docValue(`playerScore2_${d.fixtureCount}`))} 
                  />
            </td>
          </tr>
          ))}
        </table>
      </div>
        )}
    <div className="col-4" style={{color: "#000"}}>
      Table
    </div>
    </div>
    </div>
    </>
  );
};

export default Zimpsl;