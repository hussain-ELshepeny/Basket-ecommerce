import { useQuery } from "@tanstack/react-query";
import { getData } from "../services/fetchData";
export function useBlog() {
  const GET_ALL_BLOGS_URL =
    "https://e-commarce-website-eight.vercel.app/api/v1/blog/get-all-blog";

  const allBlogs = useQuery({
    queryKey: ["blogs"],
    queryFn: () =>
      getData(GET_ALL_BLOGS_URL, localStorage.getItem("accessToken")),

    staleTime: 1000 * 60 * 5,
  });
  return { allBlogs };
}
