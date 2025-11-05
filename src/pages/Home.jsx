import Offers from "../components/home-components/Offers";
import BannerBox from "../components/home-components/BannerBox";
import BestSellers from "../components/home-components/BestSellers";
import Category from "../components/home-components/Category";
import Discount from "../components/home-components/discount";

import Deals from "../components/home-components/Deals";
import CategoryCollections from "../components/home-components/CategoryCollections";

export default function Home() {
  return (
    <main>
      <Offers />
      <BestSellers />
      <BannerBox />
      <Category
        headingText={"FRUIT & VEGETABLES"}
        spanText={"The freshest green grocer products are waiting for you"}
        imageUrl={"/images/fruits-and-vegetables.png"}
        secHead={"Fruits and Vegetables"}
      />
      <Discount />
      <Category
        headingText={"Breakfast & Dairy"}
        spanText={"Do not miss the current offers until the end of month."}
        imageUrl={"/images/breakfast-and-dairy.png"}
        secHead={"Breakfast and Dairy"}
      />
      <Deals />
      <CategoryCollections />
    </main>
  );
}
