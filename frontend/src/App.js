import React, { useEffect } from 'react';
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
import MainPage from './components/MainPage'
import OrganizationInfo from './components/OrganizationInfo';
import DepartmentInfo from "./components/DepartmentInfo";


function App() {

  const aboutMe = useSelector(state => state.aboutMe);
  const user = useSelector(state => state.user)
  const organizations = useSelector(state => state.organizations)



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


        <Route exact path="/organization/:id">
          <OrganizationInfo organizations={organizations} />
        </Route>

        <Route exact path="/department/:id">
          <DepartmentInfo organizations={organizations} />
        </Route>



        <Route exact path='/videochat' component={Room} />


        <PrivateRoute exact path={`/profile/:id`}>
          <Profile />
        </PrivateRoute>

        <Route exact path="/">
          {aboutMe.isMe ? <MainPage /> : <Redirect to="/user/registration" />}
        </Route>

        <Route exact path='/global-chat'>
          <SignIn />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
