import styles from './header.module.css'
import userIcon from '../../assets/images/userIcon.png'
import MoviesSearch from './moviesSearch/moviesSearch';

const Header = () => {
    return (
        <header className={styles.header_contener}>
            <div className={styles.name_web}>
                Movies Catalog
            </div>
            <div >
                <MoviesSearch/>
            </div>
            <div>
                <div className={styles.user}> 
                     <img className={styles.user_img} src = {userIcon}/>
                     <span> Alexander Borisenko</span>
                </div>
            </div>
        </header>
    )
}

export default Header;