import ProductsSlider from "./ProductSlider";
import SectionHeading from "../shared/SectionHeading";
import  login  from "../../../login";
export default function BestSellers() {
  const GET_ALL_PRODUCTS_URL = "https://e-commarce-website-eight.vercel.app/api/v1/product/get-all-product"
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
