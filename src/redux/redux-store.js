import { applyMiddleware, combineReducers, createStore,} from "redux";
import thunk from "redux-thunk";
import moviesReducer from "./movies-reducer";

let reducers = combineReducers({
    moviesPage:moviesReducer
  });

 export  default  createStore(reducers, applyMiddleware(thunk));