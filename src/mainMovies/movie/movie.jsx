import s from './movie.module.scss'
import poster from '../../assets/images/kinoimg.jpg'
const Movie = ({ movie }) => {

    return (<div className={s.movie_inner} >
        <img className={s.movie_img} src={movie.Poster != 'N/A' ? movie.Poster  : poster}  />
        <div className={s.movie_link}>{movie.Title}</div>
        <div className={s.movie_release}>Release {movie.release_date}</div>
    </div>
    )
}

export default Movie;