import { applyMiddleware, combineReducers, createStore, } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "./movies/movies.reducer";

let reducers = combineReducers({
  moviesPage: moviesReducer
});

type ReducerType = typeof reducers;
export type AppStateType = ReturnType<ReducerType>;

export default createStore(reducers, applyMiddleware(thunk));