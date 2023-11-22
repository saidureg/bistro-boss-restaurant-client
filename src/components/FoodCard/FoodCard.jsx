import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, price, recipe, image, _id } = item;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const handleAddToCart = () => {
    if (user && user.email) {
      // add to cart
      const cartItem = {
        menuId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            title: "Success!",
            text: `${name} added to cart`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to updated the cart items count
          refetch();
        }
      });
    } else {
      // redirect to login
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-[370px] h-[247px] py-2" src={image} alt={name} />
      </figure>
      <p className="absolute right-0 mr-6 mt-4 px-4 py-1 bg-black/60 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline bg-[#E8E8E8] border-[#BB8506] border-0 border-b-4 mb-8"
          >
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
