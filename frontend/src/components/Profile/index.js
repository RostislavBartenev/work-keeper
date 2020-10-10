import React, { useState } from 'react';
import ModalOrg from './ModalOrg';
import Button from '@material-ui/core/Button';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OrganizationCard from '../OrganizationCard';

const Profile = () => {

  console.log('RENDER profile');
  // const { id } = useParams()

  const orgArray = useSelector(state => state.organizations)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="profile__page">
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          + Добавить организацию
        </Button>
        {open && <ModalOrg open={open} handleClose={handleClose} />}
      </div>

      <div>
        {orgArray.length ? <ul className="org-list ">
          {orgArray.map((org) => {
            return (
              <Link to={`/organization/${org._id}`} key={org._id}>
                <li className="org-list-task">
                  <OrganizationCard {...org} />
                </li>
              </Link>
            )
          })}
        </ul> : <p>Нет добавленных организаций</p>
        }
      </div>


    </>
  );
}

export default Profile;
