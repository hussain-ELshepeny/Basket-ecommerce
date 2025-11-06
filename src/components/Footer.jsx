import React from "react";
import {
  FiPhone,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMessageSquare,
  FiTruck,
  FiStar,
  FiTag,
} from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";

const Footer = () => {
  return (
    <footer
      className="bg-white text-gray-700 text-sm"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Top Section: $20 Discount & Newsletter */}
      <div
        className="text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
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
                className="hover:bg-gray-800 text-white p-3 rounded-r-md whitespace-nowrap transition duration-300"
                style={{ backgroundColor: "var(--color-secondary)" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Middle Section: Features - ICONS USING PRIMARY COLOR */}
      <div className="border-b border-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500">
          {/* Feature 1: Everyday fresh products */}
          <div className="flex items-center space-x-2 p-2">
            <GiShoppingBag
              className="w-5 h-5"
              style={{ color: "var(--color-primary)" }}
            />
            <span>Everyday fresh products</span>
          </div>

          {/* Feature 2: Free delivery for order over $70 */}
          <div className="flex items-center space-x-2 p-2">
            <FiTruck
              className="w-5 h-5"
              style={{ color: "var(--color-primary)" }}
            />
            <span>Free delivery for order over $70</span>
          </div>

          {/* Feature 3: Daily Mega Discounts */}
          <div className="flex items-center space-x-2 p-2">
            <FiStar
              className="w-5 h-5"
              style={{ color: "var(--color-primary)" }}
            />
            <span>Daily Mega Discounts</span>
          </div>

          {/* Feature 4: Best price on the market */}
          <div className="flex items-center space-x-2 p-2">
            <FiTag
              className="w-5 h-5"
              style={{ color: "var(--color-primary)" }}
            />
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
            <h4
              className="font-bold mb-3 uppercase"
              style={{ color: "var(--color-heading)" }}
            >
              FRUIT & VEGETABLES
            </h4>
            <ul className="space-y-2 text-gray-700">
              {/* Simplified Hover: using hover:text-primary */}
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Fresh Vegetables
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Herbs & Seasonings
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Fresh Fruits
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Cuts & Sprouts
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Exotic Fruits & Veggies
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Packaged Produce
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Party Trays
              </li>
            </ul>
          </div>

          {/* Column 2: BREAKFAST & DAIRY */}
          <div>
            <h4
              className="font-bold mb-3 uppercase"
              style={{ color: "var(--color-heading)" }}
            >
              BREAKFAST & DAIRY
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Milk & Flavoured Milk
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Butter and Margarine
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Cheese
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Eggs Substitutes
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Honey
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Marmalades
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Sour Cream and Dips
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Yogurt
              </li>
            </ul>
          </div>

          {/* Column 3: MEAT & SEAFOOD */}
          <div>
            <h4
              className="font-bold mb-3 uppercase"
              style={{ color: "var(--color-heading)" }}
            >
              MEAT & SEAFOOD
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Breakfast Sausage
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Dinner Sausage
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Beef
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Chicken
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Sliced Deli Meat
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Shrimp
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Wild Caught Fillets
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Crab and Shellfish
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Farm Raised Fillets
              </li>
            </ul>
          </div>

          {/* Column 4: BEVERAGES */}
          <div>
            <h4
              className="font-bold mb-3 uppercase"
              style={{ color: "var(--color-heading)" }}
            >
              BEVERAGES
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Water
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Sparkling Water
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Soda & Pop
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Coffee
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Milk & Plant-Based Milk
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Tea & Kombucha
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Drink Boxes & Pouches
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Craft Beer
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Wine
              </li>
            </ul>
          </div>

          {/* Column 5: BREADS & BAKERY */}
          <div>
            <h4
              className="font-bold mb-3 uppercase"
              style={{ color: "var(--color-heading)" }}
            >
              BREADS & BAKERY
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Water
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Milk & Flavoured Milk
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Butter and Margarine
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Cheese
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Eggs Substitutes
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Honey
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Marmalades
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Sour Cream and Dips
              </li>
              <li className="cursor-pointer hover:text-primary transition duration-200">
                Yogurt
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Bottom Footer Section: Contact, App Links, Social & Payment */}
      <div
        className="text-white py-6 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--color-secondary)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center text-xs">
          {/* Left: Contact Info - Phone Icon */}
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <FiPhone className="w-5 h-5" />
            <div>
              <p className="text-lg font-bold">1 800 555-55</p>
              <p>Working 8:00 - 22:00</p>
            </div>
          </div>

          {/* Download App Links & Discount */}
          <div className="text-center mb-4 lg:mb-0">
            <p className="mb-2">
              Download App on Mobile •{" "}
              <span
                className="font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                15% Discount
              </span>{" "}
              on your first purchase
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

          {/* Right: Social Media Icons - Simplified Hover */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-1 rounded-full border border-white hover:bg-white transition duration-300"
                style={{ color: "white" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--color-secondary)")
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                <FiFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-1 rounded-full border border-white hover:bg-white transition duration-300"
                style={{ color: "white" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--color-secondary)")
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                <FiTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-1 rounded-full border border-white hover:bg-white transition duration-300"
                style={{ color: "white" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--color-secondary)")
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                <FiInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-1 rounded-full border border-white hover:bg-white transition duration-300"
                style={{ color: "white" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--color-secondary)")
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                <FiMessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className=" bg-gray-100 py-3 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
          {/* Copyright text */}
          <p className="mb-2 md:mb-0" style={{ color: "var(--color-heading)" }}>
            Copyright 2025 © All rights reserved by Web Master
          </p>

          {/* Links and Payment Icons*/}
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="flex space-x-4">
              <a
                href="#"
                className="cursor-pointer hover:text-primary transition duration-200"
                style={{ color: "var(--color-heading)" }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="cursor-pointer hover:text-primary transition duration-200"
                style={{ color: "var(--color-heading)" }}
              >
                Terms and Conditions
              </a>
              <a
                href="#"
                className="cursor-pointer hover:text-primary transition duration-200"
                style={{ color: "var(--color-heading)" }}
              >
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
