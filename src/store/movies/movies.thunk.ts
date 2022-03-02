import axios from "../../api/api";
import { Dispatch } from "redux";
import { setIsFetching, setListOfMovies } from "./movies.actions";

export const getMovies = (currentPage: number, searchValue: string) => async (dispatch: Dispatch) => {
  dispatch(setIsFetching(true))

    const response = await axios.get('', {
      params: {
        s: searchValue,
        page: currentPage
      }
    })

  const { Search, totalResults } = response.data
 
  dispatch(setListOfMovies({ movies: Search, totalCount: +totalResults }))
  dispatch(setIsFetching(false))

}
