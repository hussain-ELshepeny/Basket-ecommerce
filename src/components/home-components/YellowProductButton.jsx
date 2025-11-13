import { useCart } from "../../hooks/useCart"

export default function YellowProductButton({ color, productId }) {
  const { addToCart } = useCart()
  const { mutate, isSuccess, isPending } = addToCart

  const userId = localStorage.getItem("userId")

  const productData = {
    userId: `${userId}`,
    productId: `${productId}`,
    quantity: 1,
  }

  function handleAddProduct() {
    mutate(productData)
  }

  const buttonContent = (
    <button
      onClick={handleAddProduct}
      disabled={isPending}
      className={`block font-semibold mt-[15px] mx-auto p-2 w-full duration-75 rounded-[30px] border cursor-pointer 
        ${
          color === "yellow"
            ? "bg-star hover:bg-secondary hover:text-star border-[#EDEEF5]"
            : "bg-transparent text-primary hover:bg-primary hover:text-white border-primary"
        }
        ${isPending ? "opacity-50" : ""} 
      `}
    >
      {isPending
        ? "Adding To Cart..."
        : isSuccess
          ? "Remove From Cart"
          : "Add To Cart"}
    </button>
  )
  return buttonContent
}
