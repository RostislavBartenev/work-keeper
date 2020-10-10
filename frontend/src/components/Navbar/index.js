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
  const { userID, name, surname } = useSelector(state => state.user)
  console.log(name, surname);

  console.log(aboutMe);
  const dispatch = useDispatch()

  const history = useHistory()

  const handleQuit = () => {
    dispatch(ACTION_TASKS.LOGOUT())
    dispatch(ACTION_TASKS.IS_NOT_ME())
    localStorage.clear()
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-nav ml-auto">
          {aboutMe.isMe
            ? <>
              <span>{surname + ' ' + name}</span>

              <div className="nav-item ">
                <Link to={'/'} className="nav-link">Главная</Link>
              </div>

              <div className="nav-item ">
                <Link to={`/profile/${userID}`} className="nav-link">Личный кабинет</Link>
              </div>
              <div className="nav-item ">
                <Link to="/user/registration" className="nav-link" onClick={handleQuit}>Выйти</Link>
              </div>
            </>
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
            <Link className="nav-link" to="/signin">chat</Link>
          </div>
        </div>


      </nav>
    </>
  )
}
export default Navbar



