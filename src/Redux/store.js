// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Use Redux Thunk for async actions
// import { composeWithDevTools } from 'redux-devtools-extension'; // Optional: DevTools extension
import { editProfileDetailsReducer, fetchLeaderboadReducer, fetchPlayerPointsReducer, fetchTeamLeaderboadReducer, fetchZimpslByGameweekReducer, fetchZimpslGameweeksReducer, fetchZimpslReducer, forgotPasswordReducer, joinTournamentReducer, loginReducer, profileDetailsReducer, registerReducer, resendCodeReducer, resetPasswordReducer, sampleReducer, sendMailReducer, updateProfileDetailsReducer, verifyReducer, zimpslPredictReducer } from './Reducers'; // Example reducer

const rootReducer = combineReducers({
  sample: sampleReducer, // Add more reducers as needed
  _login: loginReducer,
  _register: registerReducer,
  _forgotPassword: forgotPasswordReducer,
  _resetPassword: resetPasswordReducer,
  _resendCode: resendCodeReducer,
  _verify: verifyReducer,
  _profileDetails: profileDetailsReducer,
  _profileEditDetails: editProfileDetailsReducer,
  _profileUpdateDetails: updateProfileDetailsReducer,
  _joinTournament: joinTournamentReducer,
  _fetchZimpsl: fetchZimpslReducer,
  _fetchZimpslGameweeks: fetchZimpslGameweeksReducer,
  _fetchZimpslByGameweek: fetchZimpslByGameweekReducer,
  _zimpslPredict: zimpslPredictReducer,
  _fetchLeaderboard: fetchLeaderboadReducer,
  _fetchTeamLeaderboard: fetchTeamLeaderboadReducer,
  _fetchPlayerPoints: fetchPlayerPointsReducer,
  _sendMail: sendMailReducer,
});

const middleware = [thunk]; // Add any other middleware here

const store = createStore(
  rootReducer,
//   composeWithDevTools(
    applyMiddleware(...middleware)
    // )
);

export default store;