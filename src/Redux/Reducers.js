import { FETCH_SAMPLE_SUCCESS, FETCH_SAMPLE_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAILURE, JOIN_TOURNAMENT_REQUEST, JOIN_TOURNAMENT_SUCCESS, JOIN_TOURNAMENT_FAILURE, ZIMPSL_REQUEST, ZIMPSL_SUCCESS, ZIMPSL_FAILURE, PREDICT_REQUEST, PREDICT_SUCCESS, PREDICT_FAILURE, ZIMPSL_LEADERBOARD_REQUEST, ZIMPSL_LEADERBOARD_SUCCESS, ZIMPSL_LEADERBOARD_FAILURE, ZIMPSL_PLAYER_POINTS_REQUEST, ZIMPSL_PLAYER_POINTS_SUCCESS, ZIMPSL_PLAYER_POINTS_FAILURE, ZIMPSL_TEAM_LEADERBOARD_REQUEST, ZIMPSL_TEAM_LEADERBOARD_SUCCESS, ZIMPSL_TEAM_LEADERBOARD_FAILURE, USER_LOGOUT, USER_DETAILS_RESET, ZIMPSL_GAMEWEEKS_REQUEST, ZIMPSL_GAMEWEEKS_SUCCESS, ZIMPSL_GAMEWEEKS_FAILURE, USER_VERIFY_REQUEST, USER_VERIFY_SUCCESS, USER_VERIFY_FAILURE, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, RESEND_CODE_REQUEST, RESEND_CODE_SUCCESS, RESEND_CODE_FAILURE, SEND_MAIL_REQUEST, SEND_MAIL_SUCCESS, SEND_MAIL_FAILURE, USER_DETAILS_UPDATE_REQUEST, USER_DETAILS_UPDATE_SUCCESS, USER_DETAILS_UPDATE_FAILURE, USER_DETAILS_EDIT_REQUEST, USER_DETAILS_EDIT_SUCCESS, USER_DETAILS_EDIT_FAILURE } from "./Constants";
  
export const sampleReducer = (state = { data: [] }, action) => {
    switch (action.type) {
      case FETCH_SAMPLE_SUCCESS:
        return { ...state, data: action.payload, loading: false, error: null };
      case FETCH_SAMPLE_FAILURE:
        return { ...state, data: null, loading: false, error: action.payload };
      default:
        return state;
    }
};
// LOGIN
export const loginReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case USER_LOGIN_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    case USER_LOGOUT:
      return { data: null };
    default:
      return state;
  }
};
// REGISTER
export const registerReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null, success: true };
    case USER_REGISTER_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
// FORGOT PASSWORD
export const forgotPasswordReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null, success: true };
    case FORGOT_PASSWORD_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
// RESET PASSWORD
export const resetPasswordReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case RESET_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case RESET_PASSWORD_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case RESET_PASSWORD_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
// RESEND VERIFICATION CODE
export const resendCodeReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case RESEND_CODE_REQUEST:
      return { ...state, loading: true };
    case RESEND_CODE_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null, success: true };
    case RESEND_CODE_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
// VERIFY
export const verifyReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case USER_VERIFY_REQUEST:
      return { ...state, loading: true };
    case USER_VERIFY_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case USER_VERIFY_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
// PROFILE DETAILS
export const profileDetailsReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case USER_DETAILS_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { data: [] };
    default:
      return state;
  }
};
// EDIT PROFILE DETAILS
export const editProfileDetailsReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case USER_DETAILS_EDIT_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_EDIT_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case USER_DETAILS_EDIT_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}
// UPDATE PROFILE DETAILS
export const updateProfileDetailsReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case USER_DETAILS_UPDATE_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_UPDATE_SUCCESS:
      return { ...state, data: action.payload, loading: false, success: true, error: null };
    case USER_DETAILS_UPDATE_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
} // to be looked into
// JOIN TOURNAMENT
export const joinTournamentReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case JOIN_TOURNAMENT_REQUEST:
      return { ...state, loading: true };
    case JOIN_TOURNAMENT_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case JOIN_TOURNAMENT_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
// ZIMPSL
export const fetchZimpslReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case ZIMPSL_REQUEST:
      return { ...state, loading: true };
    case ZIMPSL_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case ZIMPSL_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const fetchZimpslGameweeksReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case ZIMPSL_GAMEWEEKS_REQUEST:
      return { ...state, loading: true };
    case ZIMPSL_GAMEWEEKS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case ZIMPSL_GAMEWEEKS_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const fetchZimpslByGameweekReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case ZIMPSL_REQUEST:
      return { ...state, loading: true };
    case ZIMPSL_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case ZIMPSL_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
// ZIMPSL PREDICT
export const zimpslPredictReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case PREDICT_REQUEST:
      return { ...state, loading: true };
    case PREDICT_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case PREDICT_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
// ZIMPSL LEADERBOARD
export const fetchLeaderboadReducer = (state = { playerLeaderboard: [] }, action) => {
  switch(action.type) {
    case ZIMPSL_LEADERBOARD_REQUEST:
      return { ...state, loading: true };
    case ZIMPSL_LEADERBOARD_SUCCESS:
      return { 
        ...state,
        playerLeaderboard: action.payload.playerLeaderboard,
        pages: action.payload.pages,
        page: action.payload.page,
        loading: false,
        error: null
    };
    case ZIMPSL_LEADERBOARD_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
// ZIMPSL TEAM LEADERBOARD
export const fetchTeamLeaderboadReducer = (state = { playerTeamLeaderboard: [] }, action) => {
  switch(action.type) {
    case ZIMPSL_TEAM_LEADERBOARD_REQUEST:
      return { ...state, loading: true };
    case ZIMPSL_TEAM_LEADERBOARD_SUCCESS:
      return { 
        ...state,
        playerTeamLeaderboard: action.payload.playerTeamLeaderboard,
        pages: action.payload.pages,
        page: action.payload.page,
        loading: false,
        error: null
    };
    case ZIMPSL_TEAM_LEADERBOARD_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
// ZIMPSL PLAYER POINTS
export const fetchPlayerPointsReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case ZIMPSL_PLAYER_POINTS_REQUEST:
      return { ...state, loading: true };
    case ZIMPSL_PLAYER_POINTS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null };
    case ZIMPSL_PLAYER_POINTS_FAILURE:
      return {...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
// SEND MAIL 
export const sendMailReducer = (state = { data: [] }, action) => {
  switch(action.type) {
    case SEND_MAIL_REQUEST:
      return { ...state, loading: true };
    case SEND_MAIL_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null, success: true };
    case SEND_MAIL_FAILURE:
      return { ...state, data: null, loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};