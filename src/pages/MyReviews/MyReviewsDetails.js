import React from "react";

const MyReviewsDetails = ({ review, index }) => {
  const { serviceTitle, reviewMassage, email } = review;

  return (
    <tr>
      <th>{index}</th>
      <td>{serviceTitle}</td>
      <td>{email}</td>
      <td>{reviewMassage}</td>
      <td>delete</td>
    </tr>
  );
};

export default MyReviewsDetails;
