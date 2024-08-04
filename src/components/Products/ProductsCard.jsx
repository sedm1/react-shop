import { useState } from 'react'
import './sass/productsCard.sass'

export default function ProductsCard({ productsItem, AddToFavourite, favourited}){
    const [inFav, setInFav] = useState(favourited)
    const onAddToFavourite = () => {
        setInFav(!inFav)
        AddToFavourite(productsItem.id)
    }
    
    
    
    return (
        <div className="products__item">
            <button 
            className={inFav ? "products__item-fav products__item-fav-active" : 'products__item-fav'}
            onClick={onAddToFavourite}
            >
                <img src={inFav ? "img/icons/fav-active.svg" : "img/icons/fav.svg"} alt="Favicon" />
            </button>
            <div className="products__item-img"><img src={'img' + productsItem.imageUrl} alt="ProductsItem" /></div>
            <h3 className="products__item-title">{productsItem.title}</h3>
            <div className="products__item-footer">
            <div className="products__item-info">
                <h4 className="products__item-subtitle">Цена: </h4>
                <p className="products__item-price">{productsItem.price} руб.</p>
            </div>
            <button className="products__item-button">Добавить в корзину</button>
            </div>
            
        </div>
    )
}