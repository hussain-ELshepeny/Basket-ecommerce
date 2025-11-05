import Offers from "../components/home-components/Offers";
import BannerBox from "../components/home-components/BannerBox";
import BestSellers from "../components/home-components/BestSellers";
import Deals from "../components/home-components/Deals";
import CategoryCollections from "../components/home-components/CategoryCollections";
export default function Home() {
  return (
    <main>
      <Offers />
      <BestSellers />
      <BannerBox />
      <Deals />
      {/* <CategoryCollections /> */}
    </main>
  );
}

