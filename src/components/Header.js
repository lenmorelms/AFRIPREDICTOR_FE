import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Actions";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "./resusables/Logo";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // const path = location.pathname.split("/")[location.pathname.split("/").length - 1];         
    useEffect(() => {
        const path = location.pathname.substring(0, 5);
        if(!userInfo && path !== "/regi" && path !== "/forg" && path !== "/rese"
            && path !== "/" && path !== "/lear" && path !== "/how-" && path !== "/priv"
            && path !== "/term" && path !== "/help" && path !== "/cont"
        ) {
            navigate("/login");
        }
    }, [userInfo, navigate, location.pathname]);

    const logoutHandler = () => {
        dispatch(logout());
    };
    return (
        <>
        <div className="m-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <Logo fontWeight="400"/>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <NavLink to="/tournaments" className="nav-item nav-item nav-link" activeClassName="active">Tournaments</NavLink>
                    <NavLink to="/zimpsl" className="nav-item nav-item nav-link" activeClassName="active">Zimpsl</NavLink>
                    {/* <NavLink to="/" className="nav-item nav-item nav-link" activeClassName="active">Other</NavLink>
                    <Link to="/tournaments" className="nav-item nav-item nav-link hover-effect">Tournaments</Link>
                    <Link to="/zimpsl" className="nav-item nav-item nav-link">Zimpsl</Link>
                    <Link to="#!" className="nav-item nav-item nav-link nav-hover">Other</Link> */}
                </div>
                <div className="navbar-nav ms-auto nav-item dropdown">
                    <Link
                        to={!userInfo && "/login"}
                        className="nav-link dropdown-toggle header-login-button"
                        data-bs-toggle={userInfo && "dropdown"}
                    >{userInfo ? userInfo.username : "Login"}</Link>
                    {userInfo && 
                        <div className="dropdown-menu">
                            <Link to={`/profile/${userInfo._id}`} className="dropdown-item">Profile</Link>
                            <Link to="#!" className="dropdown-item" onClick={logoutHandler}>Logout</Link>
                        </div>
                    }
                    </div>
            </div>
            </div>
        </nav>
        </div>
        </>
    );
};

export default Header;