import axios from '../../api/api'
import { Dispatch } from 'redux'
import { Movie, setMovie } from './movie.actions'
import { AxiosResponse } from 'axios'
import { setIsFetching } from '../movies/movies.actions'

export const getMovie = (movieId: number) => async (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))

    const response: AxiosResponse<Movie> = await axios.get(`/movie/${movieId}`, {
        params: {
            language: 'en-US',
        },
    })

    const { original_title, overview, vote_average, poster_path, backdrop_path } = response.data
    dispatch(setMovie(original_title, overview, vote_average, poster_path, backdrop_path))
    dispatch(setIsFetching(false))
}
