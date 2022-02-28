import {  MovieIterface } from '../../../store/movies/movies-actions';
import poster from '../../../assets/images/kinoimg.jpg'
import s from './movie.module.css'

interface Props {
    movie:MovieIterface
}

const Movie = (props:Props) => {
    const {movie}=props
        return (<div className={s.movie_inner} >
            <img className={s.movie_img} src={movie.Poster != 'N/A' ? movie.Poster  : poster}  />
            <div className={s.movie_link}>{movie.Title}</div>
            <div className={s.movie_release}>Release {movie.Year}</div>
        </div>
        )
    }

export default Movie;