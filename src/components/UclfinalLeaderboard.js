import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "./Pagination";
import Loading from "./LoadingError/Loading";
import Message from "./LoadingError/Error";
import { isDeviceLaptop } from "./resusables/Functions";

const UclfinalLeaderboard = (props) => {
    const [isLaptop] = useState(isDeviceLaptop());
    const dispatch = useDispatch();
    const pagenumber = props.pagenumber;

    useEffect(() => {
        
    }, []);

    return (
        <>
        <div className="leaderboard-overview">
            <div className="mt-0">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Player</th>
                                <th>{isLaptop ? "Played" : "P"}</th>
                                <th>{isLaptop ? "Result" : "R"}</th>
                                <th>{isLaptop ? "Close" : "C"}</th>
                                <th>{isLaptop ? "Exact" : "E"}</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
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
        </div>
        </>
    );
};

export default UclfinalLeaderboard;