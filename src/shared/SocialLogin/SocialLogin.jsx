import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });

        navigate(from, { replace: true });
        Swal.fire({
          title: "Good job!",
          text: "Login Successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-primary"
        >
          <FaGoogle className="mr-2" /> Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
