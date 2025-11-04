import Offers from "../components/home-components/Offers";
import BannerBox from "../components/home-components/BannerBox";
import BestSellers from "../components/home-components/BestSellers";

export default function Home() {
  return (
    <main>
      <Offers />
      <BestSellers />
      <BannerBox />
    </main>
  );
}

