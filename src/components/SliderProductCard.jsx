import Rating from "./Rating";
import YellowProductButton from "./YellowProductButton";
export default function SliderProductCard() {
  return (
    <div className="px-[10px] pt-[10px] pb-[20px] sm:px-[20px] sm:pt-[20px] sm:pb-[36px] border border-[#EDEEF5]">
      <div className="img-container">
        <img src="/public/images/product-image.png" alt="product" />
        <p className="text-standard font-subHeading font-medium leading-[1.4] mb-[5px] md:mb-[8px]">
          All Natural Italian-Style Chicken Meatballs
        </p>
        <span className="text-[#00B853] font-body font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase mb-[13px] md:mb[18px]">
          In Stock
        </span>
        <Rating rating={3} reviews={20} />

        <span className=" inline-block mr-[8px] font-body font-semibold text-[15.3px] text-[#C2C2D3] leading-[22.95px] tracking-[-0.1px] text-right align-middle line-through ">
          $9.35
        </span>
        <span className="font-body font-semibold text-[18px] text-red leading-[27px] tracking-[-0.1px] align-middle">
          $7.25
        </span>
        <YellowProductButton />
      </div>
    </div>
  );
}
