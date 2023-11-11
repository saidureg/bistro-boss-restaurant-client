import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data?.filter(
          (item) => item?.category === "popular"
        );
        setMenuData(popularItem);
      });
  }, []);

  return (
    <section>
      <SectionTitle subHeading="Check it out" heading="Popular Menu" />
      <div className="grid md:grid-cols-2 gap-5">
        {menuData?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
