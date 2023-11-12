import Cover from "../../../shared/Cover/Cover";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import PropTypes from "prop-types";

const MenuCategory = ({ items, btnText, title, img }) => {
  return (
    <section>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-5 mt-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center ">
        <button className="btn btn-outline border-0 border-b-2 mb-8">
          {btnText}
        </button>
      </div>
    </section>
  );
};
MenuCategory.propTypes = {
  items: PropTypes.array,
  btnText: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.any,
};

export default MenuCategory;
