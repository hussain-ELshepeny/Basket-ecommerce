export default function CategoryCollections() {
const categories = [
  { title: "Biscuits & Snacks", items: 6, img: "/images/snacks.png" },
  { title: "Breads & Bakery", items: 6, img: "/images/bread.png" },
  { title: "Breakfast & Dairy", items: 8, img: "/images/milk.png" },
  { title: "Frozen Foods", items: 7, img: "/images/ice.png" },
  { title: "Fruits & Vegetables", items: 11, img: "/images/fruits.png" },
  { title: "Grocery & Staples", items: 7, img: "/images/grocery.png" },
  { title: "Household Needs", items: 1, img: "/images/household.png" },
  { title: "Meats & Seafood", items: 5, img: "/images/meat.png" },
];

  return (
    <section className="section-container py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 items-stretch">
     
        <div className="md:row-span-2 flex flex-col items-center text-center p-6 bg-white  border-[#E4E5EE] shadow-sm border">
          <img
            src="/public/images/7a55bff0ebdafabdcc6a6aeb8760f61cde9ab35b.png"
            alt="Beverages"
            className="w-full h-[220px] object-contain mb-4"
          />
          <h3 className="font-inter font-medium text-lg">Beverages</h3>
          <span className="text-sm text-gray-500">11 Items</span>
        </div>

        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-4 bg-white border border-[#E4E5EE] hover:shadow-md transition"
          >
            <img
              src={"/public/images/7a55bff0ebdafabdcc6a6aeb8760f61cde9ab35b.png"}
              alt={cat.title}
              className="w-20 h-20 object-contain"
            />
            <div className="flex-1">
              <h4 className="font-subHeading font-semibold text-standard">{cat.title}</h4>
              <p className="text-xs text-gray-500">{cat.items} Items</p>
            </div>
          </div>
        ))}
    </section>
  );
}
