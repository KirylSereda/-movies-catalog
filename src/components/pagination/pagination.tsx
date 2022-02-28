import { useSelector } from "react-redux";
import s from './pagination.module.css'
import cn from "classnames";
import { useDispatch } from "react-redux";
import { AppStateType } from "../../store/redux-store";
import { setCurrentPage } from "../../store/movies/movies-actions";
import { createPages } from "../utils/pagesCreator";

const Pagination = () => {
    const currentPage = useSelector((state: AppStateType)=> state.moviesPage.currentPage)
    const totalCount = useSelector((state: AppStateType)=> state.moviesPage.totalCount )
    const chunk = useSelector((state: AppStateType) => state.moviesPage.chunk)
    const pagesCount = Math.ceil(totalCount/chunk)
    const dispatch = useDispatch();

    const pages:Array<number> = []
    
    createPages(pages,pagesCount,currentPage)

    return (
        <div className={s.pages}>
            {pages.map((p, index) => <span 
            key={index} 
            className={cn({ [s.current_page] : currentPage == p }, s.page)}
            onClick={()=>dispatch(setCurrentPage(p))}>{p}</span>)}
        </div>
    )
}

export default Pagination;