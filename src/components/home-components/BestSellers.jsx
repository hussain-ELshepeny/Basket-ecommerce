import ProductsSlider from "./ProductSlider";
import SectionHeading from "../shared/SectionHeading"
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function BestSellers() {
  return (
    <div className="section-container my-[var(--section-margin)]">
   <div className="flex justify-between items-center">
       <SectionHeading
        headingText={"Best Sellers"}
        spanText={"Do not miss the current offers until the end of March."}
      />
    <button className="flex gap-2 items-center cursor-pointer rounded-[30px] px-5 py-1 border border-[#D9D9E9] text-[#9B9BB4]">View All <MdOutlineArrowRightAlt /> </button>
   </div>
      <ProductsSlider />
    </div>
  );
}
