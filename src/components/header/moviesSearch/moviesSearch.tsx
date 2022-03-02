import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../../../store/movies/movies.thunk"
import { AppState } from "../../../store/redux.store"


const MoviesSearch = () => {
    const [searchValue, setSearchValue] = useState('Batman')
  
    const currentPage = useSelector((state: AppState) => state.movies.currentPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies(currentPage,searchValue))
        
    }, [currentPage,searchValue,dispatch])

    // onChange={(e) => setSearchValue(e.target.value)}
    return (
        <div>
            <input value={searchValue} type='text' placeholder='Find a movie' />
        </div>
    )
}

export default MoviesSearch