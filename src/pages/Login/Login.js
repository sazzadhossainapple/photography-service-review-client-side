import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import logo from "../../asserts/images/logo.png";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { setAuthToken } from "../../api/Auth";
import useTitle from "../../hooks/useTitle";
import toast from "react-hot-toast";

const Login = () => {
  const { logInUser, userSignInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle("Login");
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        const user = result.user;

        const currentsUser = {
          email: user.email,
        };

        // get jwt token
        fetch("https://flash-photography-point-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentsUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("flash-point-token", data.token);
            form.reset();
            toast.success("User Login Successfully.");
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  // sing in google
  const signInWithGoogle = () => {
    userSignInWithGoogle()
      .then((result) => {
        const user = result.user;
        setAuthToken(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero min-h-screen lg:px-0 md:px-12 sm:px-8 px-6">
      <div className="lg:w-1/3 md:w-full sm:w-full w-full">
        <div className="card  w-full  shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="flex justify-center ">
              <div
                to="/"
                className=" text-xl italic  font-medium flex items-center text-black "
              >
                <img className="" src={logo} alt="" />
                <p className=" font-text ">
                  Flash Photogrphy<span className="text-[#ab1818]">Point</span>
                </p>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-medium">Login</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
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
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-slate-200 bg-[#ab1818] hover:bg-[#9c1616] hover:border-[#9c1616] border-[#ab1818] px-7 font-medium">
                  <span className="flex items-center gap-2">
                    <span> Login</span> |
                    <AiOutlineDoubleRight />
                  </span>
                </button>
              </div>
            </form>

            <p className=" text-center mt-3">
              Create a New account?
              <Link className="text-[#ab1818] hover:underline" to="/register">
                Register
              </Link>
            </p>
            <span className="flex justify-center">
              <button
                onClick={signInWithGoogle}
                className=" mt-2 flex justify-center items-center gap-1"
              >
                <FaGoogle className="text-2xl" />
                <span className="text-[#ab1818]">Google</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
