export default function DiscountCard({discountImgUrl,discountTitle, discountQuote}) {
  return (
    <div className="bg-center bg-cover bg-no-repeat w-[100%] h-[218px] sm:block flex items-center rounded-lg" style={{backgroundImage: `${discountImgUrl}`}} >
      <div className="sm:py-[40px] sm:pl-[40px] pl-[20px] py-[20px]">
      <p className="font-body font-semibold text-standard text-[#00B853] leading-[21px] tracking-normal uppercase mb-[10px]">weekend discount 40%</p>
      <h2 className="text-secondary font-subHeading font-semibold text-[24px] leading-[28.8px] tracking-[-0.8px] mb-[8px]">{discountTitle}</h2>
      <p className="font-subHeading font-normal text-[12px] text-subHeading leading-[18px] tracking-[-0.1px] mb-[20px]">{discountQuote}</p>
      <button className="bg-[#C2C2D3] font-subHeading font-medium text-[12px] leading-[18px] tracking-[-0.1px] text-white px-[21px] py-[10px] rounded-3xl ">Shop Now</button>
      </div>
    </div>
  )
}
