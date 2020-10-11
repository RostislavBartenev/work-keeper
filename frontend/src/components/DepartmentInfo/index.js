import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom'
import DepartmentCard from '../DepartmentCard';
import ModalDepart from './ModalWorker';


// ЧЕКНУТЬ ВСЁ
const DepartmentInfo = ({ departmentsArr, organizations }) => {
  console.log('RENDER DepartmentInfo');

  console.log(departmentsArr);
  const { id } = useParams()
  const [dep, setDep] = useState({})
  const history = useHistory()
  const [open, setOpen] = React.useState(false);

  const workersArr = useSelector(state => state.departments[id]) || []
  console.log('depArray', depArray);

  useEffect(() => {

    const findDep = departmentsArr.find(el => el._id === id)
    console.log('FFFFFFFFFF', findDep);
    if (findDep) {
      setDep({ ...findDep })
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
      <div>Страница отдела</div>
      { Object.keys(org).length ?
        <div className="d-flex flex-column align-items-center">
          <h1>
            {org.name}
          </h1>
          <p>Добавьте email сотрудников, работающих в данном отделе </p>


          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            + Добавить сотрудника
          </Button>
          {open && <ModalWorker open={open} handleClose={handleClose} orgID={org._id} />}

          <div>
            {depArray.length
              ? <ul className="org-list ">
                {depArray.map((dep) => {
                  console.log('>>>>>>>>>>', dep);
                  return (
                    <Link to={`/department/${dep._id}`} key={dep._id}>
                      <li className="org-list-task">
                        <DepartmentCard {...dep} />
                      </li>
                    </Link>
                  )
                })}
              </ul>
              : <p>Нет добавленных сотрудников</p>
            }
          </div>


          <button onClick={backHandler} type="button" className="btn btn-primary mt-5">Back</button>

          {/* DEPARTMENTS расписать */}
        </div>
        : null}

    </>
  )
}

export default DepartmentInfo
