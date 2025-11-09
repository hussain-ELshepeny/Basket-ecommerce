export default function PriceFilter() {
  return (
    <div>
      <h2 className="uppercase font-dosis font-semibold mb-[15px] sm:mb-[22px] text-[15px] text-heading leading-[18px] tracking-normal uppercase align-middle">price</h2>
        <div className="flex justify-between items-center">
          <div>
            <label className="block mb-1.5 text-[#71778E] font-subHeading font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle ">from</label>
            <input type="number" placeholder="0" placeholder:text-subHeading className="max-w-[116px] py-[12px] px-[16px] rounded-md bg-[#F3F4F7]" min={0} />
          </div>
          <span className="block mt-4 mx-4">-</span>
          <div>
            <label className="block mb-1.5 text-[#71778E] font-subHeading font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle ">to</label>
            <input type="number" placeholder="65.00" placeholder:text-subHeading className="max-w-[116px] py-[12px] px-[16px] rounded-md bg-[#F3F4F7]" min={0}/>
          </div>
        </div>
    </div>
  )
}
