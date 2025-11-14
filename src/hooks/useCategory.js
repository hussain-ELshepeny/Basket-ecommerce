import { useQuery } from "@tanstack/react-query"
import { getData } from "../services/fetchData"
export function useCategory() {
  const GET_CATEGORY =
    "https://e-commarce-website-eight.vercel.app/api/v1/category/get-category"
  const accessToken = localStorage.getItem("accessToken")
  const allCategory = useQuery({
    queryKey: ["categories"],
    queryFn: () => getData(GET_CATEGORY, accessToken),
    staleTime: 1000 * 60 * 5,
  })

  function filterCategories(categoriesBeforeEdit = []) {
    return categoriesBeforeEdit?.filter(
      (cat, index, self) => index === self.findIndex((c) => c.name === cat.name)
    )
  }

  return { allCategory, filterCategories }
}
