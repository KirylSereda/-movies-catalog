import { useSelector } from "react-redux";
import styles from './pagination.module.css'
import cn from "classnames";
import { useDispatch } from "react-redux";
import { AppState } from "../../store/redux.store";
import { setCurrentPage } from "../../store/movies/movies.actions";
import { createPages } from "../utils/pagesCreator";

const Pagination = () => {
    const currentPage = useSelector((state: AppState)=> state.movies.currentPage)
    const totalCount = useSelector((state: AppState)=> state.movies.totalCount )
    const chunk = useSelector((state: AppState) => state.movies.chunk)
    const pagesCount = Math.ceil(totalCount/chunk)
    const dispatch = useDispatch()

    const pages:Array<number> = []
    
    createPages(pages,pagesCount,currentPage)

    return (
        <div className={styles.pages}>
            {pages.map((p, index) => <span 
            key={index} 
            className={cn({ [styles.current_page] : currentPage === p }, styles.page)}
            onClick={()=>dispatch(setCurrentPage(p))}>{p}</span>)}
        </div>
    )
}

export default Pagination;