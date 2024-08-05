import { useEffect, useState } from 'react'
import axios from 'axios'


import ProductsBlock from '../../components/Products/ProductsBlock';

export default function HomePage() {
  const [products, setProducts] = useState([])
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


  
  return (
    <>
      <main>
        <section className="products">
          <div className="container">
            <h2 className="section__title">Все кроссовки</h2>
            <ProductsBlock products={products}/>
          </div>
        </section>
      </main>
    </>
  )
}
