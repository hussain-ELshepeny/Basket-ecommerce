export default function YellowProductButton({ color }) {
  return color === "yellow" ? (
    <button className="block font-semibold mt-[15px] mx-auto p-2 w-full bg-star hover:bg-secondary hover:text-star duration-75 rounded-[30px] border border-[#EDEEF5] cursor-pointer">
      Add To Cart
    </button>
  ) : (
    <button className="block font-semibold mt-[15px] mx-auto p-2 w-full bg-transparent text-primary hover:bg-primary hover:text-white duration-75 rounded-[30px] border border-primary cursor-pointer">
      Add To Cart
    </button>
  );
}
