import { getData } from "../services/fetchData";
import { useQuery } from "@tanstack/react-query";
export function useProducts(categoryId = null, productId = null) {
  const GET_PRODUCT_BY_CATEGORY =
    "https://e-commarce-website-eight.vercel.app/api/v1/product/category";
  const GET_ALL_PRODUCT =
    "https://e-commarce-website-eight.vercel.app/api/v1/product/get-all-product";
  const GET_PRODUCT_BY_ID =
    "https://e-commarce-website-eight.vercel.app/api/v1/product/get-product";
  const GET_BEST_SELLERS =
    "https://e-commarce-website-eight.vercel.app/api/v1/product/get-bestseller";

  const productByCategory = useQuery({
    queryKey: ["products", categoryId],
    queryFn: () =>
      getData(
        `${GET_PRODUCT_BY_CATEGORY}/${categoryId}`,
        localStorage.getItem("accessToken")
      ),
    enabled: !!categoryId,
    staleTime: 1000 * 60 * 5,
  });

  const productById = useQuery({
    queryKey: ["product", productId],
    queryFn: () =>
      getData(
        `${GET_PRODUCT_BY_ID}/${productId}`,
        localStorage.getItem("accessToken")
      ),
    enabled: !!productId,
    staleTime: 1000 * 60 * 5,
  });

  const allProducts = useQuery({
    queryKey: ["all-products"],
    queryFn: () =>
      getData(GET_ALL_PRODUCT, localStorage.getItem("accessToken")),

    staleTime: 1000 * 60 * 5,
  });

  const bestSellers = useQuery({
    queryKey: ["best-sellers"],
    queryFn: () =>
      getData(GET_BEST_SELLERS, localStorage.getItem("accessToken")),

    staleTime: 1000 * 60 * 5,
  });

  return {
    productByCategory,
    allProducts,
    productById,
    bestSellers,
  };
}
