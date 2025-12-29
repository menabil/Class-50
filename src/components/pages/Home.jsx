import Ads from "../layouts/Ads";
import AdsTwo from "../layouts/AdsTwo";
import Banner from "../layouts/Banner";
import Bestsellers from "../layouts/Bestsellers";
import NewArrivals from "../layouts/NewArrivals";
import Special from "../layouts/Special";

const Home = () => {
  return (
    <>
      <Banner />
      <Ads />
      <NewArrivals />
      <Bestsellers/>
      <AdsTwo/>
      <Special/>
    </>
  );
};

export default Home;
