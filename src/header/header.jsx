import s from './header.module.scss'
import userIcon from '../assets/images/userIcon.png'

const Header = () => {
    return (
        <header className={s.header_contener}>
            <div className={s.name_web}>
                Movies Catalog
            </div>
            <div>
                <input />
            </div>
            <div>
                <div className={s.user}> 
                     <img className={s.user_img} src = {userIcon}/>
                     <span> Виктор</span>
                </div>
            </div>
        </header>
    )
}

export default Header;