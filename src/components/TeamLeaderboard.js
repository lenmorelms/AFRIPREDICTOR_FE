import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamLeaderboad } from "../Redux/Actions";
import Pagination from "./Pagination";
import Loading from "./LoadingError/Loading";
import Message from "./LoadingError/Error";

const TeamLeaderboard = (props) => {
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
          <th>Player</th>
          <th>Predicted</th>
          <th>Result</th>
          <th>Close</th>
          <th>Exact</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {playerTeamLeaderboard && playerTeamLeaderboard.map((d) => (
            <tr>
                <td>#</td>
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