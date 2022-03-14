import { useEffect, useState } from 'react'
import { setCurrentPage } from '../../../store/movies/movies.actions'
import { getMovies } from '../../../store/movies/movies.thunk'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../store/redux.store'
import styles from './search.module.css'

const Search = () => {
    const [searchValue, setSearchValue] = useState('batman')
    const currentPage = useSelector((state: AppState) => state.movies.currentPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies(currentPage, searchValue))
    }, [currentPage, dispatch])

    return (
        <div className={styles.form}>
            <input
                className={styles.input}
                onChange={(e) => setSearchValue(e.target.value)}
                defaultValue={searchValue}
                type="text"
                placeholder="Find a movie"
            />
            <button
                className={styles.button}
                onClick={() => {
                    dispatch(getMovies(1, searchValue))
                    dispatch(setCurrentPage(1))
                }}
            ></button>
        </div>
    )
}

export default Search
