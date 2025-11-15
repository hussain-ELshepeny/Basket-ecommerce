import { useCart } from "../../hooks/useCart"

export default function YellowProductButton({ color, productId }) {
  const { addToCart, removeFromCart, getCart } = useCart()
  const { data, isPending } = getCart
  const cart = data?.cart?.items || []
  // console.log(data)
  const {
    mutate: add,
    isPending: addPending,
    isSuccess: addSuccess,
  } = addToCart
  const { mutate: remove, isPending: removePending } = removeFromCart

  const userId = localStorage.getItem("userId")

  const cartItem = cart?.find(
    (item) => item.product?._id === productId || item.productId === productId
  )

  const quantity = cartItem?.quantity || 0

  const productData = {
    userId: `${userId}`,
    productId: `${productId}`,
    quantity: 1,
  }

  function handleIncrement() {
    add(productData)
  }

  if (addSuccess) {
    console.log(cart)
  }

  function handleDecrement() {
    remove(cartItem.id)
  }

  const isYellow = color === "yellow"

  const plusBtn =
    "cursor-pointer  w-8 h-8 text-center pb-1 rounded-full font-bold text-xl " +
    (isYellow ? "bg-[#FFD600] text-black" : "bg-primary text-white")

  const minusBtn =
    "cursor-pointer  w-8 h-8 text-center pb-1 rounded-full font-bold text-xl " +
    (isYellow ? "bg-[#ECECEC] text-black" : "bg-gray-200 text-black")

  const boxStyle =
    "w-10 text-center font-bold text-lg flex items-center justify-center"

  if (isPending) return null

  if (!cartItem) {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleIncrement()
        }}
        disabled={addPending}
        className={`block relative z-1 cursor-pointer font-semibold mt-[15px] mx-auto p-2 w-full duration-75 rounded-[30px] border 
          ${
            isYellow
              ? "bg-[#FFD600] hover:bg-yellow-500 border-[#EDEEF5]"
              : "bg-transparent text-primary hover:bg-primary hover:text-white border-primary"
          }
          ${addPending ? "opacity-50" : ""}
      `}
      >
        {addPending ? "Adding..." : "Add To Cart"}
      </button>
    )
  }

  return (
    <div className="flex items-center justify-between relative z-1 gap-3 mt-[15px] mx-auto w-full bg-white p-1 rounded-full shadow-sm border border-gray-200">
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleDecrement()
        }}
        disabled={removePending}
        className={`${minusBtn} ${removePending ? "opacity-50" : ""}`}
      >
        –
      </button>

      <div className={boxStyle}>{quantity}</div>

      <button
        onClick={(e) => {
          e.stopPropagation()
          handleIncrement()
        }}
        disabled={addPending}
        className={`${plusBtn} ${addPending ? "opacity-50" : ""}`}
      >
        +
      </button>
    </div>
  )
}
