import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { editProfileDetails, updateProfileDetails } from "../Redux/Actions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/resusables/Image";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
import { Link, useParams } from "react-router-dom";
import Button from "../components/resusables/Button";
import { serverUrl } from "../components/resusables/Functions";

const ProfileScreen = () => {
    const { id } = useParams();
    const [editedUser, setEditedUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const dispatch = useDispatch();
    const editProfile = useSelector((state) => state._profileEditDetails);
    const { data, loading, error } = editProfile

    const updateProfile = useSelector((state) => state._profileUpdateDetails);
    const { loading: updateLoading, error: updateError, success: updateSuccess } = updateProfile;

    useEffect(() => {
        if (updateSuccess) {
            alert("Profile Updated")
        } else {
        if (!data.username || data._id !== id) {
            dispatch(editProfileDetails(id));
          } else {
            setEditedUser({
              username: data.username,
              email: data.email,
              password: '',
              confirmPassword: ''
            });
          }
        }
    }, [dispatch, id, data._id, data.email, data.username, updateSuccess]);

    const updateHandler = (e) => {
        e.preventDefault();
        if(editedUser.password !== editedUser.confirmPassword) {
            alert("The two passwords do not match");
        } else {
            const username = editedUser.username;
            const email = editedUser.email;
            const password = editedUser.password;
            dispatch(updateProfileDetails(id, username, email, password));
        }
    }

    const handleChange = (e) => {
        setEditedUser({...editedUser, [e.target.name]: e.target.value});
    }

    return (
        <>
        <Header />
        <div class="container">
    <div class="row justify-content-center">
    {updateError && (
        <Message variant="alert-danger">{updateError}</Message>
    )}
    {updateLoading && <Loading />}
       {loading ? (
            <Loading />
        ) : error ? (
            <Message variant="alert-danger">Failed to Get Profile, Reload Page.</Message>
        ) : (
            <>
        <div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
            <div class="card border-0 shadow">
                <Image
                    src={data.gender === "Male" ? `${serverUrl}/images/male_avatar.png` : `${serverUrl}/images/female_avatar.png`}
                />
                <div class="card-body p-1-9 p-xl-5">
                    <div class="mb-4">
                        <h3 class="h4 mb-0">{data.username}</h3>
                        <span class="text-primary">{data.email}</span>
                    </div>
                    <h5>Tournaments</h5>
                    <ul class="social-icon-style2 ps-0">
                       {data.tournaments && data.tournaments.map(e => <li><Link to={`/${e.tourName}`}>{e.tourName}</Link></li>)}
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="ps-lg-1-6 ps-xl-5">
          <div class="card" style={{borderRadius: "15px;"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Update Profile</h2>
              <form onSubmit={updateHandler}>

                <div data-mdb-input-init class="form-outline mb-4">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        id="username"
                        name="username"
                        value={editedUser.username}
                        onChange={handleChange} 
                    />
                    <label class="form-label" for="form3Example1cg">Username</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={editedUser.email}
                        onChange={handleChange}
                    />
                    <label class="form-label" for="form3Example3cg">Email</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                    <input
                        type="password"
                        className="form-control form-control-lg"
                        id="password"
                        name="password"
                        value={editedUser.password}
                        onChange={handleChange}
                    />
                    <label class="form-label" for="form3Example4cg">Password</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                    <input
                        type="password"
                        class="form-control form-control-lg"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={editedUser.confirmPassword}
                        onChange={handleChange}
                    />
                    <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>

                <div class="d-flex justify-content-center">
                <Button
                    className="btn btn-login margin"
                    type="submit"
                    children="Update"
                />
                </div>

              </form>

            </div>
          </div>
            </div>
        </div>
        </>
      )}
    </div>
</div>
<Footer />
        </>
    );
}

export default ProfileScreen;