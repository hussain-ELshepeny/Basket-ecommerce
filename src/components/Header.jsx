import { IoIosMenu } from "react-icons/io"
import { FaAngleDown } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { useHeaderActions } from "../hooks/header-actions"
import { useCart } from "../hooks/useCart"

export default function Header() {
  const { getCart } = useCart()
  const { data: cartData } = getCart
  const cart = cartData?.cart || []

  const {
    menuOpen,
    setMenuOpen,
    categoriesOpen,
    setCategoriesOpen,
    searchFocused,
    setSearchFocused,
  } = useHeaderActions()

  const navItems = [
    { name: "Home", path: "/", icon: "/images/home.png", isNavLink: true },
    { name: "Shop", path: "/shop", icon: "/images/shop.jpg", isNavLink: true },
    { name: "Meats & Seafood", icon: "/images/meat.png", isNavLink: false },
    { name: "Bakery", icon: "/images/baker.png", isNavLink: false },
    { name: "Beverages", icon: "/images/cup.png", isNavLink: false },
    { name: "Blog", path: "/blog", icon: "/images/blog.webp", isNavLink: true },
    {
      name: "Contact",
      path: "/contact",
      icon: "/images/contact.png",
      isNavLink: true,
    },
  ]

  return (
    <header className="bg-white sticky top-0 z-30 shadow-md">
      <div className="section-container">
        {/* Top Header Section */}
        <div className="flex justify-between items-center gap-4 py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-2xl text-gray-700 hover:text-primary transition-colors p-2 hover:bg-gray-50 rounded-lg"
            >
              {menuOpen ? <AiOutlineClose /> : <HiOutlineMenuAlt3 />}
            </button>

            <NavLink to="/" className="shrink-0">
              <img
                className="h-8 sm:h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
                src="/images/logo.png"
                alt="Logo"
              />
            </NavLink>
          </div>

          {/* Search Bar */}
          <div
            className={`relative flex-1 max-w-2xl transition-all duration-300 ${
              searchFocused ? "scale-[1.02]" : ""
            }`}
          >
            <div className="relative">
              <AiOutlineSearch
                className={`absolute left-4 top-1/2 -translate-y-1/2 text-xl transition-colors ${
                  searchFocused ? "text-primary" : "text-gray-400"
                }`}
              />
              <input
                className={`w-full py-2.5 sm:py-3 pl-12 pr-4 focus:outline-none rounded-xl sm:rounded-2xl bg-gray-50 transition-all duration-300 text-sm sm:text-base ${
                  searchFocused
                    ? "bg-white ring-2 ring-primary/30 shadow-lg"
                    : "hover:bg-gray-100"
                }`}
                type="text"
                placeholder="Search for products..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* User Icon - Hidden on mobile */}
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-all group">
              <div className="relative">
                <AiOutlineUser className="text-2xl text-gray-600 group-hover:text-primary transition-colors" />
              </div>
            </button>

            {/* Cart */}
            <NavLink
              to="/cart"
              className="relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl hover:bg-primary/5 transition-all group border border-transparent hover:border-primary/20"
            >
              <div className="relative">
                <AiOutlineShoppingCart className="text-2xl sm:text-3xl text-gray-700 group-hover:text-primary transition-colors" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-lg">
                  {cart.count ? cart.count : "0"}
                </span>
              </div>
              <span className="hidden md:block font-semibold text-gray-700 group-hover:text-primary transition-colors">
                ${cart.totalPrice ? cart.totalPrice.toFixed(2) : "0.00"}
              </span>
            </NavLink>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="border-t border-gray-100">
          <div className="flex justify-between items-center gap-4 py-3 sm:py-4">
            {/* Categories Button */}
            <div className="relative">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="bg-linear-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg group text-sm sm:text-base"
              >
                <IoIosMenu className="text-xl sm:text-2xl group-hover:rotate-180 transition-transform duration-500" />
                <span className="font-medium hidden sm:inline">
                  ALL CATEGORIES
                </span>
                <span className="font-medium sm:hidden">MENU</span>
                <FaAngleDown
                  className={`transition-transform duration-300 ${
                    categoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Categories Dropdown */}
              {categoriesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 min-w-[250px] animate-slide-down z-50">
                  <a
                    href="#"
                    className="px-5 py-3 hover:bg-primary/5 flex items-center gap-3 transition-all group"
                  >
                    <img
                      src="/images/meat.png"
                      alt=""
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-gray-700 group-hover:text-primary font-medium">
                      Meats & Seafood
                    </span>
                  </a>
                  <a
                    href="#"
                    className="px-5 py-3 hover:bg-primary/5 flex items-center gap-3 transition-all group"
                  >
                    <img
                      src="/images/baker.png"
                      alt=""
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-gray-700 group-hover:text-primary font-medium">
                      Bakery
                    </span>
                  </a>
                  <a
                    href="#"
                    className="px-5 py-3 hover:bg-primary/5 flex items-center gap-3 transition-all group"
                  >
                    <img
                      src="/images/cup.png"
                      alt=""
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-gray-700 group-hover:text-primary font-medium">
                      Beverages
                    </span>
                  </a>
                </div>
              )}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block flex-1">
              <ul className="flex items-center justify-end gap-1 xl:gap-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    {item.isNavLink ? (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-3 xl:px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm xl:text-base ${
                            isActive
                              ? "bg-primary/10 text-primary shadow-sm scale-105"
                              : "text-gray-600 hover:bg-primary/5 hover:text-primary hover:scale-105"
                          }`
                        }
                      >
                        {item.icon && (
                          <img src={item.icon} alt="" className="w-5 h-5" />
                        )}
                        {item.name}
                      </NavLink>
                    ) : (
                      <Link
                        // to={item.path}
                        className={`flex items-center gap-2 px-3 xl:px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm xl:text-base ${"text-gray-600 hover:bg-primary/5 hover:text-primary hover:scale-105"}`}
                      >
                        {item.icon && (
                          <img src={item.icon} alt="" className="w-5 h-5" />
                        )}
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 h-full w-[280px] bg-white z-100 lg:hidden shadow-2xl animate-slide-right overflow-y-auto">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <img src="/images/logo.png" alt="Logo" className="h-8" />
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-gray-600 hover:text-primary transition-colors p-2 hover:bg-gray-50 rounded-lg"
              >
                <AiOutlineClose />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                          isActive
                            ? "bg-primary/10 text-primary shadow-lg"
                            : "text-gray-600 hover:bg-primary/5 hover:text-primary"
                        }`
                      }
                    >
                      {item.icon && (
                        <img src={item.icon} alt="" className="w-6 h-6" />
                      )}
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <NavLink
                  to="/profile"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition-all font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  <AiOutlineUser className="text-xl" />
                  My Account
                </NavLink>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
