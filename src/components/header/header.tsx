import styles from './header.module.css'
import Search from '../common/search/search'

const Header = () => {
    return (
        <header className={styles.headerContener}>
            <div className={styles.nameWeb}>Movies Catalog</div>
            <Search />
        </header>
    )
}

export default Header
