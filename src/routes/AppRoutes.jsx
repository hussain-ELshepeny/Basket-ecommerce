import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const Home = lazy(() => import("../pages/Home"))
const AboutUs = lazy(() => import("../pages/AboutUs"))
const Contact = lazy(() => import("../pages/Contact"))
const Shop = lazy(() => import("../pages/Shop"))
const Blog = lazy(() => import("../pages/Blog"))
const Checkout = lazy(() => import("../pages/Checkout"))
const Login = lazy(() => import("../pages/Login"))
const Layout = lazy(() => import("../layout/Layout"))

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
