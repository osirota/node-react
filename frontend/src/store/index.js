import { createStore } from "redux";
import { routerReducer } from 'react-router-redux'
import rootReducer from "../reducers";

const store = createStore(
    routerReducer({ ...rootReducer, routing: routerReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;