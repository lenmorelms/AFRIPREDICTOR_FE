import React from "react";
import ZimpslPointsSummary from "./ZimpslPointsSummary";
import { Link } from "react-router-dom";

const ZimpslHeader = () => {
    return (
        <div className="row" style={{ 
          backgroundColor: "red", padding: "2% 0 0 2%", border: "1px solid red", borderRadius: "5px 5px 0 0"
        }}>
{/* First Column (Navigation Links) */}
<div className="col-lg-6 col-md-12">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      {/* <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link league-heander-nav-link" to="/zimpsl">
              Picks
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link league-heander-nav-link" to="/zimpsl/leaderboard">
              Leaderboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

{/* Second Column (Floating Right) */}
<div className="col-lg-6 col-md-12 text-end" style={{ 
  backgroundColor: "#000", border: "1px solid #000", borderRadius: "5px 0 0 0"
}}>
  <ZimpslPointsSummary />
</div>
</div>
    );
};

export default ZimpslHeader;