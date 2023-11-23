import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaListCheck, FaMoneyBillTransfer } from "react-icons/fa6";
import { FaTruck, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className="mx-12">
      <h3 className="text-3xl font-semibold text-[#151515]">
        Hi, Welcome{" "}
        <span>{user?.displayName ? user.displayName : "Back!"}</span>
      </h3>
      <div className="stats shadow my-12">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaMoneyBillTransfer className="text-4xl" />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats?.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-4xl" />
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaListCheck className="text-4xl" />
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats?.menuItems}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaTruck className="text-4xl" />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
