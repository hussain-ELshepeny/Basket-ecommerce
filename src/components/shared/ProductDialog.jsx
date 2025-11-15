import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { useCart } from "../../hooks/useCart"
export default function ProductDialog({ open, product }) {
  const { addToCart, removeFromCart, getCart } = useCart()
  const { data } = getCart
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
    (item) =>
      item.product?._id === product?._id || item.productId === product?._id
  )

  const quantity = cartItem?.quantity || 0

  const productData = {
    userId: `${userId}`,
    productId: `${product?._id}`,
    quantity: 1,
  }

  function handleIncrement() {
    add(productData)
  }

  if (addSuccess) {
    console.log(cart, "from Dialog")
  }

  function handleDecrement() {
    remove(cartItem.id)
  }

  // const [quantity, setQuantity] = useState(1)
  console.log("rendered")

  return (
    <Dialog open={open}>
      <DialogContent className="max-w-[1200px]  w-[90%]  sm:w-full max-h-[90vh] bg-white  overflow-y-auto p-8 rounded-2xl">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <img
              src={product?.Image.url}
              alt={product?.name}
              className="w-full"
            />
          </div>

          {/* RIGHT: INFO + ACTIONS */}
          <div className="flex flex-col  w-full items-center">
            <h2 className="text-2xl font-semibold">{product?.Name}</h2>
            <p className="text-3xl text-red mt-2 font-medium">
              ${product?.Price}
            </p>

            {/* Variants */}
            <div className="mt-4">
              <p className="font-medium mb-2">
                Availability: {product?.available}
              </p>
            </div>

            {/* Quantity */}
            <div className="flex w-full justify-around  items-center gap-4 mt-6">
              <button
                className="border w-9 h-9 cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation()
                  handleDecrement()
                }}
              >
                –
              </button>

              <span className="text-xl font-medium">{quantity}</span>

              <button
                className="border w-9 h-9 cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation()
                  handleIncrement()
                }}
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              disabled={cartItem?.quantity > 0}
              onClick={(e) => {
                e.stopPropagation()
                handleIncrement()
              }}
              className={`${cartItem?.quantity > 0 ? `opacity-50 cursor-not-allowed` : ""}    bg-primary text-white w-full py-3 rounded-full mt-6 font-semibold hover:bg-primary/90 transition`}
            >
              Add to Cart
            </button>

            {/* Wishlist + Share */}
            {/* <div className="flex items-center gap-4 mt-4">
              <button className="border rounded-full px-6 py-2 hover:bg-gray-100">
                Wishlist
              </button>
              <button className="border rounded-full px-6 py-2 hover:bg-gray-100">
                Share
              </button>
            </div> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
