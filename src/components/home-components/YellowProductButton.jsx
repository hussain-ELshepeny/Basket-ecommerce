import { useCart } from "../../hooks/useCart"

export default function YellowProductButton({ color, productId }) {
  const { addToCart, removeFromCart, getCart } = useCart()
  const { data } = getCart
  const cart = data?.cart?.items
  // console.log(data)
  const { mutate: add, isPending: addPending } = addToCart
  const { mutate: remove, isPending: removePending } = removeFromCart

  const userId = localStorage.getItem("userId")
  // const cart = JSON.parse(localStorage.getItem("cart"))
  const productData = {
    userId: `${userId}`,
    productId: `${productId}`,
    quantity: 1,
  }
  // console.log("localStorage", cart)
  function handleAddProduct() {
    add(productData)
    console.log(cart)
  }
  function handleRemoveProduct() {
    const itemToDelete = cart?.find((item) => item.productId === productId) //question
    remove(itemToDelete?.id)
    console.log(cart)
  }

  const buttonContent = (
    <button
      onClick={() => {
        if (cart?.some((item) => item.productId === productId)) {
          handleRemoveProduct()
        } else {
          handleAddProduct()
        }
      }}
      disabled={
        cart?.some((item) => item.productId === productId)
          ? removePending
          : addPending
      }
      className={`block font-semibold mt-[15px] mx-auto p-2 w-full duration-75 rounded-[30px] border cursor-pointer 
        ${
          color === "yellow"
            ? "bg-star hover:bg-secondary hover:text-star border-[#EDEEF5]"
            : "bg-transparent text-primary hover:bg-primary hover:text-white border-primary"
        }
        ${addPending ? "opacity-50" : ""} 
      `}
    >
      {addPending
        ? "Adding To Cart..."
        : removePending
          ? "Removing From Cart..."
          : cart?.some((item) => item.productId === productId)
            ? "Remove From Cart"
            : "Add To Cart"}
    </button>
  )
  return buttonContent
}
