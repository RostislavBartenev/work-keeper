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
import LeftMenu from './components/Navbar/Navbar';
import MainPage from './components/MainPage'
import OrganizationInfo from './components/OrganizationInfo';
import DepartmentInfo from "./components/DepartmentInfo";
import WorkerInfo from './components/WorkerInfo'
import IsCreatorContext from './components/contexts/isCreatorContext'

function App() {

  const aboutMe = useSelector(state => state.aboutMe);
  const user = useSelector(state => state.user)
  const organizations = useSelector(state => state.organizations)



  console.log(aboutMe.isCreator, 'ISCREATOR');

  return (
    <div className="App">

      <IsCreatorContext.Provider value={aboutMe.isCreator}>

        <LeftMenu >

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

            <Route exact path="/worker/:id">
              <WorkerInfo organizations={organizations} />
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
        </LeftMenu>


      </IsCreatorContext.Provider>
    </div>
  );
}

export default App;
