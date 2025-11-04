import React from "react";
import {
  FiPhone,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMessageSquare,
  FiChevronRight,
} from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";

const Footer = () => {
  return (
    <footer
      className="bg-white text-gray-700 text-sm"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Top Section: $20 Discount & Newsletter */}
      <div className="bg-[#35afa0] text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="hidden md:block absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/coupon.png.png')`,
            backgroundPosition: "right 4vw top 10vh",
            backgroundSize: "400px",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 relative">
            <h2 className="text-3xl font-bold mb-2">
              $20 discount for your first order
            </h2>
            <p className="text-lg mb-4">Join our newsletter and get...</p>
            <p className="mb-6">
              Join our email subscription now to get updates on promotions and
              coupons.
            </p>

            {/* Email Subscription Form */}
            <form className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[white] p-3 w-full rounded-l-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-[#3e445a] hover:bg-gray-800 text-white p-3 rounded-r-md whitespace-nowrap transition duration-300"
                style={{ backgroundColor: "var(--color-secondary)" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Middle Section: Features */}
      <div className="border-b border-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500">
          <div className="flex items-center space-x-2 p-2">
            <GiShoppingBag className="w-5 h-5 text-green-500" />
            <span>Everyday fresh products</span>
          </div>
          <div className="flex items-center space-x-2 p-2">
            <FiChevronRight className="w-5 h-5 text-green-500" />
            <span>Free delivery for order over $70</span>
          </div>
          <div className="flex items-center space-x-2 p-2">
            <FiMessageSquare className="w-5 h-5 text-green-500" />
            <span>Daily Mega Discounts</span>
          </div>
          <div className="flex items-center space-x-2 p-2">
            <FiChevronRight className="w-5 h-5 text-green-500" />
            <span>Best price on the market</span>
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Categories Links Section */}
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1: FRUIT & VEGETABLES */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 uppercase">
              FRUIT & VEGETABLES
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-[#35afa0] cursor-pointer">
                Fresh Vegetables
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Herbs & Seasonings
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Fresh Fruits
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Cuts & Sprouts
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Exotic Fruits & Veggies
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Packaged Produce
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Party Trays
              </li>
            </ul>
          </div>

          {/* Column 2: BREAKFAST & DAIRY */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 uppercase">
              BREAKFAST & DAIRY
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-[#35afa0] cursor-pointer">
                Milk & Flavoured Milk
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Butter and Margarine
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">Cheese</li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Eggs Substitutes
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">Honey</li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Marmalades
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Sour Cream and Dips
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">Yogurt</li>
            </ul>
          </div>

          {/* Column 3: MEAT & SEAFOOD */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 uppercase">
              MEAT & SEAFOOD
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-[#35afa0] cursor-pointer">
                Breakfast Sausage
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Dinner Sausage
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">Beef</li>
              <li className="hover:text-[#35afa0] cursor-pointer">Chicken</li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Sliced Deli Meat
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">Shrimp</li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Wild Caught Fillets
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Crab and Shellfish
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Farm Raised Fillets
              </li>
            </ul>
          </div>

          {/* Column 4: BEVERAGES */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 uppercase">
              BEVERAGES
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-[#35afa0] cursor-pointer">Water</li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Sparkling Water
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Soda & Pop
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">Coffee</li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Milk & Plant-Based Milk
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Tea & Kombucha
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Drink Boxes & Pouches
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Craft Beer
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">Wine</li>
            </ul>
          </div>

          {/* Column 5: BREADS & BAKERY */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 uppercase">
              BREADS & BAKERY
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-[#35afa0] cursor-pointer">Water</li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Milk & Flavoured Milk
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Butter and Margarine
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">Cheese</li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Eggs Substitutes
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">Honey</li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Marmalades
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">
                Sour Cream and Dips
              </li>
              <li className="hover:text-[#35afa0] cursor-pointer">Yogurt</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Bottom Footer Section: Contact, App Links, Social & Payment */}
      <div
        className="bg-[#3e445a] text-white py-6 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--color-secondary)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center text-xs">
          {/* Left: Contact Info */}
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <FiPhone className="w-5 h-5" />
            <div>
              <p className="text-lg font-bold">1 800 555-55</p>
              <p>Working 8:00 - 22:00</p>
            </div>
          </div>

          {/*Download App Links & Discount */}
          <div className="text-center mb-4 lg:mb-0">
            <p className="mb-2">
              Download App on Mobile •{" "}
              <span className="text-[#35afa0] font-bold">15% Discount</span> on
              your first purchase
            </p>
            <div className="flex justify-center space-x-2">
              <a href="#">
                <img
                  src="/images/google-play.png.png"
                  alt="Google Play"
                  className="h-8 "
                />
              </a>
              <a href="#">
                <img
                  src="/images/app-store.png.png"
                  alt="App Store"
                  className="h-8 "
                />
              </a>
            </div>
          </div>

          {/* Right: Social Media & Payment Icons*/}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-1 rounded-full border border-white hover:bg-white hover:text-[#3e445a] transition duration-300"
              >
                <FiFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-1 rounded-full border border-white hover:bg-white hover:text-[#3e445a] transition duration-300"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-1 rounded-full border border-white hover:bg-white hover:text-[#3e445a] transition duration-300"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-1 rounded-full border border-white hover:bg-white hover:text-[#3e445a] transition duration-300"
              >
                <FiMessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Copyright and Legal Links  */}
      <div className=" bg-gray-100 text-gray-900 py-3 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
          {/* Copyright text */}
          <p className="mb-2 md:mb-0">
            Copyright 2025 © All rights reserved by Web Master
          </p>

          {/* Links and Payment Icons*/}
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#35afa0] cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#35afa0] cursor-pointer">
                Terms and Conditions
              </a>
              <a href="#" className="hover:text-[#35afa0] cursor-pointer">
                Cookie
              </a>
            </div>

            <div>
              <img
                src="/images/payments.jpg.png"
                alt="Payment Icons"
                className="h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
