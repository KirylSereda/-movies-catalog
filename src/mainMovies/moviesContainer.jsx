import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/movies-reducer";
import Movie from "./movie/movie";
import s from './moviesContainer.module.scss'

const MoviesContainer = () => {

const ObjectMovies = useSelector(state => state.moviesPage.movies);
const currentPage = useSelector(state => state.moviesPage.currentPage);
const dispatch = useDispatch();

useEffect (()=>{
    dispatch(getMovies(currentPage));
},[currentPage])

    return (
        <div className={s.movies_container}>
      {ObjectMovies.map(u => <Movie movie={u} key={u.imdbID}
      />
      )
      }
    </div>
    )
}

export default MoviesContainer;