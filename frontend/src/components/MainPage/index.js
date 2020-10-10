import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const MainPage = () => {

  const { userID } = useSelector(state => state.user)


  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/organization/?userID=${userID}`)
        const result = await response.json()
        console.log('INFO_FOR_MAIN_PAGE', result);
        //dispatch(FROM_BACKEND(result))
      } catch (err) {
        console.log(err);
      }
    })();
  }, [])


  return (
    <>
      <h1>Главная страница</h1>
      <p>Ваши организации:</p>
      <div>
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
  )
}

export default MainPage
