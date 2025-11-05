import Offers from "../components/home-components/Offers";
import BannerBox from "../components/home-components/BannerBox";
import BestSellers from "../components/home-components/BestSellers";
import Discount from "../components/home-components/Discount";
export default function Home() {
  return (
    <main>
      <Offers />
      <BestSellers />
      <BannerBox />
      <Discount />
    </main>
  );
}

