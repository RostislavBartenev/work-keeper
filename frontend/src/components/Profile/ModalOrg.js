import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as ACTION_ORG from "../../redux/actions/orgActions";
import * as ACTION_DEP from "../../redux/actions/depActions";
import { useDispatch } from 'react-redux';


export default function ModalOrg({ open, handleClose }) {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const addOrg = async () => {
    handleClose();

    const { user: { userID } } = JSON.parse(localStorage.getItem('redux'));

    try {
      if (input.trim()) {

        const data = {
          nameOrg: input.trim(),
          userID
        }

        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/organization`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        const result = await response.json();

        if (response.ok) {
          dispatch(ACTION_ORG.ORG_ADD_ORG(result));
          dispatch(ACTION_DEP.ORG_KEY_IN_DEP(result._id));
        }

      }
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
            margin="dense"
            id="name"
            label="Название"
            type="text"
            fullWidth
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          // onKeyDown={(e) => something(e)}
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
