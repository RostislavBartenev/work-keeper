import React, { useState } from 'react';
import ModalOrg from './ModalOrg';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';

const Profile = () => {

  const { id } = useParams()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="profile__page">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        + Добавить организацию
      </Button>
      {open && <ModalOrg open={open} handleClose={handleClose} />}

    </div>

  );
}

export default Profile;
