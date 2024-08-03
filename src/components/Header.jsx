import {Route, Routes} from 'react-router-dom'
import '../assets/sass/header.sass'

export default function Header(){
    return (
        <header>
            <div className="container">
                <div className="header__logo">
                    <div className="header__logo-icon"><img src='img/icons/logo.svg' alt="HeaderLogo" /></div>
                    <div className="header__logo-text">
                        <h3 className="header__logo-title">REACT SNEAKERS</h3>
                        <p className="header__logo-descript">Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className="header__info">
                    <div className="header__info-item">
                        <div className="header__info-icon"><img src="img/icons/cart.svg" alt="CartIcon" /></div>
                        <p className='header__info-title'>0 руб.</p>
                    </div>
                    <div className="header__info-item">
                        <div className="header__info-icon"><img src="img/icons/favourite.svg" alt="Favicon" /></div>
                        <p className='header__info-title'>Закладки</p>
                    </div>
                    <div className="header__info-item">
                        <div className="header__info-icon"><img src="img/icons/user.svg" alt="ProfileIcon" /></div>
                        <p className='header__info-title'>Профиль</p>
                    </div>
                </div>
            </div>
        </header>
    )
}