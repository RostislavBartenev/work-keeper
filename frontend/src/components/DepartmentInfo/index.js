import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom'
import ModalWorker from "./ModalWorker";
import * as ACTION_DEP_ACTUAL from "../../redux/actions/depActualActions";

import WorkersList from '../WorkersList';

// ЧЕКНУТЬ ВСЁ
const DepartmentInfo = ({ organizations }) => {
  console.log('RENDER DepartmentInfo');

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
  console.log('workersArr', workersArr);



  useEffect(() => {

    const { _id: orgID } = organizations.find(el => el.departments.find(element => element === id));
    if (orgID) {
      const foundDep = departments[orgID].find(el => el._id = id)
      setDep(foundDep);
      setOrgID(orgID)
      dispatch(ACTION_DEP_ACTUAL.DEP_ACTUAL(foundDep));
    };
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
    <>
      <div>Страница отдела</div>
      { Object.keys(dep).length ?
        <div className="d-flex flex-column align-items-center">
          <h1>
            {dep.name}
          </h1>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            + Добавить сотрудника
          </Button>
          {mesFromBack &&
            <span style={{ color: "red", fontSize: "small" }}>{' ' + mesFromBack}</span>}

          {open && <ModalWorker open={open} handleClose={handleClose} {...dep} orgID={orgID} setAddWorker={setAddWorker} setMesFromBack={setMesFromBack} />}

          <div>
            <WorkersList workersArr={workersArr} mesFromBack={mesFromBack} />
          </div>

          <button onClick={backHandler} type="button" className="btn btn-primary mt-5">Back</button>

        </div>
        : null}

    </>
  )
}

export default DepartmentInfo
