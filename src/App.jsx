import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage/HomePage"
import Favourite from "./pages/Favourite/Favourite/"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/favourite" element={<Favourite/>}></Route>
      </Routes>
    </>
  )
}
