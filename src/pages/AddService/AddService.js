import React from "react";
import logo from "../../asserts/images/logo.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  const navigate = useNavigate();
  useTitle("Add Service");

  const handleAddServices = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const price = form.price.value;
    const image = form.photoURL.value;
    const description = form.description.value;

    const addServices = {
      name: name,
      image: image,
      price: price,
      description: description,
    };
    console.log(addServices);

    fetch("https://flash-photography-point-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addServices),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          toast.success("Your service added successfully.");
          console.log(data);
          form.reset();
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero min-h-screen lg:py-12 lg:px-20 md:px-12 sm:px-8 px-6">
      <div className="w-full">
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
              <h1 className="text-xl ">Add Service</h1>
            </div>

            <form onSubmit={handleAddServices}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Title"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Image URL"
                  required
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  required
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description"
                  required
                  className="textarea textarea-bordered"
                />
              </div>
              <div className="form-control mt-10">
                <button className="btn lg:w-1/4 mx-auto rounded-full text-slate-200 bg-[#ab1818] hover:bg-[#9c1616] hover:border-[#9c1616] border-[#ab1818] px-7 font-medium">
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
