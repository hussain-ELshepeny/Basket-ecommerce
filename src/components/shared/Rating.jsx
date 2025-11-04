export default function Rating({ rating = 0, reviews = 0 }) {
  const filledStars = Math.floor(rating); // عدد النجوم الكاملة
  const hasHalfStar = rating % 1 !== 0; // هل في نص نجمة
  const emptyStars = 5 - Math.ceil(rating); // الباقي فاضي

  return (
    <div className="flex items-center gap-1 mb-[12px] md:mb-[14px]">
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
      <span className="text-[14px] text-gray-500 ml-1">
        {reviews} review{reviews !== 1 && "s"}
      </span>
    </div>
  );
}
