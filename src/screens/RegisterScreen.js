import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Select from "react-select";
import countryList from "react-select-country-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { register, resendCode } from '../Redux/Actions';
import Footer from "../components/Footer";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Button from "../components/resusables/Button";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(new Date());
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isAdmin] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showSendCode, setShowSendCode] = useState(false);

    const countryOptions = useMemo(() => countryList().getData(), []);
    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ];

    const dispatch = useDispatch();

    const registerData = useSelector((state) => state._register);
    const { data, loading, error, success } = registerData;

    const resendCodeData = useSelector((state) => state._resendCode);
    const { loading: codeLoading, error: codeError, success: codeSuccess } = resendCodeData;

    const countryHandler = (value) => {
        setCountry(value)
    }

    const genderHandler = (value) => {
        setGender(value)
    }

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords dont match");
        } else if(!document.getElementById("terms").checked) {
            alert("Accept terms");
        }else if(password.length < 6) {
            alert("Password should be 6 characters or more");
        }else if(age < 18) {
            alert("You must be 18 or more years old to register on AfriPredictor");
        } else {
            dispatch(register(email, username, age, gender.label, country.label, password, isAdmin));
        }
    };
    const submitResendHandler = (e) => {
        e.preventDefault();
        dispatch(resendCode(data._id));
    }
    useEffect(() => {
        localStorage.removeItem("userInfo");
        if(data && data.verificationToken) setShowSendCode(true)
    }, [data])

    return (
        <>
        <Header />
        <div className="" style={{ textAlign: "center" }}>
        {error && <Message variant="alert-danger">Email/Username taken</Message>}
        {success ? <div>Account verification link sent to email</div> : codeSuccess ? <div>Account verification link sent to email</div> : ""}
        {loading && <Loading />}
        {codeError && <Message variant="alert danger">Failed to Resend Code, Try Again.</Message>}
        {codeLoading && <Loading />}
            <div className="color-red heading">Don't miss out on the fun <i class="fa fa-sign-in" aria-hidden="true"></i></div>
            <div className="login-form d-flex justify-content-center align-items-center">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        className="form-control margin"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
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
                    <input
                        type="number"
                        className="form-control margin"
                        id="age"
                        name="age"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                    <Select className="margin" options={genderOptions} value={gender} onChange={genderHandler} /> 
                    <Select className="margin" options={countryOptions} value={country} onChange={countryHandler} />
                    <div className="input-group">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="form-control margin"
                        name="password"
                        id="password"
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
                    <input
                        type={showPassword ? "text" : "password"}
                        className="form-control margin"
                        name="confirm-password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <input
                        type="checkbox"
                        className="margin"
                        name="terms"
                        id="terms"
                        required
                    />
                    <label for="termsAgreement">I agree to the Terms and Privacy Policy</label>
                    <br />

                    <Button
                        className="btn btn-login margin"
                        type="submit"
                        children="Create Account"
                    />
                    
                </form>
            </div>
            <div className="flex m-3">
            <p>Already have an account <Link to="/login" className="p-2" style={{ textDecoration: "none" }}>Login</Link> </p>
            {showSendCode && <button className="plain-button" onClick={submitResendHandler}><Link to="/" className="nav-item p-2" style={{ textDecoration: "none" }}>Resend Verification Code</Link></button>}
            </div>
        </div>
        <Footer />
        </>
    );
}

export default RegisterScreen;