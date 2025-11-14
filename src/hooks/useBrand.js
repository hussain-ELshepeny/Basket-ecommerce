import { useQuery } from "@tanstack/react-query"
import { getData } from "../services/fetchData"

export function useBrand() {
  const GET_ALL_BRAND =
    "https://e-commarce-website-eight.vercel.app/api/v1/brand/get-all-brand"
  const accessToken = localStorage.getItem("accessToken")
  const allBrand = useQuery({
    queryKey: ["brands"],
    queryFn: () => getData(GET_ALL_BRAND, accessToken),
    staleTime: 1000 * 60 * 5,
  })

  return { allBrand }
}
