import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";
import AllUsersReviews from "../AllUserReviews/AllUsersReviews";
import TileLine from "../../../asserts/images/titleLine.webp";

const ReviewPage = ({ serviceDetails }) => {
  const [reviewUsers, setReviewUsers] = useState([]);
  const { user } = useContext(AuthContext);
  const { _id, name } = serviceDetails.data;

  useEffect(() => {
    fetch(
      `https://flash-photography-point-server.vercel.app/allUserReview?serviceId=${_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviewUsers(data.data);
      })
      .catch((err) => console.error(err));
  }, [_id, reviewUsers]);

  // post handle review user
  const handleUserSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const reviewMassage = form.reviewMassage.value;

    const userReviewInfo = {
      serviceId: _id,
      serviceTitle: name,
      reviewMassage: reviewMassage,
      userName: user?.displayName,
      email: user?.email,
      userImage: user?.photoURL,
    };

    fetch("https://flash-photography-point-server.vercel.app/userReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Your review added successfully.");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {user?.email ? (
        <>
          <div>
            <form onSubmit={handleUserSubmit}>
              <div className="form-control">
                <textarea
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
          <p className="text-xl text-center">
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
      <div className="flex text-center justify-center flex-col my-8">
        <div>
          <h1 className="text-2xl mt-2 ">All Users Review</h1>
          <img className="inline-block my-2" src={TileLine} alt="" />
        </div>
      </div>
      <div className="my-10">
        <div>
          {reviewUsers.map((reviewUser) => (
            <AllUsersReviews
              key={reviewUser._id}
              reviewUser={reviewUser}
            ></AllUsersReviews>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
