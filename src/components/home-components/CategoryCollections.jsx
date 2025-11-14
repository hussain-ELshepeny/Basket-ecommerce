import { Link } from "lucide-react"
import { useCategory } from "../../hooks/useCategory"
import { useNavigate } from "react-router-dom"

export default function CategoryCollections() {
  const { allCategory, filterCategories } = useCategory()
  const { data: categoryData } = allCategory
  const categoriesBeforeFilter = categoryData?.categories
  const categories = filterCategories(categoriesBeforeFilter)
  const finalCategories = [...categories]
  console.log(finalCategories)
  const navigate = useNavigate()

  return (
    <section className="section-container py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 items-stretch">
      <div
        onClick={() => navigate("/shop")}
        className="md:row-span-2 flex flex-col items-center text-center p-6 bg-white  border-[#E4E5EE] shadow-sm border"
      >
        <img
          src={"/images/household.png"}
          alt={"household"}
          className="w-full h-[220px] object-contain mb-4"
        />
        <h3 className="font-inter font-medium text-lg">Household Needs</h3>
        <span className="text-sm text-gray-500">11 Items</span>
      </div>

      {finalCategories?.map((cat, idx) => (
        <div
          onClick={() => navigate("/shop")}
          key={idx}
          className="flex items-center gap-4 p-4 bg-white border border-[#E4E5EE] hover:shadow-md transition"
        >
          <img
            src={cat.Image.url}
            alt={cat.name}
            className="w-20 h-20 object-contain"
          />
          <div className="flex-1">
            <h4 className="font-subHeading font-semibold text-standard">
              {cat.name}
            </h4>
            <p className="text-xs text-gray-500">
              {Math.ceil(Math.random() * 30)} Items
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
