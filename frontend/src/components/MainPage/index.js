import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ACTION_MAIN_PAGE from "../../redux/actions/mainPageActions";
import isCreatorContext from '../contexts/isCreatorContext';


const MainPage = () => {

  const dispatch = useDispatch()
  const { userID } = useSelector(state => state.user)
  const { isCreator } = useContext(isCreatorContext)

  const [dep, setDep] = useState([])
  const [orgName, setOrgName] = useState('')
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/organization/?userID=${userID}`)
        const result = await response.json()
        console.log('INFO_FOR_MAIN_PAGE', result);
        //dispatch(FROM_BACKEND(result))


        if (response.ok) {
          // НУЖНА ЛОГИКА 

          const { departments, organization, isCreator, ...userInfo } = result;
          console.log(userInfo);


          if (departments.length) {
            const { orgID, name: orgName } = departments[0].organization
            dispatch(ACTION_MAIN_PAGE.MAIN_DEPARTMENTS(orgID, departments))

            setDep(departments);
            setOrgName(orgName)
          }
          setUserInfo(userInfo)
          dispatch(ACTION_MAIN_PAGE.MAIN_IS_CREATOR(isCreator))
          dispatch(ACTION_MAIN_PAGE.MAIN_USER(userInfo))
          dispatch(ACTION_MAIN_PAGE.MAIN_ORGANIZATIONS(organization))
        }


      } catch (err) {
        // логику с setMessageBack как в ModalWorker COMPONENT
        console.log(err);
      }
    })();
  }, [])


  return (
    <>
      <h1>Главная страница</h1>

      {isCreator
        ?
        <>
          <p>Ваши организации:</p>
          <div>
            {/* ОТОБРАЖЕНИЕ ОРГАНИЗАЦИЙ/ДЕПАРТАМЕНТОВ С СЕРВЕРНЫХ ДАННЫХ (не из редакс!) 
                >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                */}
            {/* {arrTask.length ? <ul className="todo-list list-group">
          {arrTask.map((task) => {
            return (
              <li key={task.id} className="todo-list-task list-group-item">
                <Organization {...task} />
              </li>

            )
          })}
        </ul> : <p>Нет добавленных организаций</p>
        } */}
          </div>
        </>

        :

        <>
          {
            dep.length
              ?
              <>
                <p> Уважаемый {userInfo.name + ' ' + userInfo.surname}, Вы являетесь сотрудником организации: {orgName}</p>
                {/* ОТОБРАЖЕНИЕ ДЕПАРТМЕНТОВ С СЕРВЕРНЫХ ДАННЫХ (не из редакс!) 
                >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                */}
              </>
              : <p> Уважаемый {userInfo.name + ' ' + userInfo.surname}, подождите, пока Вас добавят в список сотрудников на сайте </p>
          }
        </>
      }
    </>
  )
}

export default MainPage
