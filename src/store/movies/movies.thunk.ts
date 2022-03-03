import axios from "../../api/api";
import { Dispatch } from "redux";
import { Movie, setIsFetching, setListOfMovies } from "./movies.actions";
import { AxiosResponse } from "axios";

interface ResponseData {
  Search:Movie[] | undefined;
  totalResults:number | undefined
}

export const getMovies = (currentPage: number, searchValue: string) => async (dispatch: Dispatch) => {
  dispatch(setIsFetching(true))

    const response: AxiosResponse<ResponseData> = await axios.get('', {
      params: {
        s: searchValue,
        page: currentPage
      }
    })

  const { Search, totalResults } = response.data
 
  dispatch(setListOfMovies({ movies: Search ?? [], totalCount: totalResults ?? 0 }))
  dispatch(setIsFetching(false))

}
