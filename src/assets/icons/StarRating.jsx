import React from "react";

const StarRating = ({ score }) => {
  const percentage = (score / 10) * 100;

  return (
    <div className="relative w-6 h-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="absolute top-0 left-0 w-full h-full text-gray-300"
      >
        <path
          d="M12 2.5l2.9 8.7h9.1l-7.4 5.3 2.8 8.7-7.4-5.4-7.4 5.4 2.8-8.7-7.4-5.3h9.1L12 2.5z"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="absolute top-0 left-0 w-full h-full text-yellow-500"
        style={{ clipPath: `inset(0 ${100 - percentage}% 0 0)` }}
      >
        <path
          d="M12 2.5l2.9 8.7h9.1l-7.4 5.3 2.8 8.7-7.4-5.4-7.4 5.4 2.8-8.7-7.4-5.3h9.1L12 2.5z"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default StarRating;
