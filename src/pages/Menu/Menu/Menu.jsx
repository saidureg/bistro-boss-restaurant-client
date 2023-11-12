import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu?.filter((item) => item?.category === "dessert");
  const pizza = menu?.filter((item) => item?.category === "pizza");
  const soup = menu?.filter((item) => item?.category === "soup");
  const salad = menu?.filter((item) => item?.category === "salad");
  const offered = menu?.filter((item) => item?.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <SectionTitle heading="Today's offer" subHeading="Don't miss" />
      <MenuCategory items={offered} btnText="ORDER YOUR FAVOURITE FOOD" />
      <MenuCategory
        items={dessert}
        img={dessertImg}
        title="dessert"
        btnText="ORDER YOUR FAVOURITE FOOD"
      />
      <MenuCategory
        items={pizza}
        img={pizzaImg}
        title="pizza"
        btnText="ORDER YOUR FAVOURITE FOOD"
      />
      <MenuCategory
        items={salad}
        img={saladImg}
        title="salad"
        btnText="ORDER YOUR FAVOURITE FOOD"
      />
      <MenuCategory
        items={soup}
        img={soupImg}
        title="soup"
        btnText="ORDER YOUR FAVOURITE FOOD"
      />
    </div>
  );
};

export default Menu;
