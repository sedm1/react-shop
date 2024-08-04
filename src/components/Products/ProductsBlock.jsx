import { toast } from 'react-toastify'

import './sass/productsBlock.sass'
import ProductsCard from './ProductsCard'

export default function ProductsBlock({products}){
    let NewFavourites = localStorage.getItem('Favourites') ? JSON.parse(localStorage.getItem('Favourites')) : []

    const productsList = products.map(productsItem =>  
        <ProductsCard 
          favourited={NewFavourites.indexOf(productsItem.id) == -1 ? false : true}
          key={productsItem.id} 
          productsItem={productsItem}
          AddToFavourite={AddToFavourite}
        />
    )
    function AddToFavourite(ProductId){
        let index = NewFavourites.indexOf(ProductId)
        if (index == -1){
            NewFavourites.push(ProductId)
            toast.success('Товар был добавлен в избранное', {
                position: "top-right",
                autoClose: 3000,
            });
        } else {
            toast.success('Товар был удален из избранного', {
                position: "top-right",
                autoClose: 3000,
            });
            NewFavourites = NewFavourites.filter((e) => e !== ProductId)
        }
        localStorage.setItem('Favourites', JSON.stringify(NewFavourites))
    }


    return (
        <div className="products__block">
              {productsList}
        </div>
    )
}