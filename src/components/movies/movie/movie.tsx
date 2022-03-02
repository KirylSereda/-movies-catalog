import { Movie as MovieDto } from '../../../store/movies/movies.actions';
import poster from '../../../assets/images/kinoimg.jpg'
import styles from './movie.module.css'

interface Props {
    movie: MovieDto
}

const Movie = (props: Props) => {
    const { movie } = props
    return (<div className={styles.movie_inner} >
        <img className={styles.movie_img} alt="userIcon" src={movie.Poster !== 'N/A' ? movie.Poster : poster} />
        <div className={styles.movie_link}> {movie.Title}</div>
        <div className={styles.description}>
            <div >Year:{movie.Year}</div>
            <div >imdbID:{movie.imdbID}</div>
            <div >Type:{movie.Type}</div>
        </div>
    </div>
    )
}

export default Movie;