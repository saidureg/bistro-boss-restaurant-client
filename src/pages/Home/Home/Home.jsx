import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import FeaturesItem from "./FeaturesItem/FeaturesItem";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <FeaturesItem />
    </div>
  );
};

export default Home;
