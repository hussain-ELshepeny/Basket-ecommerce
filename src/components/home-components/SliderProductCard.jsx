import Rating from "../shared/Rating"
import YellowProductButton from "./YellowProductButton"
export default function SliderProductCard({ color, product }) {
  return (
    <div className="px-2.5 pt-2.5 pb-5 sm:px-5 sm:pt-5 sm:pb-9 border border-[#EDEEF5] ">
      <div className="flex flex-col gap-10px justify-between h-full">
        <img src={product?.Image.url} alt="product" />
        <p className="text-standard font-subHeading font-medium leading-[1.4] mb-[5px] md:mb-2">
          {product?.Name}
        </p>
        <span className="text-[#00B853] font-body font-semibold text-[11px] leading-[16.5px] tracking-[-0.1px] uppercase mb-[13px] md:mb[18px]">
          {product?.available}
        </span>
        <Rating reviews={product?.review} />

        {/* <span className=" inline-block mr-2 font-body font-semibold text-[15.3px] text-[#C2C2D3] leading-[22.95px] tracking-[-0.1px] text-right align-middle line-through ">
          $9.35
        </span> */}
        <span className="font-body font-semibold block mx-auto text-[18px] text-red leading-[27px] tracking-[-0.1px] align-middle">
          ${product?.Price}
        </span>
        <YellowProductButton color={color} productId={product?._id} />
      </div>
    </div>
  )
}
