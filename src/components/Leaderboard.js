import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaderboad } from "../Redux/Actions";
import Pagination from "./Pagination";
import Loading from "./LoadingError/Loading";
import Message from "./LoadingError/Error";

const Leaderboard = (props) => {
    const dispatch = useDispatch();
    const pagenumber = props.pagenumber;
    const leaderboardData = useSelector((state) => state._fetchLeaderboard);
    const { loading, error, playerLeaderboard, page, pages } = leaderboardData;

    useEffect(() => {
        dispatch(fetchLeaderboad(pagenumber));
    }, [dispatch, pagenumber]);

    return (
        <>
        <div className="leaderboard-overview">
        {loading ? (
            <Loading />
        ) : error ? (
            <Message variant="alert-danger">Failed to Get Leaderboard, Reload Page.</Message>
        ) : (
            <div className="container mt-0">
  <div className="table-responsive">
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Player</th>
          <th>Played</th>
          <th>Result</th>
          <th>Close</th>
          <th>Exact</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {playerLeaderboard && playerLeaderboard.map((d) => (
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
        </div>
        </div>
        )}
        </div>
        <Pagination
            pages={pages}
            page={page}
            source="leaderboard"
            team=""
        />
        </>
    );
};

export default Leaderboard;