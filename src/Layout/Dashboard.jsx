import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaRegAddressBook,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdMail, MdPayments } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // TODO: get api for admin role
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 h-screen bg-[#D1A054]">
        <ul className="menu p-4 font-medium uppercase">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                <NavLink to="/dashboard/paymentHistory">
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
            </>
          )}
          <div className="divider"></div>
          {/* shared  */}
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
      <div className="flex-1 p-8 bg-base-200">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
