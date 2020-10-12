import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as ACTION_DEP from "../../redux/actions/depActions";
import * as ACTION_ORG from "../../redux/actions/orgActions";
import { useDispatch } from 'react-redux';


export default function ModalWorker({ handleClose, _id: depID, open, orgID }) {

  console.log(depID)

  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const addWorker = async () => {
    handleClose();
    try {
      const data = {
        workerEmail: input,
      }

      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/department/${depID}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await response.json();



      //////
      console.log('ПОСЛЕ ДОБАВЛЕНИЯ WORKER-a', result);
      //////


      if (response.ok) {
        // НУЖНА ЛОГИКА 
        // dispatch(ACTION_DEP.DEP_ADD_DEP(depID, result));
        // dispatch(ACTION_ORG.DEP_TO_ORG(depID, result._id));
      }


    } catch (err) {
      console.log(err);
    }
  }





  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Добавьте email сотрудника</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            margin="dense"
            id="name"
            label="Email"
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
        <Button onClick={addWorker} color="primary">
          Добавить
          </Button>
      </DialogActions>
    </Dialog>
  );
}
