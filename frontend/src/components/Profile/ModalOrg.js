import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ModalOrg({ open, handleClose }) {
  const [input, setInput] = useState('')

  const addOrg = async () => {
    handleClose();

    const { user: { userID } } = JSON.parse(localStorage.getItem('redux'));
    console.log(userID);

    try {
      const data = {
        nameOrg: input,
        userID
      }

      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/organization`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await response.json();

      //////
      console.log('ПОСЛЕ ДОБАВЛЕНИЯ ОРГ', result);
      //////


      //   if (response.ok) {
      //     dispatch(ACTION_TASKS.REGISTRATION(result));
      //     dispatch(ACTION_TASKS.IS_ME());

      //     setInputs({
      //       name: '',
      //       email: '',
      //       password: ''
      //     });

      //     history.push('/profile')

      //   } else {
      //     setMessage(result.message);
      //   }


    } catch (err) {
      console.log(err);
    }
  }





  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Добавить организацию</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Введите название вашей организации/предприятия:
          </DialogContentText>
        <form>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название"
            type="text"
            fullWidth
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Отмена
          </Button>
        <Button onClick={addOrg} color="primary">
          Добавить
          </Button>
      </DialogActions>
    </Dialog>
  );
}
