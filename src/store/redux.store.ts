import { applyMiddleware, combineReducers, createStore, } from "redux"
import thunk from "redux-thunk"
import moviesReducer, { MoviesState } from "./movies/movies.reducer"

let reducers = combineReducers({
  movies: moviesReducer
})

export interface AppState {
  movies: MoviesState;
}

export default createStore(reducers, applyMiddleware(thunk))