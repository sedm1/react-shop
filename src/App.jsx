import { Routes, Route } from "react-router-dom"
import { useContext } from "react"
import {IsCartOpen} from "./context/cart.js"
import { ToastContainer } from "react-toastify"

import HomePage from "./pages/HomePage/HomePage"
import Favourite from "./pages/Favourite/Favourite/"
import Cart from "./components/Cart/Cart"
import Header from "./components/Header.jsx"


export default function App() {
  let IsModalOpen = useContext(IsCartOpen)
  return (
    <>
      <ToastContainer />
      <Cart IsCartOpen={IsModalOpen}></Cart>

      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/favourite" element={<Favourite/>}></Route>
      </Routes>
    </>
  )
}
