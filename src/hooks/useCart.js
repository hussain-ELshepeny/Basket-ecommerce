import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteData, getData, postData } from "../services/fetchData"

export function useCart() {
  const queryClient = useQueryClient()

  const GET_CART =
    "https://e-commarce-website-eight.vercel.app/api/v1/cart/get-cart"

  // const GET_ALL_CART_PRODUCTS =
  //   "https://e-commarce-website-eight.vercel.app/api/v1/cart/get-all-product-in-cart"

  const ADD_PRODUCTS_TO_CART =
    "https://e-commarce-website-eight.vercel.app/api/v1/cart/add-cart"

  const DELETE_PRODUCT_FROM_CART =
    "https://e-commarce-website-eight.vercel.app/api/v1/cart/remove/68ffd47eff7d8218b1d94fa1"

  const CLEAR_CART =
    "https://e-commarce-website-eight.vercel.app/api/v1/cart/clear-Cart"

  const accessToken = localStorage.getItem("accessToken")

  // const allCartProducts = useQuery({
  //   queryKey: ["cart-products"],
  //   queryFn: () => getData(GET_ALL_CART_PRODUCTS, { value: accessToken }),
  //   staleTime: 1000 * 60 * 5,
  // })

  const getCart = useQuery({
    queryKey: ["cart"],
    queryFn: () => getData(GET_CART, { value: accessToken }),
    staleTime: 1000 * 60 * 5,
  })

  const addToCart = useMutation({
    mutationFn: (data) =>
      postData(
        ADD_PRODUCTS_TO_CART,
        { value: localStorage.getItem("accessToken") },
        data
      ),

    onSuccess: () => {
      console.log("✅ Product added successfully!")
      queryClient.invalidateQueries({ queryKey: ["cart"] })
    },
    onError: (error) => {
      console.error("❌ Failed to add product:", error.message)
    },
  })

  const removeFromCart = useMutation({
    mutationFn: (productId) =>
      deleteData(
        `${DELETE_PRODUCT_FROM_CART}/${productId}`,
        localStorage.getItem("accessToken")
      ),
    onSuccess: () => {
      console.log("🗑️ Product removed successfully!")
      queryClient.invalidateQueries(["cart"])
    },
    onError: (error) => {
      console.error("❌ Failed to remove product:", error.message)
    },
  })

  const clearCart = useMutation({
    mutationFn: () =>
      deleteData(CLEAR_CART, localStorage.getItem("accessToken")),
    onSuccess: () => {
      console.log("🗑️ Cart Cleared successfully!")
      queryClient.invalidateQueries(["cart"])
    },
    onError: (error) => {
      console.error("❌ Failed to clear product:", error.message)
    },
  })

  return { addToCart, getCart, removeFromCart, clearCart }
}
