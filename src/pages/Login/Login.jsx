import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
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

  const handleValidatedCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign In</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidatedCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type Captcha Here.."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button disabled={disable} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mb-4 text-lg text-[#8b8b8b]">
              Now Here!{" "}
              <Link to="/register">
                <span className="underline hover:text-[#8b8b8b]/60 cursor-pointer">
                  Create a Account
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
