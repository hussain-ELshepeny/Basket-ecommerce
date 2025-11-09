import Rating from "../shared/Rating"
import YellowProductButton from "./YellowProductButton"
export default function SliderProductCard({ color }) {
  return (
    <div className="px-2.5 pt-2.5 pb-5 sm:px-5 sm:pt-5 sm:pb-9 border border-[#EDEEF5] ">
      <div className="img-container">
        <img src="/images/product-image.png" alt="product" />
        <p className="text-standard font-subHeading font-medium leading-[1.4] mb-[5px] md:mb-2">
          All Natural Italian-Style Chicken Meatballs
        </p>
        <span className="text-[#00B853] font-body font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase mb-[13px] md:mb[18px]">
          In Stock
        </span>
        <Rating rating={3} reviews={20} />

        <span className=" inline-block mr-2 font-body font-semibold text-[15.3px] text-[#C2C2D3] leading-[22.95px] tracking-[-0.1px] text-right align-middle line-through ">
          $9.35
        </span>
        <span className="font-body font-semibold text-[18px] text-red leading-[27px] tracking-[-0.1px] align-middle">
          $7.25
        </span>
        <YellowProductButton color={color} />
      </div>
    </div>
  )
}
