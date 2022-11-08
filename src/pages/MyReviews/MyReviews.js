import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/UserContext";
import MyReviewsDetails from "./MyReviewsDetails";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myReview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setMyReview(data.data);
      });
  }, [user?.email]);
  return (
    <div className="min-h-screen py-12 lg:px-20 md:px-12 sm:px-8 px-6">
      {myReview.length === 0 && (
        <h1 className="text-xl">No reviews were added</h1>
      )}

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-[#ab1818]">
              <th></th>
              <th>Service Name</th>
              <th>Email</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myReview.map((review, index) => (
              <MyReviewsDetails
                key={review._id}
                review={review}
                index={index + 1}
              ></MyReviewsDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
