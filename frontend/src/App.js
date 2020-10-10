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

  const user = useSelector(state => state.aboutMe)
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



        <Route exact path="/profile">
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
        </Route>

        <Route exact path="/">
          {user.isMe ? <Redirect to="/profile" /> : <Redirect to="/user/registration" />}
        </Route>

        <Route exact path='/global-chat'>
          <SignIn />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
