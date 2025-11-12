export default function Rating({ reviews = 0 }) {
  const filledStars = Math.ceil(Math.random() * 5)
  const hasHalfStar = filledStars % 1 !== 0
  const emptyStars = 5 - Math.ceil(filledStars)

  return (
    <div className="flex items-center gap-1 mb-3 md:mb-3.5">
      {/* Stars Filled */}
      {Array.from({ length: filledStars }).map((_, i) => (
        <span key={`f-${i}`} className="text-[#FFCD00] text-[16px]">
          ★
        </span>
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <span className="text-[16px] text-[#FFCD00] relative inline-block">
          <span className="text-gray-300">★</span>
          <span className="absolute top-0 left-0 overflow-hidden w-1/2 text-[#FFCD00]">
            ★
          </span>
        </span>
      )}

      {/* Stars Empty */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`e-${i}`} className="text-gray-300 text-[16px]">
          ★
        </span>
      ))}

      {/* Reviews text */}
      <span className="text-standard text-gray-500 ml-1">
        {reviews} review{reviews !== 1 && "s"}
      </span>
    </div>
  )
}
