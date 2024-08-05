import { Link } from "react-router-dom";

import ProductsBlock from "../../components/Products/ProductsBlock";
import './favourite.sass'


export default function Favourite(){
    const favouriteProductsList = localStorage.getItem('Favourites') ? JSON.parse(localStorage.getItem('Favourites')) : []
    return(
        <>
            <main>
                <section className="main">
                    <div className="container">
                        <h2 className="section__title">Мои закладки</h2>
                        {favouriteProductsList.length ? (
                            <ProductsBlock 
                                products={favouriteProductsList}
                            />
                        ) : (
                            <div className="main__null">
                                <div className="main__null-icon"><img src="img/icons/notFound.svg" alt="NotFoundIcon" /></div>
                                <h3 className="main__null-title">Закладок нет :(</h3>
                                <p className="main__null-descript">Вы ничего не добавляли в закладки</p>
                                <Link to='/' className='main__null-link'>Вернуться на главную</Link>
                            </div>
                        )}
                        
                    </div>
                </section>
            </main>
        </>
    )
}