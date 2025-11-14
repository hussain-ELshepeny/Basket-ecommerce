export default function OrderSummary({ count, total }) {
  return (
    <div className="space-y-4 w-full ">
      {/* Subtotal / Shipping */}
      <div className="space-y-2 text-sm font-roboto leading-[21px] text-gray-700">
        <div className="flex justify-between">
          {/* <span>Subtotal · {cart.length} items</span> */}
          <span>Subtotal · {count} items</span>
          <span>${total}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-gray-900">Free</span>
        </div>
      </div>

      {/* TOTAL */}
      <div className="pt-4">
        <div className="flex justify-between items-center">
          <h3 className="font-roboto font-bold text-[19px] leading-[28.5px]">
            Total
          </h3>

          <div className="text-right">
            <span className="text-xs text-gray-400 mr-1">USD</span>
            <span className="font-roboto font-bold text-[19px] leading-[28.5px]">
              ${total}
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-1">Including $2.46 in taxes</p>
      </div>
    </div>
  )
}
