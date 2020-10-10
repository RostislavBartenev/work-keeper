import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const OrganizationInfo = ({ organizations }) => {

  console.log(organizations);
  const { id } = useParams()
  const [org, setOrg] = useState({})
  const history = useHistory()


  useEffect(() => {

    const findOrg = organizations.find(el => el._id === id)
    console.log('FFFFFFFFFF', findOrg);
    if (findOrg) {
      setOrg({ name: findOrg.name, departments: findOrg.departments })
    }

  }, [])

  const backHandler = () => {
    history.goBack()
  }

  return (
    <>
      <div>Организация</div>
      { Object.keys(org).length ?
        <div className="d-flex flex-column align-items-center">
          <h1>
            {org.name}
          </h1>
          <button onClick={backHandler} type="button" className="btn btn-primary">Back</button>

          {/* DEPARTMENTS расписать */}
        </div>
        : null}

    </>
  )
}

export default OrganizationInfo
