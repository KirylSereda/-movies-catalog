import styles from './header.module.css'
import userIcon from '../../assets/images/userIcon.png'
import Search from '../common/search/search';

const Header = () => {
    return (
        <header className={styles.headerContener}>
            <div className={styles.nameWeb}>
                Movies Catalog
            </div>
            <div >
                <Search />
            </div>
            <div>
                <div className={styles.user}>
                    <img className={styles.userImg} src={userIcon} alt='userIcon' />
                    <span> Alexander Borisenko</span>
                </div>
            </div>
        </header>
    )
}

export default Header;