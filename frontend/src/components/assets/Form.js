import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as ACTION_TASKS from "../../redux/actions/regAndLog";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    fontSize: 20
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Form = ({ title, isReg }) => {
  const classes = useStyles();
  const history = useHistory()

  const formRef = React.useRef();


  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  function handlerAll({ target: { value, name } }) {
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  async function login(event) {
    event.preventDefault();
    console.log(inputs);
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      })
      const result = await response.json();

      //////
      console.log('LOGIN', result);
      //////

      if (response.ok) {
        dispatch(ACTION_TASKS.LOGIN(result));
        dispatch(ACTION_TASKS.IS_ME());

        setInputs({
          email: '',
          password: ''
        });

        history.push('/')

      } else {
        // console.log(result.message);
        setMessage(result.message);
      }


    } catch (err) {
      console.log(err);
    }
  }


  async function registration(event) {
    event.preventDefault();
    console.log(inputs);
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/registration`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      })
      const result = await response.json();

      //////
      console.log('REGISTRATION', result);
      //////


      if (response.ok) {
        dispatch(ACTION_TASKS.REGISTRATION(result));
        dispatch(ACTION_TASKS.IS_ME());

        setInputs({
          name: '',
          email: '',
          password: ''
        });

        history.push('/')

      } else {
        setMessage(result.message);
      }


    } catch (err) {
      console.log(err);
    }
  }



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <form ref={formRef} onSubmit={isReg ? registration : login} className={classes.form} noValidate>
          {isReg &&
            <>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="name"
                label="Имя"
                id="name"
                autoComplete="current-password"
                onChange={handlerAll}
                autoFocus
                required
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="surname"
                label="Фамилия"
                id="surname"
                autoComplete="current-password"
                onChange={handlerAll}
                required
              />
            </>
          }
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            onChange={handlerAll}
            required={true}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlerAll}
            required={true}
          />

          <span style={{ color: "red", fontSize: "small" }}>{message}</span>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => formRef.current.reportValidity()}
          >
            {title}
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Form
