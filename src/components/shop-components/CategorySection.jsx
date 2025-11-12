import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useProducts } from "../../hooks/useProducts";
import useFilterProducts from "../../hooks/useFilterProducts";

export default function CategorySection({ heading, items, type }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const displayItems = showAll ? items : items.slice(0, 5);
  const hasMore = items.length > 5;

  const { allProducts } = useProducts();
  const { data: productsData } = allProducts;
  const products = productsData?.products || [];
  const { handleFilter, filterValue } = useFilterProducts(products);

  return (
    <div className="bg-white lg:bg-transparent rounded-xl lg:rounded-none border-b border-gray-100 pb-6">
      {/* Section Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between mb-4 group"
      >
        <h2 className="text-base lg:text-lg font-bold text-gray-900 uppercase tracking-wide">
          {heading}
        </h2>
        <div className="text-gray-400 group-hover:text-primary transition-colors">
          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </button>

      {/* Items List */}
      <div
        className={`space-y-3 overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {displayItems.map((item, index) => (
          <label
            key={index}
            className="flex items-center justify-between cursor-pointer group hover:bg-primary/5 p-2 rounded-lg transition-all"
          >
            <div className="flex items-center gap-3 flex-1">
              {/* Custom Checkbox */}
              <div className="relative">
                <input
                  type="checkbox"
                  checked={filterValue.includes(item.id)}
                  onChange={() => handleFilter(item.id)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                  {selectedItems.includes(item.name) && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </div>
              </div>

              {/* Label */}
              <span
                className={`text-sm transition-colors ${
                  selectedItems.includes(item.name)
                    ? "text-primary font-semibold"
                    : "text-gray-700 group-hover:text-primary"
                }`}
              >
                {item.name}
              </span>
            </div>

            {/* Count Badge */}
            {item.count !== undefined && (
              <span
                className={`text-xs px-2 py-1 rounded-full transition-all ${
                  selectedItems.includes(item.name)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {item.count}
              </span>
            )}
          </label>
        ))}

        {/* Show More/Less Button */}
        {hasMore && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full text-sm text-primary hover:text-primary/80 font-medium pt-2 flex items-center justify-center gap-2 transition-colors"
          >
            {showAll ? (
              <>
                <span>Show Less</span>
                <FiChevronUp className="text-lg" />
              </>
            ) : (
              <>
                <span>Show More ({items.length - 5})</span>
                <FiChevronDown className="text-lg" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
