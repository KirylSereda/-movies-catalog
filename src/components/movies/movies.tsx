import { useSelector } from "react-redux"
import { Movie as MovieDto} from "../../store/movies/movies.actions"
import { AppState } from "../../store/redux.store"
import Preloader from "../common/preloader"
import Movie from "./movie/movie"
import styles from './movies.module.css'

const Movies = () => {

    const ObjectMovies = useSelector((state: AppState) => state.movies.movies)
    const isFetching = useSelector((state: AppState) => state.movies.isFetching)
    const totalCount = useSelector((state: AppState) => state.movies.totalCount)
    const searchValue = useSelector((state: AppState) => state.movies.searchValue)
    
    return (<div className={styles.moviesContainer}>
        <div className={styles.seachRezult}>You searched for: {searchValue}, {totalCount} result found  </div>
        <div >
            {
            isFetching === false
             ?
            ObjectMovies.map((u:MovieDto) => <Movie movie={u} key={u.imdbID}
            />):<Preloader/>
            }
        </div>
        </div>
    )
}

export default Movies;

