export default function PaginationControls({
  goToPrev,
  goToNext,
  currentPage,
  paginationRange,
  goToPage,
  totalPages,
}) {
  return (
    <div className="flex items-center gap-6 mx-auto w-fit mt-10">
      <button
        onClick={goToPrev}
        disabled={currentPage === 1}
        className="cursor-pointer bg-black/7 text-black p-2 rounded disabled:opacity-50"
        style={{
          display: `${currentPage === 1 ? "none" : "block"}`,
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className="flex items-center gap-2">
        {" "}
        {paginationRange.map((item, index) => {
          if (typeof item === "string") {
            return (
              <span key={`dots-${index}`} className="p-2">
                ...
              </span>
            )
          }

          return (
            <div
              key={item}
              className="cursor-pointer w-7 h-7 text-center content-center rounded-full"
              onClick={() => goToPage(item)}
              style={{
                backgroundColor: `${currentPage === item ? "#35afa0" : "#f0f0f0"}`,
                color: `${currentPage === item ? "white" : "black"}`,
              }}
            >
              {item}
            </div>
          )
        })}
      </div>

      <button
        onClick={goToNext}
        disabled={currentPage === totalPages}
        className="cursor-pointer bg-black/7 text-black p-2 rounded disabled:opacity-50"
        style={{
          display: `${currentPage === totalPages ? "none" : "block"}`,
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}
