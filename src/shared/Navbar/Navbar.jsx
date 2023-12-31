import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Log out successfully");
        toast("Log out successfully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
      {user ? (
        isAdmin ? (
          <li>
            <NavLink to="/dashboard/adminHome">Admin Dashboard</NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/dashboard/userHome">User Dashboard</NavLink>
          </li>
        )
      ) : (
        ""
      )}
      <li>
        <Link to="/dashboard/cart">
          <button className="flex items-center gap-2">
            <FaShoppingCart className="text-2xl" />
            <div className="badge badge-secondary absolute top-0 right-0 -mr-6">
              +{cart.length}
            </div>
          </button>
        </Link>
      </li>

      {/* {
        user && isAdmin && <li>
        <NavLink to="/dashboard/adminHome">Admin Dashboard</NavLink>
      </li>
      } */}

      {user ? (
        <>
          {/* <p>{user?.displayName}</p> */}
          <button onClick={handleLogOut} className="btn btn-ghost ml-3">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li className="ml-3">
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-20 max-w-screen-xl text-white bg-[#15151580]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
