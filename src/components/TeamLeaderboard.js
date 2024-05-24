import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamLeaderboad } from "../Redux/Actions";
import Pagination from "./Pagination";
import Loading from "./LoadingError/Loading";
import Message from "./LoadingError/Error";
import { isDeviceLaptop } from "./resusables/Functions";

const TeamLeaderboard = (props) => {
    const [isLaptop] = useState(isDeviceLaptop());
    const dispatch = useDispatch();
    const { team, pagenumber } = props;

    const leaderboardData = useSelector((state) => state._fetchTeamLeaderboard);
    const { loading, error, playerTeamLeaderboard, page, pages } = leaderboardData;

    useEffect(() => {
        dispatch(fetchTeamLeaderboad(team, pagenumber));
    }, [dispatch, team, pagenumber]);

    return (
        <>
        <div className="leaderboard-overview">
        {loading ? (
            <Loading />
        ) : error ? (
            <Message variant="alert-danger">Failed to Get Team Leaderboard, Reload Page.</Message>
        ) : (
            <div className="container mt-0">
  <div className="table-responsive">
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Position</th>
          <th>{isLaptop ? "Played" : "P"}</th>
          <th>{isLaptop ? "Result" : "R"}</th>
          <th>{isLaptop ? "Close" : "C"}</th>
          <th>{isLaptop ? "Exact" : "E"}</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {playerTeamLeaderboard && playerTeamLeaderboard.map((d) => (
            <tr key={d._id}>
                <td>{d.position}</td>
                <td>{d.username}</td>
                <td>{d.predicted}</td>
                <td>{d.result}</td>
                <td>{d.close}</td>
                <td>{d.score}</td>
                <td>{d.total_points}</td>
            </tr>
        ))}
      </tbody>
    </table>
    {!isLaptop && (
          <div>
            <h3>KEY:</h3>
            <ul>
              <li>P: Played</li>
              <li>R: Result</li>
              <li>C: Close</li>
              <li>E: Exact</li>
            </ul>
          </div>
        ) }
        </div>
        </div>
        )}
        </div>
        <Pagination
            pages={pages}
            page={page}
            source="teamleaderboard"
            team={team}
        />
        </>
    );
};

export default TeamLeaderboard;