import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

import Header from './components/Header'
import ProductsCard from './components/ProductsCard'



import './assets/sass/style.sass'

export default function App() {
  const [products, setProducts] = useState([])
  let NewFavourites = localStorage.getItem('Favourites') ? JSON.parse(localStorage.getItem('Favourites')) : []
  useEffect(() => {
    try {
      const products = async () => {
        const data = await axios('https://66ae2dafb18f3614e3b6f725.mockapi.io/items')
        return data.data
      }
  
      products()
      .then((res) => {
        setProducts(res)
      })
    } catch(err){
      console.log('Ощибка при получении товара: ' + err)
    }
    
  }, [])


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
      toast.success('Товар был удален', {
        position: "top-right",
        autoClose: 3000,
      });
      NewFavourites = NewFavourites.filter((e) => e !== ProductId)
    }
    localStorage.setItem('Favourites', JSON.stringify(NewFavourites))
  }


  return (
    <>
      <Header/>
      <ToastContainer />
      <main>
        <section className="products">
          <div className="container">
            <h2 className="section__title">Все кроссовки</h2>
            <div className="products__block">
              {productsList}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
