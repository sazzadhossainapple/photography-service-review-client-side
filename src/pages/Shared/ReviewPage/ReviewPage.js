import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";
import AllUsersReviews from "../AllUserReviews/AllUsersReviews";
import TileLine from "../../../asserts/images/titleLine.webp";

const ReviewPage = ({ serviceDetails }) => {
  const { user } = useContext(AuthContext);
  const { _id, name } = serviceDetails.data;

  const [reviewUsers, setReviewUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allUserReview?serviceId=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviewUsers(data.data);
      })
      .catch((err) => console.error(err));
  }, [_id]);

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
    console.log(userReviewInfo);

    fetch("http://localhost:5000/userReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          toast.success("Your review added successfully.");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="flex text-center justify-center flex-col">
        <div>
          <img className="inline-block my-2" src={TileLine} alt="" />

          <h1 className="text-2xl ">All Users Review</h1>
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
  );
};

export default ReviewPage;
