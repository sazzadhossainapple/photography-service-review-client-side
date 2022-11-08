import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/UserContext";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myReview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
      });
  }, [user?.email]);
  return (
    <div className="hero min-h-screen py-12 lg:px-20 md:px-12 sm:px-8 px-6">
      <h1 className="text-xl">No reviews were added</h1>

      {}
    </div>
  );
};

export default MyReviews;
