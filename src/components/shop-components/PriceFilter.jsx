import { FiDollarSign } from "react-icons/fi"

export default function PriceFilter({
  handleApply,
  handleResetPrice,
  setTempRange,
  tempRange,
}) {
  return (
    <div className="bg-white lg:bg-transparent rounded-xl lg:rounded-none border-b border-gray-100 pb-6">
      {/* Header */}
      <h2 className="text-base lg:text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
        Price Range
      </h2>

      {/* Price Inputs */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          {/* Min Price */}
          <div className="flex-1">
            <label className="block text-xs text-gray-500 mb-2 font-medium">
              Min Price
            </label>
            <div className="relative">
              <FiDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                value={tempRange.min}
                onChange={(e) =>
                  setTempRange({
                    ...tempRange,
                    min: Math.max(0, Number(e.target.value)),
                  })
                }
                className="w-full pl-9 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm font-medium"
                min={0}
                max={tempRange.max}
              />
            </div>
          </div>

          {/* Separator */}
          <div className="text-gray-400 font-bold mt-6">—</div>

          {/* Max Price */}
          <div className="flex-1">
            <label className="block text-xs text-gray-500 mb-2 font-medium">
              Max Price
            </label>
            <div className="relative">
              <FiDollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                value={tempRange.max}
                onChange={(e) =>
                  setTempRange({ ...tempRange, max: Number(e.target.value) })
                }
                className="w-full pl-9 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-sm font-medium"
                min={tempRange.min}
              />
            </div>
          </div>
        </div>

        {/* Range Slider Visual */}
        <div className="pt-2">
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-linear-to-r from-primary to-primary/80 transition-all duration-300"
              style={{
                left: `${(tempRange.min / 1000) * 100}%`,
                width: `${((tempRange.max - tempRange.min) / 1000) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Current Range Display */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            Range:{" "}
            <span className="font-bold text-primary">${tempRange.min}</span>
          </span>
          <span className="text-gray-600">
            to <span className="font-bold text-primary">${tempRange.max}</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={handleResetPrice}
            className="flex-1 cursor-pointer px-4 py-2 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium text-sm"
          >
            Reset
          </button>
          <button
            onClick={handleApply}
            className="flex-1 cursor-pointer px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium text-sm shadow-lg shadow-primary/20"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
