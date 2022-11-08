import React from "react";

const AllUsersReviews = ({ reviewUser }) => {
  const { userImage, userName, date, reviewMassage } = reviewUser;
  return (
    <div className="container flex flex-col w-full  max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100">
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
              className="object-cover w-12 h-12 rounded-full dark:dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{userName}</h4>
            <span className="text-xs dark:dark:text-gray-400">{date}</span>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm dark:dark:text-gray-400">
        <p>{reviewMassage}</p>
      </div>
    </div>
  );
};

export default AllUsersReviews;
