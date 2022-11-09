import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/UserContext";
import MyReviewsDetails from "./MyReviewsDetails";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myReview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data.data);
      });
  }, [user?.email]);

  //delete by review
  const handleReviewDelete = (id) => {
    fetch(`http://localhost:5000/myReview/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          toast.success("review deleted by successfully.");
          const remaining = myReview.filter((reviews) => reviews._id !== id);
          setMyReview(remaining);
        }
      });
  };

  return (
    <div className="min-h-screen py-12 lg:px-20 md:px-12 sm:px-8 px-6">
      {myReview.length === 0 ? (
        <>
          <h1 className="text-xl flex justify-center items-center min-h-screen ">
            No reviews were added
          </h1>
        </>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
            {myReview.map((review, index) => (
              <MyReviewsDetails
                key={review._id}
                review={review}
                index={index + 1}
                handleReviewDelete={handleReviewDelete}
              ></MyReviewsDetails>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyReviews;
