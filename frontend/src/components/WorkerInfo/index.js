import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import {Button} from "@material-ui/core";

import './style.scss'


const WorkerInfo = () => {

  const { id } = useParams()
  const [worker, setWorker] = useState({})
  const history = useHistory()

  const workers = useSelector(state => state.department.workers)

  useEffect(() => {
    const thisWorker = workers.find(worker => worker._id === id)
    setWorker(thisWorker);
  }, [])

  const backHandler = () => {
    history.goBack()
  }

  return (
    <div className="worker-container">
      <h1>Информация о сотруднике</h1>
      <hr/>
      { Object.keys(worker).length ?
        <div className='user-info'>
          <h1>
            {worker.name + ' ' + worker.surname}
          </h1>
          <p>Email: {worker.email}</p>
        </div>
        : null}

      <Button className="btn" variant="contained" onClick={backHandler} color="primary">Назад</Button>

    </div>
  )
}

export default WorkerInfo
