import { toast } from 'react-toastify'

import './sass/productsBlock.sass'
import ProductsCard from './ProductsCard'

export default function ProductsBlock({products}){
    let NewFavourites = localStorage.getItem('Favourites') ? JSON.parse(localStorage.getItem('Favourites')) : []
    let FavouritesId = []
    NewFavourites.forEach((e) => {
        FavouritesId.push(e.id)
    })

    const productsList = products.map(productsItem =>  
        <ProductsCard 
          favourited={FavouritesId.indexOf(productsItem.id) == -1 ? false : true}
          key={productsItem.id} 
          productsItem={productsItem}
          AddToFavourite={AddToFavourite}
        />
    )

    function AddToFavourite(Product){
        let ProductInFavourite = false

        for(let i = 0; i < NewFavourites.length; i++){
            if (NewFavourites[i].id == Product.id){
                ProductInFavourite = true
                break
            }
        }


        if (!ProductInFavourite){
            NewFavourites.push(Product)
            toast.success('Товар был добавлен в избранное', {
                position: "top-right",
                autoClose: 3000,
            });
        } else {
            NewFavourites = NewFavourites.filter((e) => e.id !== Product.id)
            toast.success('Товар был удален из избранного', {
                position: "top-right",
                autoClose: 3000,
            });
        }


        localStorage.setItem('Favourites', JSON.stringify(NewFavourites))
    }

    return (
        <div className="products__block">
              {productsList}
        </div>
    )
}