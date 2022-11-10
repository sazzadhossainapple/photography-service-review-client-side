import React, { useContext } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";
import TileLine from "../../../asserts/images/titleLine.webp";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const UpdatedReview = () => {
  const { user } = useContext(AuthContext);
  const reviewUpdated = useLoaderData();
  const { reviewMassage, serviceTitle, email, _id } = reviewUpdated.data;
  const navigate = useNavigate();
  useTitle("Update Review");

  const handleUpdateReview = (e) => {
    e.preventDefault();

    const form = e.target;

    const serviceTitle = form.name.value;
    const email = form.email.value;
    const reviewMassage = form.reviewMassage.value;

    const userReviewInfo = {
      serviceTitle: serviceTitle,
      reviewMassage: reviewMassage,
      email: email,
    };

    fetch(`https://flash-photography-point-server.vercel.app/myReview/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          toast.success("Review Updated Successfully.");
          navigate("/myReview");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero min-h-screen lg:px-0 md:px-12 py-12 sm:px-8 px-6">
      <div className="w-1/2">
        <div className="flex text-center justify-center flex-col mb-8">
          <div>
            <img className="inline-block my-2" src={TileLine} alt="" />

            <h1 className="text-2xl ">Updated User Review</h1>
          </div>
        </div>

        {user?.email ? (
          <>
            <div>
              <form onSubmit={handleUpdateReview}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    defaultValue={serviceTitle}
                    readOnly
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
                    defaultValue={email}
                    readOnly
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Review</span>
                  </label>
                  <textarea
                    defaultValue={reviewMassage}
                    type="text"
                    name="reviewMassage"
                    placeholder="Please add your review"
                    required
                    className="textarea textarea-bordered py-6"
                  />
                </div>

                <button className="btn mt-6 rounded-full text-slate-200 bg-[#ab1818] hover:bg-[#9c1616] hover:border-[#9c1616] border-[#ab1818] px-7 font-medium">
                  <span className="flex items-center gap-2">
                    <span>Add Review</span> |
                    <AiOutlineDoubleRight />
                  </span>
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <p className="text-xl">
              Please{" "}
              <Link
                className="font-medium text-[#ab1818] hover:underline"
                to="/login"
              >
                login
              </Link>{" "}
              to add a review.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default UpdatedReview;
