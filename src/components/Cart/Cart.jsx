import { useEffect } from 'react'
import './style.sass'
export default function Cart({IsCartOpen}){
    function OpenCart(){
        let cartBg = document.getElementById('cart__bg')
        let cartWindow = document.getElementById('cart__window')
        if (IsCartOpen){
            cartBg.classList.add("cart__bg-preactive")
            setTimeout(() => {
                cartBg.classList.add("cart__bg-active")
                cartWindow.classList.add('cart__window-preactive')
                setTimeout(() => {
                    cartWindow.classList.add('cart__window-active')
                }, 150)
            }, 150)
        } else {
            cartWindow.classList.remove('cart__window-active')
            setTimeout(() => {
                cartWindow.classList.remove('cart__window-preactive')
                cartBg.classList.remove("cart__bg-active")
                setTimeout(() => {
                    cartBg.classList.remove("cart__bg-preactive")
                }, 150)
            }, 150)
        }
        
    }
    useEffect(() => {
        OpenCart()
    }, [IsCartOpen])
    return (
        <div className="cart__bg" id='cart__bg'>
            <div className="cart__window" id='cart__window'>
                <div className="cart__header">
                    <h2 className="section__title">Корзина</h2>
                </div>
                <div className="cart__footer">
                    Низ
                </div>
            </div>
        </div>
    )
}