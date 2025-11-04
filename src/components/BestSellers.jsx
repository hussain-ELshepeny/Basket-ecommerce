import ProductsSlider from "./ProductSlider";
import SectionHeading from "./SectionHeading";

export default function BestSellers() {
  return (
    <div className="section-container my-[var(--section-margin)]">
      <SectionHeading
        headingText={"Best Sellers"}
        spanText={"Do not miss the current offers until the end of March."}
      />
      <ProductsSlider />
    </div>
  );
}
