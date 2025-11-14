import { getData } from "../services/fetchData"
import { useQuery } from "@tanstack/react-query"
export function useProducts(categoryId = null, productId = null) {
  const BASE_URL = "https://e-commarce-website-eight.vercel.app/api/v1/product"
  const endpoints = {
    all: `${BASE_URL}/get-all-product`,
    byCategory: `${BASE_URL}/category`,
    byId: `${BASE_URL}/get-product`,
    bestSellers: `${BASE_URL}/get-bestseller`,
  }
  const accessToken = localStorage.getItem("accessToken")
  const GET_PRODUCT_BY_CATEGORY =
    "https://e-commarce-website-eight.vercel.app/api/v1/product/category"
  const GET_ALL_PRODUCT =
    "https://e-commarce-website-eight.vercel.app/api/v1/product/get-all-product"
  const GET_PRODUCT_BY_ID =
    "https://e-commarce-website-eight.vercel.app/api/v1/product/get-product"
  const GET_BEST_SELLERS =
    "https://e-commarce-website-eight.vercel.app/api/v1/product/get-bestseller"

  const productByCategory = useQuery({
    queryKey: ["products", categoryId],
    queryFn: () =>
      getData(`${endpoints.byCategory}/${categoryId}`, accessToken),
    enabled: !!categoryId,
    staleTime: 1000 * 60 * 5,
  })

  const productById = useQuery({
    queryKey: ["product", productId],
    queryFn: () =>
      getData(`${endpoints.byCategory}/${categoryId}`, accessToken),
    enabled: !!productId,
    staleTime: 1000 * 60 * 5,
  })

  const allProducts = useQuery({
    queryKey: ["all-products"],
    queryFn: () => getData(GET_ALL_PRODUCT, accessToken),

    staleTime: 1000 * 60000 * 5, // what is the dafault
  })

  const bestSellers = useQuery({
    queryKey: ["best-sellers"],
    queryFn: () => getData(GET_BEST_SELLERS, accessToken),

    staleTime: 1000 * 60 * 5,
  })

  return {
    productByCategory,
    allProducts,
    productById,
    bestSellers,
    products: allProducts.data?.products || [],
    isPending: allProducts.isPending,
  }
}
