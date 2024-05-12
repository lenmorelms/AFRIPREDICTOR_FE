import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchZimpsl, zimpslPredict } from "../Redux/Actions";
import Button from "../components/resusables/Button"
import Image from "./resusables/Image";
import Gameweeks from "./Gameweeks";
import { formatDate, getCurrentDateTime, isDeviceLaptop } from "./resusables/Functions";
import Loading from "./LoadingError/Loading";
// import Message from "./LoadingError/Error";
import { serverUrl } from "./resusables/Functions";
import ZimplsTable from "./resusables/ZimplsTable";

const Zimpsl = () => {
  const [isLaptop] = useState(isDeviceLaptop());
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
  const diagonalInches = Math.sqrt(Math.pow(window.screen.width, 2) + Math.pow(window.screen.height, 2)) / 96;

  useEffect(() => {
    dispatch(fetchZimpsl(userInfo._id));
  }, [dispatch, userInfo._id]);
  return (
    <>
    <div className="zimpsl bg-light" style={{ color: "#000" }}>
    <Gameweeks />
    {console.log(diagonalInches)}
    <div className="row zimpsl-fixtures">
    {loading ? (
            <Loading />
        ) : error ? (
            // <Message variant="alert-danger"></Message>
            ""
        ) : (
      <div className={`table-responsive ${isLaptop ? `col-7` : `col-12`}`}>
        {data.length === 0 ? (
          <h1>NO FIXTURES YET</h1>
        ) : (
          <table className="fixture-board table mt-1" style={{ color: "#000", width: "100%" }}>
          {data.length > 0 && data.map((d) => (
            <>
            <tr className="" style={{ backgroundColor: "#ebe9e4", borderRadius: "5px" }}>
              <td colSpan={isLaptop ? 3 : 5 } className="p-2">
                <i className="fa fa-calendar" aria-hidden="true" style={{ backgroundColor: "#ebe9e4", fontSize: "30px" }}></i>
                {formatDate(d.date)}  {d.kickoff}
              </td>
              <td colSpan={isLaptop ? 4 : 0}></td>
                {isLaptop ? (<td></td>) : (
                  d.result ? (
                    <td></td>
                  ) : (
                    <td style={{ display: (d.result) ? "none" : "block" }}>   
                      <Button className="btn btn-primary" type="submit" children="Lock" disabled={(d.playerPredicted && true) || (d.result && true) || (d.date <= getCurrentDateTime().date)}
                        onClick={() => handlePrediction(userInfo._id, docValue(`fixtureId_${d.fixtureCount}`), docValue(`gameweek_${d.fixtureCount}`), docValue(`playerScore1_${d.fixtureCount}`), docValue(`playerScore2_${d.fixtureCount}`))} 
                      />
                    </td> 
                  )
                )}
            </tr>
          <tr>
            <td><input id={`fixtureId_${d.fixtureCount}`} value={d._id} hidden /></td>
            <td><input id={`gameweek_${d.fixtureCount}`} value={d.gameweek} hidden /></td>
            <td><Image className="predictor-logo" src={`${serverUrl}/images/zimpsl/${d.team1}.jpg`}/><br />{d.team1}</td>
            
            <td>
            {d.result ?
                (<input className="predict-box" type="number" value={d.score1} min="0" max="19" disabled={true} />)
                :
                (d.playerPredicted ?
                  <input className="predict-box" type="number" value={d.playerResult.score1} min="0" max="19" disabled={true} />
                  :
                  <input className="predict-box" type="number" id={`playerScore1_${d.fixtureCount}`} min="0" max="19" />
                )
              }
            </td>
            <td>
            {d.result ? (
              d.playerPredicted ? (
                <>
                <b>Your Result 👇</b><br />
                <b>{d.playerResult.score1} - {d.playerResult.score2}</b>
                </>
              ) : (
                  <p>No Prediction</p>
                )
              ) : (
                  <p>-</p>
              )}
            </td>            
            <td>
            {d.result ?
                (<input className="predict-box" type="number" value={d.score2} min="0" max="19" disabled={true} />)
                :
                (d.playerPredicted ?
                  <input className="predict-box" type="number" value={d.playerResult.score2} min="0" max="19" disabled={true} />
                  :
                  <input className="predict-box" type="number" id={`playerScore2_${d.fixtureCount}`} min="0" max="19" />
                )
              }
            </td>            
            <td><Image className="predictor-logo" src={`${serverUrl}/images/zimpsl/${d.team2}.jpg`}/><br />{d.team2}</td>
            <td className="lock-btn" style={{ display: (!isLaptop || d.result) ? "none" : "block" }}>
              <Button className="btn btn-primary" type="submit" children="Lock" disabled={(d.playerPredicted && true) || (d.result && true) || (d.date <= getCurrentDateTime().date)}
                  onClick={() => handlePrediction(userInfo._id, docValue(`fixtureId_${d.fixtureCount}`), docValue(`gameweek_${d.fixtureCount}`), docValue(`playerScore1_${d.fixtureCount}`), docValue(`playerScore2_${d.fixtureCount}`))} 
               />
            </td>
          </tr>
          </>
          ))}
        </table>
        )}
        
      </div>
        )}
    <div className={`table-responsive ${isLaptop ? `col-5` : `col-12`}`} style={{color: "#000"}}>
    <table className="table">
      <thead>
        <tr className="p-2" style={{ backgroundColor: "navy", color: "white" }}>
          <th>PO</th>
          <th>TEAM</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GOALS</th>
          <th>PTS</th>
        </tr>
      </thead>
      <tbody>
        {ZimplsTable.map((team) => (
          <tr>
          <td>{team.rank}</td>
          <td>{team.name}</td>
          <td>{team.wins}</td>
          <td>{team.draws}</td>
          <td>{team.losses}</td>
          <td>{team.goals_for} : {team.goals_against}</td>
          <td>{team.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
    </div>
    </>
  );
};

export default Zimpsl;