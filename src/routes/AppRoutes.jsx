import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import Contact from "../pages/Contact"
import Shop from "../pages/Shop"
import Blog from "../pages/Blog"
import Layout from "../layout/Layout"
import Checkout from "../pages/Checkout"
import Login from "../pages/Login"

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/cart" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
