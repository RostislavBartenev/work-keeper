import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'


const WorkerInfo = () => {
  console.log('RENDER WorkerInfo');

  const { id } = useParams()

  const [worker, setWorker] = useState({})
  const history = useHistory()

  const workers = useSelector(state => state.department.workers)

  // console.log('workersArr', workersArr);



  useEffect(() => {

    const thisWorker = workers.find(worker => worker._id === id)
    setWorker(thisWorker);
  }, [])





  const backHandler = () => {
    history.goBack()
  }




  return (
    <>
      <div>Страница отдела</div>
      { Object.keys(worker).length ?
        <div className="d-flex flex-column align-items-center">
          <h1>
            {worker.name + ' ' + worker.surname}
          </h1>
          <p>Email: {worker.email}</p>

          <button onClick={backHandler} type="button" className="btn btn-primary mt-5">Back</button>

        </div>
        : null}

    </>
  )
}

export default WorkerInfo
