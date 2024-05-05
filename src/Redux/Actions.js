import axios from 'axios';
import { FETCH_SAMPLE_SUCCESS, FETCH_SAMPLE_FAILURE, ZIMPSL_REQUEST, ZIMPSL_SUCCESS, ZIMPSL_FAILURE, ZIMPSL_LEADERBOARD_REQUEST, ZIMPSL_LEADERBOARD_SUCCESS, ZIMPSL_LEADERBOARD_FAILURE, JOIN_TOURNAMENT_REQUEST, JOIN_TOURNAMENT_SUCCESS, JOIN_TOURNAMENT_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAILURE, PREDICT_REQUEST, PREDICT_SUCCESS, PREDICT_FAILURE, ZIMPSL_PLAYER_POINTS_REQUEST, ZIMPSL_PLAYER_POINTS_SUCCESS, ZIMPSL_PLAYER_POINTS_FAILURE, ZIMPSL_TEAM_LEADERBOARD_REQUEST, ZIMPSL_TEAM_LEADERBOARD_SUCCESS, ZIMPSL_TEAM_LEADERBOARD_FAILURE, USER_LOGOUT, USER_DETAILS_RESET, ZIMPSL_GAMEWEEKS_REQUEST, ZIMPSL_GAMEWEEKS_SUCCESS, ZIMPSL_GAMEWEEKS_FAILURE, USER_VERIFY_REQUEST, USER_VERIFY_SUCCESS, USER_VERIFY_FAILURE, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, RESEND_CODE_REQUEST, RESEND_CODE_SUCCESS, RESEND_CODE_FAILURE, SEND_MAIL_REQUEST, SEND_MAIL_SUCCESS, SEND_MAIL_FAILURE, USER_DETAILS_EDIT_REQUEST, USER_DETAILS_EDIT_SUCCESS, USER_DETAILS_EDIT_FAILURE, USER_DETAILS_UPDATE_REQUEST, USER_DETAILS_UPDATE_SUCCESS, USER_DETAILS_UPDATE_FAILURE } from './Constants';


// const serverUrl = 'https://afripredictor.onrender.com';
const serverUrl = 'http://localhost:5000';
// Example action creator
export const fetchSampleData = (id) => async (getState, dispatch) => {
  try {
    const {
      _login: { data },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    const response = await axios.get(`${serverUrl}/api/tournaments/football/zimpsl/${id}`, config); // Replace with your API endpoint
    dispatch({ type: FETCH_SAMPLE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_SAMPLE_FAILURE, payload: error.message });
  }
};
// LOGIN
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(`${serverUrl}/api/users/login`, {email, password}, config);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  } catch(error) {
    dispatch({ type: USER_LOGIN_FAILURE, payload: error.message });
  }
};
// REGISTER
export const register = (email, username, age, gender, country, password, isAdmin) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.post(`${serverUrl}/api/users/register`, {email, username, age, gender, country, password, isAdmin}, config);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: response.data });
  } catch(error) {
    dispatch({ type: USER_REGISTER_FAILURE, payload: error.message });
  }
};
// FORGOT PASSWORD
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.put(`${serverUrl}/api/users/forgot-password`, {email}, config);
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: response.data });
  } catch(error) {
    dispatch({ type: FORGOT_PASSWORD_FAILURE, payload: error.message });
  }
};
// RESET PASSWORD
export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.put(`${serverUrl}/api/users/reset-password`, {token, password}, config);
    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: response.data });
  } catch(error) {
    dispatch({ type: RESET_PASSWORD_FAILURE, payload: error.message });
  }
};
// RESEND VERIFICATION CODE
export const resendCode = (id) => async (dispatch) => {
  try {
    dispatch({ type: RESEND_CODE_REQUEST });
    const response = await axios.get(`${serverUrl}/api/users/resend-code/${id}`);
    dispatch({ type: RESEND_CODE_SUCCESS, payload: response.data });
  } catch(error) {
    dispatch({ type: RESEND_CODE_FAILURE, payload: error.message });
  }
}
// VERIFY
export const verify = (token) => async (dispatch) => {
  try {
    dispatch({ type: USER_VERIFY_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.put(`${serverUrl}/api/users/verify`, {token}, config);
    dispatch({ type: USER_VERIFY_SUCCESS, payload: response.data });
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  } catch(error) {
    dispatch({ type: USER_VERIFY_FAILURE, payload: error.message });
  }
};
// LOGOUT
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
}
// PROFILE DETAILS
export const profileDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const {
      _login: { data },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    const response = await axios.get(`${serverUrl}/api/users/${id}`, config);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: response.data });
  } catch(error) {
    dispatch({ type: USER_DETAILS_FAILURE, payload: error.message });
  }
};
// EDIT PROFILE DETAILS
export const editProfileDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_EDIT_REQUEST });
    const response = await axios.get(`/api/users/${id}`);
    dispatch({ type: USER_DETAILS_EDIT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_DETAILS_EDIT_FAILURE, payload: error.message });
  }
}
// UPDATE PROFILE DETAILS
export const updateProfileDetails = (id, username, email, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_UPDATE_REQUEST });

    const {
      _login: { data },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    };

    const response = await axios.put(
      `/api/users/profile/${id}`,
      {id, username, email, password},
      config
    );
    dispatch({ type: USER_DETAILS_UPDATE_SUCCESS, payload: response.data });
    dispatch({ type: USER_DETAILS_EDIT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_DETAILS_UPDATE_FAILURE, payload: error.message });
  }
}; //to be looked into
// JOIN TOURNAMENT
export const joinTournament = (userId, username, tournament, team) => async (dispatch, getState) => {
  try {
    dispatch({ type: JOIN_TOURNAMENT_REQUEST });
    const {
      _login: { data },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    };
    const response = await axios.put(`${serverUrl}/api/tournaments/zimpsl/join`, {userId, username, tournament, team}, config);
    const Useresponse = await axios.get(`${serverUrl}/api/users/${userId}`, config);
    dispatch({ type: JOIN_TOURNAMENT_SUCCESS, payload: response.data });
    localStorage.setItem("userInfo", JSON.stringify(Useresponse.data));
  } catch(error) {
    dispatch({ type: JOIN_TOURNAMENT_FAILURE, payload: error.message });
  }
};
// GET ZIMPSL
export const fetchZimpsl = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ZIMPSL_REQUEST });
    const {
      _login: { data },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    const response = await axios.get(`${serverUrl}/api/tournaments/football/zimpsl/${id}`, config);
    dispatch({ type: ZIMPSL_SUCCESS, payload: response.data });
  } catch(error) {
    dispatch({ type: ZIMPSL_FAILURE, payload: error.message });
  }
};
// GET ZIMPSL GAMEWEEKS
export const fetchZimpslGameweeks = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ZIMPSL_GAMEWEEKS_REQUEST });
    const {
      _login: { data },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    const response = await axios.get(`${serverUrl}/api/tournaments/gameweeks/zimpsl`, config);
    dispatch({ type: ZIMPSL_GAMEWEEKS_SUCCESS, payload: response.data });
  } catch(error) {
    dispatch({ type: ZIMPSL_GAMEWEEKS_FAILURE, payload: error.message });
  }
};
// GET ZIMPSL BY GAMEWEEK
export const fetchZimpslByGameweek = (gameweek, id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ZIMPSL_REQUEST });
    const {
      _login: { data },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    const response = await axios.get(`${serverUrl}/api/tournaments/football/zimpsl/${gameweek}/${id}`, config);
    dispatch({ type: ZIMPSL_SUCCESS, payload: response.data });
  } catch(error) {
    dispatch({ type: ZIMPSL_FAILURE, payload: error.message });
  }
};
// ZIMPSL PREDICT
export const zimpslPredict = (userId, fixtureId, gameweek, score1, score2) => async (dispatch, getState) => {
  try {
    dispatch({ type: PREDICT_REQUEST });
    const {
      _login: { data },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    };
    const response = await axios.post(`${serverUrl}/api/tournaments/football/zimpsl`, {userId,fixtureId, gameweek, score1, score2}, config);
    dispatch({ type: PREDICT_SUCCESS, payload: response.data });
  } catch(error) {
    dispatch({ type: PREDICT_FAILURE, payload: error.data });
  }
}
// GET ZIMPSL LEADERBOARD
export const fetchLeaderboad = (pageNumber = " ") => async (dispatch, getState) => {
  try {
    dispatch({ type: ZIMPSL_LEADERBOARD_REQUEST });
    const {
      _login: { data },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    const response = await axios.get(`${serverUrl}/api/tournaments/football/leaderboard/zimpsl?pageNumber=${pageNumber}`, config);
    dispatch({ type: ZIMPSL_LEADERBOARD_SUCCESS, payload: response.data });
  } catch(error) {
    dispatch({ type: ZIMPSL_LEADERBOARD_FAILURE, payload: error.message });
  }
};
// GET ZIMPSL LEADERBOARD
export const fetchTeamLeaderboad = (team, pageNumber = " ") => async (dispatch, getState) => {
  try {
    dispatch({ type: ZIMPSL_TEAM_LEADERBOARD_REQUEST });
    const {
      _login: { data },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    const response = await axios.get(`${serverUrl}/api/tournaments/football/leaderboard/zimpsl/${team}?pageNumber=${pageNumber}`, config);
    dispatch({ type: ZIMPSL_TEAM_LEADERBOARD_SUCCESS, payload: response.data });
  } catch(error) {
    dispatch({ type: ZIMPSL_TEAM_LEADERBOARD_FAILURE, payload: error.message });
  }
};
// GET ZIMPSL PLAYER POINTS
export const fetchPlayerPoints = (userId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ZIMPSL_PLAYER_POINTS_REQUEST });
    const {
      _login: { data },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    const response = await axios.get(`${serverUrl}/api/tournaments/football/playerpoints/zimpsl/${userId}`, config);
    dispatch({ type: ZIMPSL_PLAYER_POINTS_SUCCESS, payload: response.data });
  } catch(error) {
    dispatch({ type: ZIMPSL_PLAYER_POINTS_FAILURE, payload: error.message });
  }
};
// SEND MAIL
export const sendMail = (fullname, email, message) => async (dispatch, getState) => {
  try {
    dispatch({ type: SEND_MAIL_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(`${serverUrl}/api/users/mail`, {fullname, email, message}, config);
    dispatch({ type: SEND_MAIL_SUCCESS, payload: response.data });
  } catch(error) {
    dispatch({ type: SEND_MAIL_FAILURE, payload: error.message });
  }
}