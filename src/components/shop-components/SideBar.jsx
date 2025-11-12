import CategorySection from "./CategorySection"
import PriceFilter from "./PriceFilter"
import { AiOutlineClose } from "react-icons/ai"
import { MdOutlineRefresh } from "react-icons/md"

export default function SideBar({ isOpen, onClose }) {
  const productCategories = [
    { id: 1, name: "Beverages" },
    { id: 2, name: "Biscuits & Snacks" },
    { id: 3, name: "Breads & Bakery" },
    { id: 4, name: "Breakfast & Dairy" },
    { id: 5, name: "Frozen Foods" },
    { id: 6, name: "Fruits & Vegetables" },
    { id: 7, name: "Grocery & Staples" },
    { id: 8, name: "Household Needs" },
    { id: 9, name: "Meats & Seafood" },
  ]

  const brandCategories = [
    { id: 1, name: "Frito Lay", count: 8 },
    { id: 2, name: "Quaker", count: 36 },
    { id: 3, name: "Cola", count: 1 },
    { id: 4, name: "Welch's", count: 1 },
    { id: 5, name: "Oreo", count: 16 },
  ]

  const availabilityOptions = [
    { id: 1, name: "In stock", count: 62 },
    { id: 2, name: "Out of stock", count: 0 },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 left-0 h-full lg:h-auto w-[320px] lg:w-auto
          z-50 lg:z-0 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          overflow-y-auto lg:overflow-visible
          
        `}
      >
        <div className="lg:space-y-6 p-5 lg:p-0 bg-white">
          {/* Mobile Header */}
          <div className="flex lg:hidden items-center justify-between pb-5 border-b border-gray-100 sticky top-0 bg-white z-10 -mx-5 px-5 -mt-5 pt-5">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <AiOutlineClose className="text-xl text-gray-600" />
            </button>
          </div>

          {/* Reset Filters Button */}
          <div className="hidden lg:flex items-center justify-between pb-4 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">Filters</h3>
            <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
              <MdOutlineRefresh className="text-lg" />
              Reset
            </button>
          </div>

          {/* Filter Sections */}
          <div className="space-y-8 lg:space-y-6">
            <CategorySection
              heading="Product Categories"
              items={productCategories}
              type="category"
            />

            <CategorySection
              heading="Brands"
              items={brandCategories}
              type="brand"
            />

            <PriceFilter />

            <CategorySection
              heading="Availability"
              items={availabilityOptions}
              type="availability"
            />

            {/* Promotional Banner */}
            <div className=" overflow-hidden  hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  src="/images/offer2.png"
                  alt="Special Offer"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x400/10B981/ffffff?text=Special+Offer"
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Mobile Apply Button */}
          <div className="lg:hidden sticky bottom-0 bg-white border-t border-gray-100 -mx-5 px-5 py-4 mt-6">
            <div className="flex gap-3">
              <button
                // onClick={handleResetFilters}
                className="flex-1 px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Reset
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </aside>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
