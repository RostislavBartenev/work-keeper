import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



const WorkersList = ({ workersArr = [] }) => {

  const classes = useStyles();

  return (
    <>
      {workersArr.length
        ?
        <>
          {workersArr.map((worker) => {
            return (
            <Card key={worker._id} className={classes.root}>
              <div className={classes.details}>
                <CardContent style={{marginTop: 35}} className={classes.content}>
                  <Typography variant="h5" component="h2">
                    {worker.name}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {worker.surname}
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <Link to={`/worker/${worker._id}`}>
                    <Button className="btn" style={{padding: '5px 10px'}} size="small">Подробнее</Button>
                  </Link>
                </div>
              </div>
            </Card>

            )
          })}
        </> : null
      }

    </>
  )
}

export default WorkersList
