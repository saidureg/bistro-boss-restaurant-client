import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import FeaturesItem from "./FeaturesItem/FeaturesItem";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <FeaturesItem />
      <Testimonials />
    </div>
  );
};

export default Home;
