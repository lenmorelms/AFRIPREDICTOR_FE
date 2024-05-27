import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ZimpslScreen from './screens/ZimpslScreen';
import ZimpslGameweekScreen from './screens/ZimpslGameweekScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import PrivateRouter from './PrivateRouter';
import TournamentsScreen from './screens/TournamentsScreen';
import JoinZimpslScreen from './screens/JoinZimpslScreen';
import SampleScreen from './screens/SampleScreen';
import TeamLeaderboardScreen from './screens/TeamLeaderboardScreen';
import VerifyScreen from './screens/VerifyScreen';
// import RefreshOnBack from './RefreshOnBack';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import TermsScreen from './screens/TermsScreen';
import HelpScreen from './screens/HelpScreen';
import PrivacyScreen from './screens/PrivacyScreen';
import HowITWorksScreen from './screens/HowITWorksScreen';
import ContactScreen from './screens/ContactScreen';
import LearnScreen from './screens/LearnScreen';
import UclfinalScreen from './screens/UclfinalScreen';
import UclfinalLeaderboardScreen from './screens/UclfinalLeaderboardScreen';

function App() {
  return (
    <Router>
      {/* <RefreshOnBack key="home"/> <HomeScreen /> */}
      <Routes>
        <Route exact path='/' element={<HomeScreen />} />
        <Route exact path='/sample' element={<SampleScreen />} />
        <Route exact path='/login' element={<LoginScreen />} />
        <Route exact path='/register' element={<RegisterScreen />} />
        <Route exact path='/forgot-password' element={<ForgotPasswordScreen />} />
        <Route exact path='/reset-password/:token' element={<ResetPasswordScreen />} />
        <Route exact path='/verify/:token' element={<VerifyScreen />} />
        <Route exact path='/terms-of-use' element={<TermsScreen />} />
        <Route exact path='/help' element={<HelpScreen />} />
        <Route exact path='/privacy-policy' element={<PrivacyScreen />} />
        <Route exact path='/contact' element={<ContactScreen />} />
        <Route exact path='/how-it-works' element={<HowITWorksScreen />} />
        <Route exact path='/learn' element={<LearnScreen />} />
        <Route exact path='/profile/:id' element={
        <PrivateRouter> <ProfileScreen /> </PrivateRouter>
        } />
        <Route exact path='/tournaments' element={
        <PrivateRouter> <TournamentsScreen /> </PrivateRouter>
        } />
        <Route exact path='/join/zimpsl' element={
        <PrivateRouter> <JoinZimpslScreen /> </PrivateRouter>
        } />
        <Route exact path='/zimpsl' element={
        <PrivateRouter> <ZimpslScreen /> </PrivateRouter>
        } />
        <Route exact path='/uclfinal' element={
        <PrivateRouter> <UclfinalScreen /> </PrivateRouter>
        } />
        <Route exact path='/uclfinal/leaderboard' element={
        <PrivateRouter> <UclfinalLeaderboardScreen /> </PrivateRouter>
        } />
        <Route exact path='/zimpsl/:gameweek' element={
        <PrivateRouter> <ZimpslGameweekScreen /> </PrivateRouter>
        } />
        <Route exact path='/zimpsl/leaderboard' element={
        <PrivateRouter> <LeaderboardScreen /> </PrivateRouter>
        } />
        <Route exact path="zimpsl/leaderboard/page/:pagenumber" element={
        <PrivateRouter> <LeaderboardScreen /> </PrivateRouter>
        } />
        <Route exact path='/zimpsl/leaderboard/:team' element={
        <PrivateRouter> <TeamLeaderboardScreen /> </PrivateRouter>
        } />
        <Route exact path='/zimpsl/leaderboard/:team/page/:pagenumber' element={
        <PrivateRouter> <TeamLeaderboardScreen /> </PrivateRouter>
        } />
      </Routes>
   </Router>
  );
}

export default App;
