import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { login } from '../Redux/Actions';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Button from "../components/resusables/Button";

const LoginScreen = () => {
    window.scrollTo(0, 0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const loginData = useSelector((state) => state._login);
    const { data, loading, error } = loginData;

    useEffect(() => {
        if (data && data.token) {
          navigate(redirect);
        }
    }, [data, navigate, redirect]);

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
        // navigate(redirect);
    };

    return (
        <>
        <Header />
        <div className="" style={{ textAlign: "center" }}>
          {error && <Message variant="alert-danger">Wrong Username/Password, Try Again.</Message>}
          {loading && <Loading />}
            <div className="color-red heading">LOG IN <i class="fa fa-sign-in" aria-hidden="true"></i></div>
            <br />
            <div className="login-form d-flex justify-content-center align-items-center">
                <form onSubmit={submitHandler}>
                <div className="input-group">
                  {/* <span class="input-group-addon"><i class="fa fa-envelope" aria-hidden="true"></i></span> */}
                <input
                    type="email"
                    className="form-control margin"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control margin"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary margin"
              onClick={handlePasswordToggle}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          <Button
            className="btn btn-login margin"
            type="submit"
            children="Log In"
          />

                </form>
            </div>
            <div className="flex m-3">
            <Link to="/forgot-password" className="nav-item p-2" style={{ textDecoration: "none" }}>Forgot Password</Link>
            <Link to="/register" className="p-2" style={{ textDecoration: "none" }}>Create account</Link>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default LoginScreen;