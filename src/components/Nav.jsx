import { NavLink } from "react-router-dom";
import { FiChevronDown, FiPhone } from "react-icons/fi";
import { MdSecurity } from "react-icons/md";
import { AiOutlineHeart, AiOutlineSync } from "react-icons/ai";
import { useHeaderActions } from "../hooks/header-actions";

export default function Nav() {
  // const [languageOpen, setLanguageOpen] = useState(false);
  // const [currencyOpen, setCurrencyOpen] = useState(false);

  const {
    languageOpen,
    setLanguageOpen,
    currencyOpen,
    setCurrencyOpen
  } = useHeaderActions();

  return (
    <nav className="w-full">
      {/* Top Banner */}
      <div className="bg-linear-to-r from-primary to-primary/90 text-white py-2.5 text-center text-xs sm:text-sm overflow-hidden">
        <div className="section-container animate-fade-in">
          <p className="flex items-center justify-center gap-2 px-4">
            <MdSecurity className="hidden sm:inline text-lg shrink-0" />
            <span>
              Due to current circumstances, there may be slight delays in order
              processing
            </span>
          </p>
        </div>
      </div>

      {/* Main Nav */}
      <div className="border-b border-gray-100 bg-white static top-0 z-40 shadow-sm">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 py-3">
            {/* Links - Hidden on mobile */}
            <ul className="hidden lg:flex items-center gap-1">
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                      isActive
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "text-gray-600 hover:bg-primary/5 hover:text-primary"
                    }`
                  }
                >
                  <img
                    className="w-7 h-7 object-cover rounded-full"
                    src="/images/about-us.jpg"
                    alt=""
                  />
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/compare"
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                >
                  <AiOutlineSync className="text-lg" />
                  Compare
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/wishlist"
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                >
                  <AiOutlineHeart className="text-lg" />
                  Wishlist
                </NavLink>
              </li>
            </ul>

            {/* Right Side Info */}
            <div className="flex flex-col justify-center sm:flex-row items-start sm:items-center gap-3 sm:gap-5 text-xs sm:text-sm">
              {/* Secure Delivery - Hidden on small screens */}
              <div className="hidden xl:flex items-center gap-2 text-gray-600 bg-green-50 px-3 py-1.5 rounded-lg">
                <img
                  src="/images/nav-icon.png"
                  alt="secure"
                  className="w-5 h-5"
                />
                <span className="text-xs font-medium">
                  100% Secure delivery without contacting the courier
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors cursor-pointer group">
                <FiPhone className="text-primary group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline text-xs">Need help?</span>
                <span className="text-primary font-semibold text-sm">
                  +0020 500
                </span>
              </div>

              <div className="flex justify-center items-center gap-2">
                {/* Language Selector */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setLanguageOpen(!languageOpen);
                      setCurrencyOpen(false);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-all text-gray-700 border border-transparent hover:border-gray-200"
                  >
                    <img
                      src="/images/flags/en.png"
                      alt="EN"
                      className="w-4 h-4 rounded-full"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                    <span className="font-medium text-sm">English</span>
                    <FiChevronDown
                      className={`transition-transform duration-300 ${languageOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {languageOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[100px] animate-slide-down z-50">
                      <button className="w-full px-4 py-2 text-left hover:bg-primary/5 text-sm flex justify-center items-center gap-2 transition-colors">
                        <img
                          src="/images/flags/en.png"
                          alt="EN"
                          className="w-4 h-4"
                          onError={(e) => (e.target.style.display = "none")}
                        />
                        English
                      </button>
                      <button className="w-full px-4 py-2 text-left hover:bg-primary/5 text-sm flex justify-center items-center gap-2 transition-colors">
                        <img
                          src="/images/flags/ar.png"
                          alt="AR"
                          className="w-4 h-4"
                          onError={(e) => (e.target.style.display = "none")}
                        />
                        العربية
                      </button>
                    </div>
                  )}
                </div>

                {/* Currency Selector */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setCurrencyOpen(!currencyOpen);
                      setLanguageOpen(false);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-all text-gray-700 border border-transparent hover:border-gray-200"
                  >
                    <span className="font-medium text-sm">USD</span>
                    <FiChevronDown
                      className={`transition-transform duration-300 ${currencyOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {currencyOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-20 animate-slide-down z-50">
                      <button className="w-full px-4 py-2 text-center hover:bg-primary/5 text-sm transition-colors">
                        USD
                      </button>
                      <button className="w-full px-4 py-2 text-center hover:bg-primary/5 text-sm transition-colors">
                        EUR
                      </button>
                      <button className="w-full px-4 py-2 text-center hover:bg-primary/5 text-sm transition-colors">
                        GBP
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Bottom Links */}
          <div className="lg:hidden flex items-center justify-around border-t border-gray-100 py-2 text-xs">
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1 ${
                  isActive ? "text-primary bg-primary/10" : "text-gray-600"
                }`
              }
            >
              <img
                className="w-5 h-5 object-cover rounded-full"
                src="/images/about-us.jpg"
                alt=""
              />
              About Us
            </NavLink>
            <NavLink
              to="/compare"
              className="px-3 py-1.5 text-gray-600 flex items-center gap-1"
            >
              <AiOutlineSync />
              Compare
            </NavLink>
            <NavLink
              to="/wishlist"
              className="px-3 py-1.5 text-gray-600 flex items-center gap-1"
            >
              <AiOutlineHeart />
              Wishlist
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
