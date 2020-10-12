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
  const [orgID, setOrgID] = useState('')
  const history = useHistory()
  const [open, setOpen] = React.useState(false);

  const departments = useSelector(state => state.departments)

  const workersArr = useSelector(state => state.department.workers) || []
  // console.log('workersArr', workersArr);



  useEffect(() => {

    const { _id: orgID } = organizations.find(el => el.departments.find(element => element === id));
    if (orgID) {
      setDep(departments[orgID].find(el => el._id = id));
      setOrgID(orgID)
    };
  }, [])

  useEffect(() => {
    dispatch(ACTION_DEP_ACTUAL.DEP_ACTUAL(dep));

  }, [dep])



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
          {open && <ModalWorker open={open} handleClose={handleClose} {...dep} orgID={orgID} />}

          <div>
            <WorkersList workersArr={workersArr} />
          </div>


          <button onClick={backHandler} type="button" className="btn btn-primary mt-5">Back</button>

        </div>
        : null}

    </>
  )
}

export default DepartmentInfo
