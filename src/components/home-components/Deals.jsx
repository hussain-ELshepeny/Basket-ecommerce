import DealsCard from "./DealsCard";

export default function Deals() {
  return (
    <div className="section-container flex lg:flex-row flex-col gap-[30px] items-center my-[30px]">
      <DealsCard discountImgUrl={"url(/images/discount1.png)"} discountTitle="Natural Eggs" discountQuote="Eat one every day" />
      <DealsCard discountImgUrl={"url(/images/discount2.png)"}  discountTitle="Taste the Best" discountQuote="Shine the morning" />
      <DealsCard discountImgUrl={"url(/images/discount3.png)"}  discountTitle="Ditch the Junk" discountQuote="Breakfast made better" />
    </div>
  )
}
