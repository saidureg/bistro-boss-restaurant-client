import PropTypes from "prop-types";
import FoodCard from "../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items?.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};
OrderTab.propTypes = {
  items: PropTypes.array,
};

export default OrderTab;
