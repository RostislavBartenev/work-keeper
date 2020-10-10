import React from 'react';
import './navbar.css';
import {
  useHistory,
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import * as ACTION_TASKS from "../../redux/actions/regAndLog";


const Navbar = () => {

  const aboutMe = useSelector(state => state.aboutMe)
  console.log(aboutMe);
  const dispatch = useDispatch()

  const history = useHistory()

  const handleQuit = () => {
    dispatch(ACTION_TASKS.LOGOUT(aboutMe.isMyName))
    dispatch(ACTION_TASKS.IS_NOT_ME())
    localStorage.clear()
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-nav ml-auto">
          {aboutMe.isMyName
            ? <div className="nav-item ">
              <Link to="/user/registration" className="nav-link" onClick={handleQuit}>Выйти</Link>
            </div>
            : <>
              <div className="nav-item">
                <Link className="nav-link" to="/user/registration">Зарегистрироваться</Link>
              </div>
              <div className="nav-item">
                <Link className="nav-link" to="/user/login">Войти</Link>
              </div>
            </>
          }
          <div className="nav-item">
            <Link className="nav-link" to="/videochat">video</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/global-chat">chat</Link>
          </div>
        </div>


      </nav>
    </>
  )
}
export default Navbar



