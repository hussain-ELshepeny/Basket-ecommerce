import SideBar from "../components/shop-components/SideBar";
import { CiFilter } from "react-icons/ci";
import { useState } from "react"

export default function Shop() {
    const [isOpen, setIsOpen] = useState(false)

  return <section className="section-container py-10 grid grid-cols-1 sm:grid-cols-[1fr_4fr] gap-8">
      <button onClick={()=> setIsOpen(!isOpen)} className="block md:hidden">{<CiFilter />}</button>
      <SideBar isOpen={isOpen} />
    
      <div></div>
  </section>;
}
