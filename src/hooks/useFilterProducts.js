import { useState } from "react"
export default function useFilterProducts(products, minPrice, maxPrice) {
  const [filterValue, setFilterValue] = useState([])
  // filter value is the category id not the name
  const handleFilter = (categoryId) => {
    setFilterValue((prevFilterValue) => {
      return prevFilterValue.includes(categoryId)
        ? prevFilterValue.filter((id) => id !== categoryId)
        : [...prevFilterValue, categoryId]
    })
  }

  // console.log(filterValue)

  function filterProducts() {
    if (filterValue.length === 0) return products

    return products.filter((product) => {
      return (
        filterValue.includes(product.categoryId) ||
        minPrice <= product.Price <= maxPrice
      )
    })
  }

  const displayedProducts = filterProducts()
  return { displayedProducts, handleFilter, filterValue }
}
