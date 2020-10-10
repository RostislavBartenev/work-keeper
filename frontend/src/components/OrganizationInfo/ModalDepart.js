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


export default function ModalDepart({ open, handleClose, orgID }) {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const addOrg = async () => {
    handleClose();

    const { user: { userID } } = JSON.parse(localStorage.getItem('redux'));
    console.log(userID);

    try {
      const data = {
        nameDepart: input,
        userID,
        orgID: orgID
      }

      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/department`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await response.json();



      //////
      console.log('ПОСЛЕ ДОБАВЛЕНИЯ ДЕПАРТМЕНТА', result);
      //////


      if (response.ok) {
        dispatch(ACTION_DEP.DEP_ADD_DEP(orgID, result));
        dispatch(ACTION_ORG.DEP_TO_ORG(orgID, result._id));
      }


    } catch (err) {
      console.log(err);
    }
  }





  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Добавить отдел</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Введите название отдела/подразделения:
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
