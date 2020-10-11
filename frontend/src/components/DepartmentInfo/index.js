import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom'
import DepartmentCard from '../DepartmentCard';
import ModalDepart from './ModalWorker';
import ModalWorker from "./ModalWorker";


// ЧЕКНУТЬ ВСЁ
const DepartmentInfo = ({ organizations }) => {
  console.log('RENDER DepartmentInfo');

  const departments = useSelector(state => state.departments)

  const { id } = useParams()

  const [dep, setDep] = useState({})
  const history = useHistory()
  const [open, setOpen] = React.useState(false);

  const workersArr = useSelector(state => state.departments[id]) || []
  console.log('depArray', workersArr);

  useEffect(() => {

    const { _id: orgID } = organizations.find(el => el.departments.find(element => element === id))

    if (orgID) setDep(departments[orgID].find(el => el._id = id))

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

  console.log(dep)

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
          {open && <ModalWorker open={open} handleClose={handleClose} {...dep} />}

          <div>
            {dep.length
              ? <ul className="org-list ">
                {dep.map((dep) => {
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
