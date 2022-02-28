import {Action} from '../action'

export enum MoviesActionType {
    SET_LIST_OF_MOVIES = "SET_LIST_OF_MOVIES",
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_IS_FETCHING = 'SET_IS_FETCHING'
}

export interface MovieIterface {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }
  
  export interface MoviesResponse {
    movies: MovieIterface[];
    totalCount: number;
    isFetching:boolean
  }

export const setListOfMovies = (movies:MoviesResponse):Action<MoviesResponse> => ({ 
    type: MoviesActionType.SET_LIST_OF_MOVIES,
    payload:movies
});

export const setCurrentPage = (currentPage:number):Action<number> => ({ 
   type:MoviesActionType.SET_CURRENT_PAGE,
   payload:currentPage
});

export const setIsFetching = (isFetching:boolean):Action<boolean> => ({ 
  type:MoviesActionType.SET_CURRENT_PAGE,
  payload:isFetching
});



