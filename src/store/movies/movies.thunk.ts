import axios from "../../api/api";
import { Dispatch } from "redux";
import { setIsFetching, setListOfMovies } from "./movies-actions";

export const getMovies = (currentPage: number) => async (dispatch: Dispatch) => {
  setIsFetching(true)
 
  const response = await axios.get('', {
    params: {
      s: "abc",
      page: currentPage
    }
  })

  const { Search, totalResults } = response.data;
  
  dispatch(setListOfMovies({ movies: Search, totalCount: +totalResults,isFetching:false }))
}
