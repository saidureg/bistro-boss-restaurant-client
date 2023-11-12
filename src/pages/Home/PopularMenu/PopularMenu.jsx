import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItem = menu?.filter((item) => item?.category === "popular");

  return (
    <section>
      <SectionTitle subHeading="Check it out" heading="Popular Menu" />
      <div className="grid md:grid-cols-2 gap-5">
        {popularItem?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center ">
        <button className="btn btn-outline border-0 border-b-2 my-2">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
