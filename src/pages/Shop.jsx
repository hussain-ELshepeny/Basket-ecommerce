import SideBar from "../components/shop-components/SideBar"
import { CiFilter } from "react-icons/ci"
import { useState } from "react"
import SliderProductCard from "../components/home-components/SliderProductCard"
import { usePagination } from "../hooks/usePagination"
import PaginationControls from "../components/shared/PaginationControl"
import { BsGrid3X3Gap } from "react-icons/bs"
import { FiChevronDown } from "react-icons/fi"
import { useProducts } from "../hooks/useProducts"
import { useCategory } from "../hooks/useCategory"
import useFilterProducts from "../hooks/useFilterProducts"

export default function Shop() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [viewMode, setViewMode] = useState("grid") // 'grid' or 'list'
  const [sortBy, setSortBy] = useState("default")
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false)

  const { allProducts } = useProducts()
  const { data: productsData, isPending } = allProducts
  const products = productsData?.products || [] //question here
  console.log(productsData) //undefined

  // const { allCategory } = useCategory();
  // const { data: categories } = allCategory;
  // const categories = productsData?.products || []; //question here

  const { displayedProducts } = useFilterProducts(products)

  const sortOptions = [{ value: "default", label: "Default Sorting" }]

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    paginationRange,
    goToNext,
    goToPrev,
    goToPage,
  } = usePagination({
    totalItems: products.length,
    itemsPerPage: 12,
  })

  const currentProductItems = displayedProducts
    .slice(startIndex, endIndex)
    .map((product, i) => (
      <SliderProductCard key={i} color={"yellow"} product={product} />
    ))

  return (
    <section className="min-h-screen bg-gray-50/50">
      {/* Hero Banner */}
      <div className="relative bg-linear-to-r from-green-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url(/images/shop-bg.png)] bg-center bg-cover opacity-100"></div>
        <div className="section-container relative z-10 py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider animate-fade-in">
              Fresh & Organic
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 animate-slide-up">
              Organic Meals Prepared
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Delivered to <span className="text-green-600">your Home</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg animate-fade-in-delay">
              Fully prepared & delivered nationwide.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-6 lg:gap-8">
          {/* Sidebar */}
          <SideBar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          {/* Products Section */}
          <div className="space-y-6">
            {/* Toolbar */}
            <div className=" rounded-2xl p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                {/* Left Side - Products Count & Filter Button */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all font-medium"
                  >
                    <CiFilter className="text-xl" />
                    <span>Filters</span>
                  </button>

                  <div className="text-gray-600 font-medium text-standard">
                    <span className="text-gray-900 font-bold">
                      {products.length}
                    </span>{" "}
                    Products Found
                  </div>
                </div>

                {/* Right Side - Sort & View Mode */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  {/* Sort Dropdown */}
                  <div className="relative flex-1 sm:flex-initial">
                    <button
                      onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                      className="w-full sm:w-auto flex items-center justify-between gap-3 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all border border-gray-200 text-sm"
                    >
                      <span className="text-gray-600">Sort:</span>
                      <span className="font-medium text-gray-900">
                        {sortOptions
                          .find((opt) => opt.value === sortBy)
                          ?.label.split(",")[0] || "Default"}
                      </span>
                      <FiChevronDown
                        className={`transition-transform duration-300 ${sortDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {sortDropdownOpen && (
                      <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px] z-30 animate-slide-down">
                        {sortOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortBy(option.value)
                              setSortDropdownOpen(false)
                            }}
                            className={`w-full px-4 py-2.5 text-left hover:bg-primary/5 transition-colors text-sm ${
                              sortBy === option.value
                                ? "text-primary font-semibold bg-primary/5"
                                : "text-gray-700"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-1 border border-gray-200">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-lg transition-all ${
                        viewMode === "grid"
                          ? "bg-white text-primary shadow-sm"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      <BsGrid3X3Gap className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {isPending ? (
              <div className="loading-container flex flex-col items-center justify-center h-[65vh]">
                <div className="w-12 h-12 border-6 border-t-6 border-gray-300 border-t-primary rounded-full animate-spin mb-3"></div>
                <p className="loading-text text-heading font-bold text-lg">
                  fetching data...
                </p>
              </div>
            ) : products && products.length > 0 ? (
              <div
                className={`grid gap-4 sm:gap-5 ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    : "grid-cols-1"
                }`}
              >
                {currentProductItems}
              </div>
            ) : (
              <div className="text-center h-[50vh] font-bold italic flex items-center justify-center">
                <p className="text-red text-xl">No Data Found 📅</p>
              </div>
            )}

            {/* Pagination */}
            <div className="p-4">
              {
                <PaginationControls
                  goToPrev={goToPrev}
                  goToNext={goToNext}
                  currentPage={currentPage}
                  paginationRange={paginationRange}
                  goToPage={goToPage}
                  totalPages={totalPages}
                />
              }
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-delay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
