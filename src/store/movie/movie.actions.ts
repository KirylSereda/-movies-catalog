import { Action } from '../action'

export enum MovieActionType {
    SET_MOVIE = 'SET_MOVIE',
}

export interface Movie {
    original_title: string
    overview: string
    vote_average: number
    poster_path: string
    backdrop_path: string
}

export const setMovie = (
    original_title: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    backdrop_path: string,
): Action<Movie> => ({
    type: MovieActionType.SET_MOVIE,
    payload: { original_title, overview, vote_average, poster_path, backdrop_path },
})
