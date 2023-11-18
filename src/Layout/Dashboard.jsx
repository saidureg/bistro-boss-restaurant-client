import {
  FaCalendar,
  FaHome,
  FaList,
  FaRegAddressBook,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { MdMail, MdPayments } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 h-screen bg-[#D1A054]">
        <ul className="menu p-4 text-lg font-medium uppercase">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <MdPayments /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaRegAddressBook /> Add review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaList /> My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <IoMdMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingBag /> Order
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <MdMail /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
