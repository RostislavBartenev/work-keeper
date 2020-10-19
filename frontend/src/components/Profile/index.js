import React, { useState } from 'react';
import ModalOrg from './ModalOrg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DepartmentCard from "../DepartmentCard";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

import './style.scss'
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  root: {
    width: 250,
    height: 250,
    alignItems: 'center',
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    marginTop: 20,
  },
  controls: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    height: 50,
    width: 50,
  },
});



const Profile = () => {

  const classes = useStyles();

  const isCreator = useSelector(state => state.aboutMe.isCreator)

  const orgArray = useSelector(state => state.organizations)
  const [open, setOpen] = useState(false);
  const depsObj = useSelector(state => state.departments)
  const userInfo = useSelector(state => state.user)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {isCreator || orgArray.map(el => el.creator === userInfo.userID)[0]
        ?
          <div className="profile-page">
            <h1>Личный кабинет</h1>
            <hr/>

          <div className="profile-container">
            <Card className={classes.root}>
              <div className={classes.details}>
                <div className={classes.controls}>
                  <IconButton onClick={handleClickOpen}  aria-label="play/pause">
                    <AddIcon className={classes.playIcon} />
                  </IconButton>
                </div>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Добавить организацию
                  </Typography>
                </CardContent>
              </div>
            </Card>

            {open && <ModalOrg open={open} handleClose={handleClose} />}

            {orgArray.length ?
              <>
                {orgArray.map((org) => {
                  return (
                    <Link to={`/organization/${org._id}`} key={org._id}>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="180"
                            image="https://static.tildacdn.com/tild3639-3835-4237-b964-623565623163/MoscowCityofficerentals.png"
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography style={{marginTop: 10}} gutterBottom variant="h5" component="h2">
                              {org.name}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                  )
                })}
              </>
              : <p>Нет добавленных организаций</p>
            }
          </div>

          </div>
        :

        <>
          {
            Object.keys(depsObj).length && orgArray.map(el => el.creator !== userInfo.userID) ?
              <>
                <div className="profile-page">
                <h1>Мои отделы</h1>
                  <hr/>
                  <div className="profile-container">
                  {Object.values(depsObj).map(el => el.map((dep) => {
                    return (
                      <Link to={`/department/${dep._id}`} key={dep._id}>
                        <Card className={classes.root}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              alt="Contemplative Reptile"
                              height="170"
                              image="https://cdnb.artstation.com/p/assets/images/images/001/973/811/large/leva-tuskliy-4.jpg?1455395165"
                              title="Contemplative Reptile"
                            />
                            <CardContent>
                              <Typography style={{marginTop: 10}} gutterBottom variant="h6" component="h6">
                                {dep.name}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Link>
                    )
                  }))}
                  </div>
                </div>
              </>
              : <p> Уважаемый {userInfo.name + ' ' + userInfo.surname}, подождите, пока Вас добавят в список сотрудников на сайте </p>
          }
        </>
      }
    </>
  )
}

export default Profile;
