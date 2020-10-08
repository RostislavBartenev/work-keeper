import { createStore } from "redux";
import initialState from "./initialState"
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const enhancer = composeWithDevTools()
// const enhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(rootReducer, initialState(), enhancer)


store.subscribe(() => {
  localStorage.setItem('redux', JSON.stringify(store.getState()))
})

export default store
