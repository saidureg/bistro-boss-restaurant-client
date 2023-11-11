import PropTypes from "prop-types";
const MenuItem = ({ item }) => {
  const { name, price, recipe, image } = item;
  return (
    <div className="flex space-x-2 mb-12">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h2 className="text-xl text-[#151515]">{name}---------------</h2>
        <p className="text-[#737373]">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl">${price}</p>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
};

export default MenuItem;
