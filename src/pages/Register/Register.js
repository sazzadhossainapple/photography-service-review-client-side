import React, { useContext } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../asserts/images/logo.png";
import { AuthContext } from "../../context/UserContext";

const Register = () => {
  const { createUser, userUpadetedProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userProfile(name, photoURL);
      })
      .catch((err) => console.error(err));
  };

  // update profile
  const userProfile = (name, photoURL) => {
    userUpadetedProfile(name, photoURL)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero min-h-screen lg:px-0 md:px-12 py-12 sm:px-8 px-6">
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
              <h1 className="text-xl font-medium">Register</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="input input-bordered"
                />
              </div>
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
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoURL"
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
              </div>
              <div className="form-control mt-6">
                <button className="btn text-slate-200 bg-[#ab1818] hover:bg-[#9c1616] hover:border-[#9c1616] border-[#ab1818] px-7 font-medium">
                  <span className="flex items-center gap-2">
                    <span>Register</span> |
                    <AiOutlineDoubleRight />
                  </span>
                </button>
              </div>
            </form>

            <p className=" text-center mt-3">
              Create a New account?
              <Link className="text-[#ab1818] hover:underline" to="/login">
                Login
              </Link>
            </p>
            <button className=" mt-2">Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
