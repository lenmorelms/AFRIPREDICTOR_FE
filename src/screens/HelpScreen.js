// src/screens/HomeScreen.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HelpScreen = () => {

  return (
    <>
    <Header />
    <div className='homepage-hero'>
      <h1>TERMS OF USE</h1>
    </div>
    <div className='terms-of-use'>
        <div className='container col-8 pt-5'>
        <h3 className='red' style={{textAlign: "center", paddingBottom: "5px"}}>
            Afripredictor Help Center
        </h3>
        <p>
            At Afripredictor, we're committed to ensuring your experience on our platform is seamless and enjoyable. 
            Our Help Center is here to assist you with any questions or issues you may encounter. 
            Below are some common topics to guide you through login, signup, tournaments, and how to play.
        </p>
        <b>Login</b><br /><br />
        <ul>
            <li>
                <b>Forgot Password:</b> If you've forgotten your password, simply click on the "Forgot Password" link on the login page and follow the instructions to reset it.
            </li>
            <li>
                <b>Account Locked:</b> If your account is locked, please contact our support team for assistance. We'll help you regain access to your account promptly.
            </li>
        </ul>

        <b>Signup</b><br /><br />
        <ul>
            <li>
                <b>Email Verification:</b> After signing up, you'll receive a verification email. If you haven't received it, please check your spam folder. If you still can't find it, contact us for further assistance.
            </li>
            <li>
                <b>Account Activation:</b> Make sure to complete the account activation process by following the link provided in the verification email. This step is crucial to accessing all features of <i>Afripredictor</i>.
            </li>
        </ul>

        <b>Tournaments</b><br /><br />
        <ul>
            <li>
                <b>Joining Tournaments:</b> Explore our range of tournaments and join those that interest you. Simply navigate to the Tournaments section, select the tournament you wish to join, and follow the prompts to participate.
            </li>
            <li>
                <b>Creating Tournaments:</b> Want to create your own tournament? Contact our support team for assistance in setting up a custom tournament tailored to your preferences.
            </li>
        </ul>

        <b>How To Play</b><br /><br />
        <ul>
            <li>
                <b>Predicting Matches:</b> To play, simply navigate to the upcoming matches, select the match you want to predict, and enter your score or outcome prediction. Earn points based on the accuracy of your predictions and climb up the leaderboard.
            </li>
            <li>
                <b>Scoring:</b> Points are awarded based on the accuracy of your predictions. The more accurate your prediction, the more points you earn. Keep track of your score on the leaderboard and compete with friends for bragging rights.
            </li>
        </ul>

        <p>
            For further assistance or inquiries, don't hesitate to reach out to our support team. 
            We're here to help you make the most out of your Afripredictor experience!
        </p>
        </div>
    </div>

    <Footer />
    </>
  );
};

export default HelpScreen;