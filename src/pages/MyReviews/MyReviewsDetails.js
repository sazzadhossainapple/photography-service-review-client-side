import React from "react";
import { Link } from "react-router-dom";

const MyReviewsDetails = ({ review, index, handleReviewDelete }) => {
  const { _id, serviceTitle, reviewMassage, email } = review;

  return (
    <tr>
      <th>{index}</th>
      <td>{serviceTitle}</td>
      <td>{email}</td>
      <td>{reviewMassage}</td>
      <td>
        <button
          onClick={() => handleReviewDelete(_id)}
          className="btn text-slate-200 bg-[#ab1818] hover:bg-[#9c1616] hover:border-[#9c1616] border-[#ab1818] px-7 font-medium mr-3"
        >
          delete
        </button>
        <Link className="btn text-slate-200 bg-[#ab1818] hover:bg-[#9c1616] hover:border-[#9c1616] border-[#ab1818] px-7 font-medium">
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default MyReviewsDetails;
