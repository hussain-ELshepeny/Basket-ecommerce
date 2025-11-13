import ProductsSlider from "./ProductSlider"
import SectionHeading from "../shared/SectionHeading"
import { useEffect } from "react"
import { login } from "../../services/login"
export default function BestSellers() {
  useEffect(() => {
    async function name() {
      await login()
      console.log(localStorage.getItem("accessToken"))
    }
    name()
  }, [])

  return (
    <div className="section-container my-(--section-margin)">
      <SectionHeading
        headingText={"Best Sellers"}
        spanText={"Do not miss the current offers until the end of March."}
      />
      <ProductsSlider />
    </div>
  )
}
