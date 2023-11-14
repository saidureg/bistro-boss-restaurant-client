import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updatedUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { name, photoURL, email, password } = data;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updatedUserProfile(name, photoURL)
          .then(() => {
            toast("User created successfully");
            reset();
            logOut().then(() => {
              console.log("Log out successfully");
              toast("Log out successfully");
              navigate("/login", { replace: true });
            });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
            });
          });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL*</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password at least one uppercase letter, one lowercase
                    letter, one number and one special character
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="text-center mb-4 text-lg text-[#8b8b8b]">
              Already registered?
              <Link to="/login">
                <span className="underline hover:text-[#8b8b8b]/60 cursor-pointer">
                  Go to log in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
