import { Link } from "react-router-dom"
import SectionHeading from "../shared/SectionHeading"
import SliderProductCard from "./SliderProductCard"
import { useProducts } from "../../hooks/useProducts"
export default function Category({
  headingText,
  spanText,
  imageUrl,
  secHead,
  categoryId,
}) {
  const { productByCategory } = useProducts(categoryId)
  const { data: productsData } = productByCategory
  const products = productsData?.products || []
  console.log(products)

  return (
    <section className="section-container">
      <SectionHeading headingText={headingText} spanText={spanText} />
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <div className="sm:col-span-2 sm:row-span-2 h-auto ">
          <div
            className={`bg-center bg-no-repeat bg-cover relative`}
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/17 z-0"></div>
            <div className="pt-10 pb-[35.5vh] px-8 relative z-10">
              <p className="capitalize font-medium">Weekly Discounts on</p>
              <h1 className="text-2xl font-bold pt-1 pb-2 text-secondary">
                {secHead}
              </h1>
              <p className="font-medium mb-5 text-standard text-heading">
                Bacola Weekend Discount
              </p>
              <Link
                className="capitalize flex items-center gap-2 bg-buttonBackground/90 text-white py-2 px-4 hover:bg-buttonBackground rounded-full w-fit"
                to={"/shop"}
              >
                Shop now
              </Link>
            </div>
          </div>
          <ul className="py-[35px] px-[30px] grid grid-cols-2 gap-3">
            <li className="text-standard text-[#3E445A]">Beverages</li>
            <li className="text-standard text-[#3E445A]">Biscuits & Snacks</li>
            <li className="text-standard text-[#3E445A]">Breads & Bakery</li>
            <li className="text-standard text-[#3E445A]">Breakfast & Dairy</li>
            <li className="text-standard text-[#3E445A]">Frozen Foods</li>
            <li className="text-standard text-[#3E445A]">
              Fruits & Vegetables
            </li>
            <li className="text-standard text-[#3E445A]">Grocery & Staples</li>
            <li className="text-standard text-[#3E445A]">Household Needs</li>
            <li className="text-standard text-[#3E445A]">Meats & Seafood</li>
          </ul>
        </div>
        {products?.slice(1, 9).map((product, index) => (
          <SliderProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  )
}
