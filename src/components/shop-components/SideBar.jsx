import CategorySection from "./CategorySection"
import PriceFilter from "./PriceFilter"

export default function SideBar({isOpen}) {

  const productCategories = ["Beverages","Biscuits & Snacks", "Breads & Bakery","Breakfast & Dairy","Frozen Foods","Fruits & Vegetables","Grocery & Staples","Household Needs","Meats & Seafood"]
  const brandCategories = ["Frito Lay","Quaker", "Cola","Welch's","Oreo"]
  const availabilityCategories = ["In stock","Out of stock"]
  const productCount = [8, 36, 1, 1, 16]
  if(isOpen) return (
    <aside className="max-w-[300px] space-y-[62px]">
      <CategorySection heading={"product categories"} labels={productCategories}/>
      <CategorySection heading={"brands"} labels={brandCategories} productCount={productCount}/>
      <PriceFilter />
      <CategorySection heading={"availability"} labels={availabilityCategories} productCount={[62, 0]}/>
      <div><img src="/public/images/offer2.png" alt="offer2" /></div>
    </aside>
  )
}
