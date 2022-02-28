import { useSelector } from "react-redux";
import s from './pagination.module.scss'
import cn from "classnames";
import { setCurrentPage, setTotalCounte } from "../redux/movies-reducer";
import { useDispatch } from "react-redux";
import { createPages } from "../utils/pagesCreator";

const Pagination = () => {
    const currentPage = useSelector(state => state.moviesPage.currentPage)
    const totalCount = useSelector(state => state.moviesPage.totalCount )
    const perPage = useSelector(state => state.moviesPage.perPage)
    const pagesCount = Math.ceil(totalCount/perPage)
    console.log(pagesCount)
    
    
    const dispatch = useDispatch();


    const pages = []
    
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