import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom'
import ModalDepart from './ModalDepart';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

import './style.scss'
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
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
}));

const OrganizationInfo = ({ }) => {

  const classes = useStyles();

  const isCreator = useSelector(state => state.aboutMe.isCreator)
  const organizations = useSelector(state => state.organizations)


  const { id } = useParams()
  const [org, setOrg] = useState({})
  const history = useHistory()
  const [open, setOpen] = React.useState(false);

  const depArray = useSelector(state => state.departments[id]) || []

  useEffect(() => {

    const findOrg = organizations.find(el => el._id === id)
    if (findOrg) {
      setOrg({ ...findOrg })
    }

  }, [])

  const backHandler = () => {
    history.goBack()
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

      {
        isCreator ?
          <div className="org-container">
            { Object.keys(org).length ?
              <>
                <h1>
                  {org.name}
                </h1>
                <hr/>
                <div className="dep-container">
                  <Card className={classes.root}>
                    <div className={classes.details}>
                      <div className={classes.controls}>
                        <IconButton onClick={handleClickOpen}  aria-label="play/pause">
                          <AddIcon className={classes.playIcon} />
                        </IconButton>
                      </div>
                      <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                          Добавить отдел
                        </Typography>
                      </CardContent>
                    </div>
                  </Card>

                  {open && <ModalDepart open={open} handleClose={handleClose} orgID={org._id} />}

                  {depArray.length ?
                    <>
                      {depArray.map((dep) => {
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
                      })}
                    </>
                    : null
                  }
                </div>

                <Button className="btn" variant="contained" onClick={backHandler} color="primary">Назад</Button>

              </>
              : null}

          </div>
          : 'Вы как сюда попали?'
      }


    </>
  )
}

export default OrganizationInfo
