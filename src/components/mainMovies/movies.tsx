import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieIterface } from "../../store/movies/movies-actions";
import { getMovies } from "../../store/movies/movies.thunk";
import { AppStateType } from "../../store/redux-store";
import Movie from "./movie/movie";
import styles from './moviesContainer.module.css'

const Movies = () => {

    const ObjectMovies = useSelector((state: AppStateType):Array<MovieIterface> => state.moviesPage.movies);
    const currentPage = useSelector((state: AppStateType):number => state.moviesPage.currentPage);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMovies(currentPage));
    }, [currentPage])

    return (
        <div className={styles.movies_container}>
            {ObjectMovies.map((u:MovieIterface) => <Movie movie={u} key={u.imdbID}
            />
            )
            }
        </div>
    )
}

export default Movies;

