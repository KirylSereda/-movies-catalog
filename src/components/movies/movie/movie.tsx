import { Movie as MovieDto } from '../../../store/movies/movies.actions';
import poster from '../../../assets/images/kinoimg.jpg'
import styles from './movie.module.css'

interface Props {
    movie: MovieDto
}

const Movie = (props: Props) => {
    const { movie } = props
    return (<div className={styles.movieInner} >
        <img className={styles.movieImg} alt="userIcon" src={movie.Poster !== 'N/A' ? movie.Poster : poster} />
        <div className={styles.description}>
        <div className={styles.movieTitle}> {movie.Title}</div>
            <div >Year: { movie.Year}</div>
            <div >imdbID: { movie.imdbID}</div>
            <div >Type: { movie.Type}</div>
        </div>
    </div>
    )
}

export default Movie;