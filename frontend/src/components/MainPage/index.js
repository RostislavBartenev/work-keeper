import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


import './style.scss'
import Loader from '../Loader';

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

const MainPage = () => {

  const classes = useStyles();

  const userInfo = useSelector(state => state.user)
  const isCreator = useSelector(state => state.aboutMe.isCreator)
  const orgArray = useSelector(state => state.organizations)
  const dep = useSelector(state => state.workerDeps)

  const isLoading = useSelector(state => state.loading)

  return (
    <div className="main-page">
      <h1>Главная</h1>

      <hr />

      {isLoading ? <Loader /> :
        <>
          {isCreator
            ?
            <>
              <p>Для добавления организаций перейдите в <Link style={{fontSize: 'inherit', textDecoration: 'underline'}} to={`/profile/${userInfo.userID}`}>личный кабинет</Link> </p>
              <hr />
              <p>Ваши организации:</p>

              <div className="profile__page">
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

            </>

            :

            <>
              {
                dep.length
                  ?
                  <div className="profile__page">
                    {dep.map((dep) => {
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
                  </div>
                  : <p> Уважаемый {userInfo.name + ' ' + userInfo.surname}, подождите, пока Вас добавят в список сотрудников на сайте </p>
              }
            </>
          }
        </>
      }


    </div>

  )
}

export default MainPage
