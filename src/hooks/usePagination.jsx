import { useState, useMemo } from "react"

const DOTS = "..."

const range = (start, end) => {
  let length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export function usePagination({ totalItems, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const MAX_VISIBLE_PAGES = 3

  const paginationRange = useMemo(() => {
    const lastPageIndex = totalPages

    if (totalPages <= 4) {
      return range(1, totalPages)
    }

    if (currentPage <= MAX_VISIBLE_PAGES) {
      return range(1, MAX_VISIBLE_PAGES).concat([DOTS, lastPageIndex])
    }

    if (currentPage > totalPages - MAX_VISIBLE_PAGES) {
      const startOfEndRange = totalPages - MAX_VISIBLE_PAGES + 1
      return [1, DOTS].concat(range(startOfEndRange, lastPageIndex))
    }

    return [1, DOTS, currentPage, DOTS, lastPageIndex]
  }, [totalItems, itemsPerPage, currentPage, totalPages])

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  function goToNext() {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
  }

  function goToPrev() {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  function goToPage(pageNum) {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum)
    }
  }

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    paginationRange,
    goToNext,
    goToPrev,
    goToPage,
  }
}
