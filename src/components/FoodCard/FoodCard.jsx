import PropTypes from "prop-types";

const FoodCard = ({ item }) => {
  const { name, price, recipe, image } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="absolute right-0 mr-6 mt-4 px-4 py-1 bg-black/60 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline bg-[#E8E8E8] border-[#BB8506] border-0 border-b-4 mb-8">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
FoodCard.propTypes = {
  item: PropTypes.object,
};

export default FoodCard;
