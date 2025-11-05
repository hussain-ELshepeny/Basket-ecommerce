import DiscountCard from "./DiscountCard";

export default function Discount() {
  return (
    <div className="section-container flex md:flex-row flex-col gap-[30px] items-center my-[30px]">
      <DiscountCard discountImgUrl={"url( ../../../public/images/discount1.png)"} discountTitle="Natural Eggs" discountQuote="Eat one every day" />
      <DiscountCard discountImgUrl={"url( ../../../public/images/discount2.png)"}  discountTitle="Taste the Best" discountQuote="Shine the morning" />
      <DiscountCard discountImgUrl={"url( ../../../public/images/discount3.png)"}  discountTitle="Ditch the Junk" discountQuote="Breakfast made better" />
    </div>
  )
}
