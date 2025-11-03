import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}
