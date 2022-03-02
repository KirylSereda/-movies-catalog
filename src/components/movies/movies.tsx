import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Movie as MovieDto} from "../../store/movies/movies.actions"
import { getMovies } from "../../store/movies/movies.thunk"
import { AppState } from "../../store/redux.store"
import Preloader from "../common/preloader"
import Movie from "./movie/movie"
import styles from './movies.module.css'

const Movies = () => {

    const ObjectMovies = useSelector((state: AppState) => state.movies.movies)
    const isFetching = useSelector((state: AppState) => state.movies.isFetching)
       
    return (
        <div className={styles.movies_container}>
            {
            isFetching === false
             ?
            ObjectMovies.map((u:MovieDto) => <Movie movie={u} key={u.imdbID}
            />):<Preloader/>
            }
        </div>
    )
}

export default Movies;

