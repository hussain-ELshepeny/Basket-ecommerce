import { useState } from "react"
export default function useFilterProducts(products) {
  const [filterValue, setFilterValue] = useState([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })
  const [tempRange, setTempRange] = useState({ min: 0, max: 1000 })
  // filter value is the category id not the name
  const handleFilter = (categoryId) => {
    setFilterValue((prevFilterValue) => {
      return prevFilterValue.includes(categoryId)
        ? prevFilterValue.filter((id) => id !== categoryId)
        : [...prevFilterValue, categoryId]
    })
  }

  const handleApply = () => {
    setPriceRange(tempRange)
  }

  const handleResetPrice = () => {
    setTempRange({ min: 0, max: 1000 })
    setPriceRange({ min: 0, max: 1000 })
  }

  // console.log(filterValue)

  function filterProducts() {
    if (filterValue.length === 0)
      return products.filter(
        (product) =>
          product.Price >= priceRange.min && product.Price <= priceRange.max
      ) // if we don't check any then we get all products filtered by price

    return products.filter((product) => {
      return (
        filterValue.includes(product.categoryId._id) &&
        product.Price >= priceRange.min &&
        product.Price <= priceRange.max
      )
    })
  }

  let displayedProducts = filterProducts()
  const handleResetAll = () => {
    setFilterValue([])
    handleResetPrice()
  }
  return {
    displayedProducts,
    handleFilter,
    filterValue,
    handleApply,
    handleResetPrice,
    handleResetAll,
    setTempRange,
    tempRange,
  }
}
