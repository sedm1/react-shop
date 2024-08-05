import { Link } from 'react-router-dom'

import '../assets/sass/header.sass'
import { useEffect, useState } from 'react'

export default function Header(){
    let [price, setPrice] = useState(0)


    return (
        <header>
            <div className="container">
                <Link className="header__logo" to='/'>
                    <div className="header__logo-icon"><img src='img/icons/logo.svg' alt="HeaderLogo" /></div>
                    <div className="header__logo-text">
                        <h3 className="header__logo-title">REACT SNEAKERS</h3>
                        <p className="header__logo-descript">Магазин лучших кроссовок</p>
                    </div>
                </Link>
                <div className="header__info">
                    <div className="header__info-item" onClick={() => {
                        
                    }}>
                        <div className="header__info-icon"><img src="img/icons/cart.svg" alt="CartIcon" /></div>
                        <p className='header__info-title'>{price} руб.</p>
                    </div>
                    <Link className="header__info-item" to='/favourite'>
                        <div className="header__info-icon"><img src="img/icons/favourite.svg" alt="Favicon" /></div>
                        <p className='header__info-title'>Закладки</p>
                    </Link>
                    <div className="header__info-item">
                        <div className="header__info-icon"><img src="img/icons/user.svg" alt="ProfileIcon" /></div>
                        <p className='header__info-title'>Профиль</p>
                    </div>
                </div>
            </div>
        </header>
    )
}