import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import ProductsBlock from "../../components/Products/ProductsBlock";
import './favourite.sass'





export default function Favourite(){
    const favouriteProductsList = localStorage.getItem('Favourites') ? JSON.parse(localStorage.getItem('Favourites')) : []
    const [products, setProducts] = useState([])
    const [favouriteProducts, setFavouriteProducts] = useState([])


    function GetProductsFromApi(){
        try {
            const products = async () => {
                const data = await axios('https://66ae2dafb18f3614e3b6f725.mockapi.io/items')
                return data.data
            }
            products()
            .then((data) => {
                setProducts(data)
            })
        } catch(err){
            console.log('Ошибка при получении избранного товара: ' + err)
        }
    }

    function filterFavouriteProducts(data){
        const res = data.filter((item) => favouriteProductsList.indexOf(item.id) !== -1)
        setFavouriteProducts(res)
    }

    useEffect(() => {
        GetProductsFromApi()
    }, [])

    useEffect(() => {
        filterFavouriteProducts(products)
    }, [favouriteProducts])

    

    return(
        <>
            <ToastContainer />
            <Header></Header>
            <main>
                <section className="main">
                    <div className="container">
                        <h2 className="section__title">Мои закладки</h2>
                        {favouriteProducts.length ? (
                            <ProductsBlock products={favouriteProducts}/>
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