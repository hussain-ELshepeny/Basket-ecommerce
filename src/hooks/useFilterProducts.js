import { useState } from "react";
export default function useFilterProducts(products) {
  const [filterValue, setFilterValue] = useState([]);
  // filter value is  the category id not the name
  const handleFilter = (categoryId) => {
    setFilterValue((prevFilterValue) => {
      return prevFilterValue.includes(categoryId)
        ? prevFilterValue.filter((id) => id !== categoryId)
        : [...prevFilterValue, categoryId];
    });
  };

  function filterProducts() {
    if (filterValue.length === 0) return products;
    return products.filter((product) => {
      return filterValue.includes(product.categoryId);
    });
  }

  const displayedProducts = filterProducts();
  return { displayedProducts, handleFilter, filterValue };
}
