import { MoviesActionType } from './movies/movies.actions'

//add more ActionTypes here.

export type ActionType = MoviesActionType

export interface Action<T> {
    type: ActionType
    payload: T
}
