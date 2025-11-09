
export default function CategorySection({heading, labels, productCount=null }) {
  return (
    <div> 
         <h2 className="uppercase font-dosis font-semibold mb-[15px] sm:mb-[22px] text-[15px] text-heading leading-[18px] tracking-normal uppercase align-middle"
>{heading}</h2>
<form>
  {labels.map((label, index)=> {
    return(<div key={index} className="flex items-center text-[#71778E] mb-[11px]">
      <input id={label} type="checkbox" value={label} name={heading} className="mr-[15px]" />
      <label className="flex-1" htmlFor={label}>{label}</label>
      {productCount && <span>({productCount[index]})</span> }
    </div>)
  })}
  </form>
    </div>
  )
}
