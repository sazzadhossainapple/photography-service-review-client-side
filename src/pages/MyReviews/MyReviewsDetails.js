import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const MyReviewsDetails = ({ review, index, handleReviewDelete }) => {
  const { _id, serviceTitle, date, reviewMassage, userImage, userName } =
    review;

  return (
    <div className="container flex flex-col w-full  max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={
                userImage
                  ? userImage
                  : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              }
              alt=""
              className="object-cover w-12 h-12 rounded-full bg-gray-500"
            />
          </div>

          <div>
            <h4 className="font-bold">{userName ? userName : "not found"}</h4>
            <span className="text-xs text-gray-400">{date}</span>
          </div>

          <div className="flex items-center  gap-3">
            <button onClick={() => handleReviewDelete(_id)}>
              <AiFillDelete className="text-2xl ml-4 "></AiFillDelete>
            </button>
            <Link to={`/updatedReview/${_id}`}>
              <AiFillEdit className="text-2xl  "></AiFillEdit>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm text-slate-300">
        <h1 className="text-xl">{serviceTitle}</h1>
        <p>{reviewMassage}</p>
      </div>
    </div>
  );
};

export default MyReviewsDetails;
