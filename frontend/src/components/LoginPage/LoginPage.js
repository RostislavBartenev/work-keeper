import React from 'react'
import Form from '../assets/Form'


function LoginPage({ setLoggedIn }) {

  return (
    <Form title={'Войти'} setLoggedIn={setLoggedIn} />
  );
}

export default LoginPage
