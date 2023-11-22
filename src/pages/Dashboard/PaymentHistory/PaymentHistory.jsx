import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle heading="PAYMENT HISTORY" subHeading="At a Glance!" />
      <div className="bg-white">
        <h3 className="p-6 text-3xl font-semibold">
          Total Payment: {payments.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Total Price</th>
                <th>Transaction Id</th>
                <th>Status</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1} </th>
                  <td>{item.email}</td>
                  <td>{item.price}</td>
                  <td>{item.transactionId}</td>

                  <td>{item.status}</td>

                  <td>
                    {/* Immediately Invoked Function Expression (IIFE) */}
                    {(() => {
                      const date = new Date(item.date);
                      const options = {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone: "UTC",
                      };
                      return date.toLocaleDateString("en-US", options);
                    })()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
