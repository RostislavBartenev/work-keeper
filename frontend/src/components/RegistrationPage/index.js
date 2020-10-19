import React from 'react';
import Form from "../assets/Form";

const RegistrationPage = ({ setLoggedIn }) => {


  return (
    <Form title={'Регистрация'} isReg={true} setLoggedIn={setLoggedIn} />
  )
}

export default RegistrationPage
