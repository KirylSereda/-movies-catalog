import createReducer from "../createReducer"
import { Action } from "../action";
import { MovieIterface, MoviesActionType, MoviesResponse } from "./movies-actions";

export interface MoviesState {
  movies: MovieIterface[];
  currentPage: number;
  chunk: number; // Count of movies on the page.
  totalCount: number;
  isFetching: boolean
}

const initialState: MoviesState = {
  movies: [],
  currentPage: 1,
  chunk: 10,
  totalCount: 115,
  isFetching: true
};

export default createReducer(initialState, {
  [MoviesActionType.SET_CURRENT_PAGE](state: MoviesState, action: Action<number>) {
    return { ...state, currentPage: action.payload };
  },
  [MoviesActionType.SET_LIST_OF_MOVIES](state: MoviesState, action: Action<MoviesResponse>) {
    const { movies, totalCount } = action.payload;
    return { ...state, movies, totalCount,isfetching:false }
  },
      [MoviesActionType.SET_IS_FETCHING](state: MoviesState, action: Action<boolean>) {
      return { ...state, isFetching: action.payload };
    }
  });
