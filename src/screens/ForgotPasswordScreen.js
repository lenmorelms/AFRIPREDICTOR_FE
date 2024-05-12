import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/resusables/Button";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../Redux/Actions";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const forgotPasswordData = useSelector((state) => state._forgotPassword);
    const { error, success, loading } = forgotPasswordData;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email));
    };

    return (
        <>
        <Header />
        <div className="" style={{ textAlign: "center" }}>
        {error && <Message variant="alert-danger">Failed to Recover Account, Try Again.</Message>}
        {success && <div style={{ color: "red" }}>Reset password link sent to your email</div>}
        {loading && <Loading />}
        <div className="forgot-password">
            <h3>Forgot your password</h3>
            <p>Enter the email you use to login into Afrileague and we will email you a link to reset your password </p>

            <div className="login-form d-flex justify-content-center align-items-center">
                <form onSubmit={submitHandler}>
                <div className="input-group">
                    <input
                        className="form-control margin"
                        type="email"
                        name="forgot-password"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </div>
                    <Button
                        className="btn btn-login margin"
                        type="submit"
                        children="Submit"
                    />
                </form>
            </div>
        </div>
        </div>
        <Footer />
        </>
    );
 };

 export default ForgotPasswordScreen;