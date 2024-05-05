import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  const { page, pages, source, team } = props;
  // const serverUrl = 'http://localhost:5000';
  return (
    pages > 1 && (
      <nav>
        <ul className="pagination justify-content-center">
          {[...Array(pages).keys()].map((x) => (
            <li
              className={`page-item ${x + 1 === page ? "active" : ""}`}
              key={x + 1}
            >
              <Link
                className="page-link"
                to={
                  source==="leaderboard" ? (
                     `/zimpsl/leaderboard/page/${x + 1}`
                  ) : source==="teamLeaderboard" ? (
                     `/zimpsl/leaderboard/${team}/page/${x + 1}`
                  ) : ""
                }
              >
                {x + 1}
              </Link> 
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

export default Pagination;