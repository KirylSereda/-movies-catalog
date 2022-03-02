import { useSelector } from "react-redux";
import styles from './pagination.module.css'
import { useDispatch } from "react-redux";
import { AppState } from "../../store/redux.store";
import { setCurrentPage } from "../../store/movies/movies.actions";
import { useState } from "react";
import cn from "classnames";

const Pagination = () => {

    const currentPage= useSelector((state: AppState) => state.movies.currentPage)
    const totalCount = useSelector((state: AppState) => state.movies.totalCount)
    const chunk = useSelector((state: AppState) => state.movies.chunk)
    const pagesCount = Math.ceil(totalCount / chunk)
    const dispatch = useDispatch()

    const pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / chunk)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * chunk + 1
    let rightPortionPageNumber = portionNumber * chunk

    return <div className={styles.pages}>
        {portionNumber > 1 &&
            <button  className={styles.btn} onClick={() => { setPortionNumber(portionNumber - 1) }}>
                &#60;
            </button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span
                    key={p}
                    className={cn({ [styles.current_page] : currentPage === p }, styles.page)}
                    onClick={() => {
                        dispatch(setCurrentPage(p))
                    }}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <button className={styles.btn} onClick={() => { setPortionNumber(portionNumber + 1) }}>&#62;
            </button>}
    </div>
}

export default Pagination;

