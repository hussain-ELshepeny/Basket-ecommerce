import ProductsSlider from "./ProductSlider";
import SectionHeading from "../shared/SectionHeading";
import  login  from "../../../login";
import { useEffect } from "react";
import { FetchData } from "../../hooks/useFetchData";
export default function BestSellers() {
  const GET_ALL_PRODUCTS_URL = "https://e-commarce-website-eight.vercel.app/api/v1/product/get-all-product"


  useEffect(() => {
async function name() {
   await login()
   const data = await FetchData("https://e-commarce-website-eight.vercel.app/api/v1/category/get-category", localStorage.getItem("accessToken"))
   const data1 = await FetchData(GET_ALL_PRODUCTS_URL, localStorage.getItem("accessToken"))
   console.log(data)
   console.log(data1)
}    

name()
  }, []);



  return (
    <div className="section-container my-(--section-margin)">
      <SectionHeading
        headingText={"Best Sellers"}
        spanText={"Do not miss the current offers until the end of March."}
      />
      <ProductsSlider />
    </div>
  );
}
