import React from 'react';
import './App.css';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage/LoginPage';
import PrivateRoute from './components/Private/Private';


import { Route, Switch, Redirect } from 'react-router-dom'
import SignIn from "./components/SignIn";
import Room from "./components/Room/Room";

import { useSelector } from 'react-redux';
import Profile from './components/Profile';
import Navbar from './components/Navbar';


function App() {

  const aboutMe = useSelector(state => state.aboutMe);
  const user = useSelector(state => state.user)

  console.log(user);

  return (
    <div className="App">


      <Navbar />


      <Switch>


        <Route exact path="/user/registration">
          <RegistrationPage />
        </Route>

        <Route exact path="/user/login">
          <LoginPage />
        </Route>



        <Route exact path='/videochat' component={Room} />


        {/* <Route exact path={`/profile/:${user.userID}`}> */}
        <PrivateRoute exact path={`/profile/:id`}>
          <Profile />
        </PrivateRoute>
        {/* </Route> */}

        <Route exact path="/">
          {aboutMe.isMe ? <Redirect to={`/profile/${user.userID}`} /> : <Redirect to="/user/registration" />}
        </Route>


        {/* РУЧКА ДЛЯ ЧАТА  */}
        <Route exact path='/signin'>
          <SignIn />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
