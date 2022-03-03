import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSearch } from "../../../store/movies/movies.actions"
import { getMovies } from "../../../store/movies/movies.thunk"
import { AppState } from "../../../store/redux.store"
import styles from './search.module.css'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const currentPage = useSelector((state: AppState) => state.movies.currentPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies(currentPage, searchValue))
        dispatch(setSearch(searchValue))
    }, [currentPage, searchValue, dispatch])

     return (
        <div >
            <input className={styles.input} onChange={(e) => setSearchValue(e.target.value)} defaultValue={searchValue} type='text' placeholder='Find a movie' />
        </div>
    )
}

export default Search