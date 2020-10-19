import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import * as ACTION_DEP from "../../redux/actions/depActions";
import { useDispatch } from 'react-redux';


export default function ModalWorker({ handleClose, _id: depID, open, orgID, setAddWorker, setMesFromBack }) {

  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const addWorker = async () => {
    handleClose();
    try {
      if (input.trim()) {
        const data = {
          workerEmail: input.trim(),
        }

        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/department/${depID}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        const result = await response.json();

        if (response.ok) {
          dispatch(ACTION_DEP.WORKER_TO_DEP(orgID, depID, result));

          return setAddWorker(result)
        }
        return setMesFromBack(result.message)

      }
    } catch (err) {
      setMesFromBack(err.message)
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
