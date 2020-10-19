import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import ModalWorker from "./ModalWorker";
import * as ACTION_DEP_ACTUAL from "../../redux/actions/depActualActions";

import WorkersList from '../WorkersList';
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

import './style.scss'

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

const DepartmentInfo = () => {

  const classes = useStyles();

  const isCreator = useSelector(state => state.aboutMe.isCreator)
  const organizations = useSelector(state => state.organizations)


import WorkersList from '../WorkersList';


  const { id } = useParams()
  const dispatch = useDispatch()

  const [dep, setDep] = useState({})


  const [addWorker, setAddWorker] = useState({})

  const [orgID, setOrgID] = useState('')
  const history = useHistory()
  const [open, setOpen] = useState(false);
  const [mesFromBack, setMesFromBack] = useState('');

  const departments = useSelector(state => state.departments)

  const workersArr = useSelector(state => state.department.workers)

  useEffect(() => {

    const { _id: orgID } = organizations.find(el => el.departments.find(element => element._id === id));
    if (orgID) {
      const foundDep = departments[orgID].find(el => el._id === id) // ТУТ БЫЛО ПРИСВОЕНИЕ, а не сравнение СУКА, и всё ломалось
      setDep(foundDep);
      setOrgID(orgID)
      dispatch(ACTION_DEP_ACTUAL.DEP_ACTUAL(foundDep));
    }

  }, [addWorker])

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
    <div className="department-container">
      { Object.keys(dep).length ?
        <>
          <h1>
            {dep.name}
          </h1>
          <hr/>
          <div className="workers-container">
            {isCreator ?
              <>
                <Card className={classes.root}>
                  <div className={classes.details}>
                    <div className={classes.controls}>
                      <IconButton onClick={handleClickOpen}  aria-label="play/pause">
                        <AddIcon className={classes.playIcon} />
                      </IconButton>
                    </div>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        Добавить сотрудника
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
                {mesFromBack &&
                <span style={{ color: "red !important", fontSize: "small" }}>{' ' + mesFromBack}</span>}

                {open && <ModalWorker open={open} handleClose={handleClose} {...dep} orgID={orgID} setAddWorker={setAddWorker} setMesFromBack={setMesFromBack} />}
              </>
              : null}

            <WorkersList workersArr={workersArr} mesFromBack={mesFromBack} />
          </div>

          </>

        : null}
      <Button className="btn" variant="contained" onClick={backHandler} color="primary">Назад</Button>
    </div>
  )
}

export default DepartmentInfo
