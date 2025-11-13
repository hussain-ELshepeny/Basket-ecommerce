import CategorySection from "./CategorySection"
import PriceFilter from "./PriceFilter"
import { AiOutlineClose } from "react-icons/ai"
import { MdOutlineRefresh } from "react-icons/md"
import { useBrand } from "../../hooks/useBrand"

export default function SideBar({
  isOpen,
  onClose,
  handleFilter,
  filterValue,
  handleApply,
  handleResetPrice,
  handleResetAll,
  setTempRange,
  tempRange,
}) {
  // const productCategories = [
  //   { id: 6, name: "Beverages" },
  //   { id: 7, name: "Biscuits & Snacks" },
  //   { id: 8, name: "Breads & Bakery" },
  //   { id: 9, name: "Breakfast & Dairy" },
  //   { id: 10, name: "Frozen Foods" },
  //   { id: 11, name: "Fruits & Vegetables" },
  //   { id: 12, name: "Grocery & Staples" },
  //   { id: 13, name: "Household Needs" },
  //   { id: 14, name: "Meats & Seafood" },
  // ];
  const productCategories = [
    {
      id: "690f258191cd3ea447416113",
      name: "Meats & Seafood",
      Image: {
        url: "https://res.cloudinary.com/do4ofiz1v/image/upload/v1762600314/y7cq3fsykptuc2xqpgc5.jpg",
        publicId: "y7cq3fsykptuc2xqpgc5",
      },
    },
    {
      id: "690f256891cd3ea447416111",
      name: "Grocery & Staples",
      Image: {
        url: "https://res.cloudinary.com/do4ofiz1v/image/upload/v1762600289/mfn9iguu5dofsnsaftsv.png",
        publicId: "mfn9iguu5dofsnsaftsv",
      },
    },
    {
      id: "690f254e91cd3ea44741610f",
      name: "Fruits & Vegetables",
      Image: {
        url: "https://res.cloudinary.com/do4ofiz1v/image/upload/v1762600263/iplonoufypiprk0sow0s.png",
        publicId: "iplonoufypiprk0sow0s",
      },
    },
    {
      id: "690f252f91cd3ea44741610d",
      name: "Frozen Foods",
      Image: {
        url: "https://res.cloudinary.com/do4ofiz1v/image/upload/v1762600232/zf1nngcofwfo24fsb2lm.png",
        publicId: "zf1nngcofwfo24fsb2lm",
      },
    },
    {
      id: "690f251391cd3ea44741610b",
      name: "Breakfast & Dairy",
      Image: {
        url: "https://res.cloudinary.com/do4ofiz1v/image/upload/v1762600203/xi8jobumap8zjge4nqpe.png",
        publicId: "xi8jobumap8zjge4nqpe",
      },
    },
    {
      id: "690f24ed91cd3ea447416109",
      name: "Breads & Bakery",
      Image: {
        url: "https://res.cloudinary.com/do4ofiz1v/image/upload/v1762600166/wimjv68e7whn45sllyzy.jpg",
        publicId: "wimjv68e7whn45sllyzy",
      },
    },
    {
      id: "690f24ab91cd3ea447416106",
      name: "Beverages",
      Image: {
        url: "https://res.cloudinary.com/do4ofiz1v/image/upload/v1762600100/vvwydxc6oqovmmv0xlf7.png",
        publicId: "vvwydxc6oqovmmv0xlf7",
      },
    },
    {
      id: "690f247791cd3ea447416104",
      name: "Biscuits & Snacks",
      Image: {
        url: "https://res.cloudinary.com/do4ofiz1v/image/upload/v1762600048/hivylc03ic0z8lwejfez.png",
        publicId: "hivylc03ic0z8lwejfez",
      },
    },
  ]

  // const { allBrand } = useBrand();
  // const { data } = allBrand;
  // const brandCategories = data?.brands || []; //question here
  // console.log(data);
  // const brandCategories = [
  //   {
  //     id: "6914937e9427b320c82367e7",
  //     // id: "68eac36b67a885482f42180b",
  //     name: "Frito Lay",
  //     createdAt: "2025-11-12T14:02:38.997Z",
  //     updatedAt: "2025-11-12T14:02:38.997Z",
  //     __v: 0,
  //   },
  //   {
  //     // id: "691493739427b320c82367e3",
  //     id: "68eac36b67a885482f42180b",
  //     name: "Welchs",
  //     createdAt: "2025-11-12T14:02:27.497Z",
  //     updatedAt: "2025-11-12T14:02:27.497Z",
  //     __v: 0,
  //   },
  //   {
  //     id: "691493659427b320c82367d9",
  //     name: "Quaker",
  //     createdAt: "2025-11-12T14:02:13.748Z",
  //     updatedAt: "2025-11-12T14:02:13.748Z",
  //     __v: 0,
  //   },
  //   {
  //     id: "6914930265a44e1f6c80100a",
  //     name: "Cola",
  //     createdAt: "2025-11-12T14:00:34.538Z",
  //     updatedAt: "2025-11-12T14:00:34.538Z",
  //     __v: 0,
  //   },
  //   {
  //     id: "68eb904d12f98c99f63ca7fc",
  //     name: "Orea",
  //     createdAt: "2025-10-12T11:26:05.584Z",
  //     updatedAt: "2025-10-12T11:26:05.584Z",
  //     __v: 0,
  //   },
  // ];

  const allCategories = [...productCategories]
  const availabilityOptions = [
    { id: 1, name: "In stock", count: 32 },
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
            <button
              onClick={() => handleResetAll()}
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <MdOutlineRefresh className="text-lg" />
              Reset
            </button>
          </div>

          {/* Filter Sections */}
          <div className="space-y-8 lg:space-y-6">
            <CategorySection
              heading="Product Categories"
              items={allCategories}
              type="category"
              handleFilter={handleFilter}
              filterValue={filterValue}
            />

            {/* <CategorySection
              heading="Brands"
              items={brandCategories}
              type="brand"
            /> */}

            <PriceFilter
              handleApply={handleApply}
              handleResetPrice={handleResetPrice}
              setTempRange={setTempRange}
              tempRange={tempRange}
            />

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
