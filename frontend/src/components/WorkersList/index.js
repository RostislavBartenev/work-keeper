import React from 'react'
import { Link } from 'react-router-dom'
import WorkerInfo from '../WorkerInfo';


const WorkersList = ({ workersArr = [], mesFromBack }) => {

  console.log('WorkersList_workersArr', workersArr);
  return (
    <>
      <div>Salam WorkersList</div>
      <hr />
      {workersArr.length
        ?
        <ul className="worker-list list-group">
          {workersArr.map((worker) => {
            console.log('РаботникID', worker._id);
            return (
              <Link to={`/worker/${worker._id}`} key={worker._id}>
                <li className="worker-list-task list-group-item">
                  {worker.name + ' ' + worker.surname}
                </li>
              </Link>
            )
          })}
        </ul>
        :
        <>
          <p>Нет добавленных сотрудников</p>
          {mesFromBack &&
            <p style={{ color: "red", fontSize: "small" }}>{mesFromBack}</p>}
        </>
      }

    </>
  )
}

export default WorkersList
