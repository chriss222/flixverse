import React from "react";

const PlaceHolderCards = () => {
  const placeholders = [];
  for (let i = 0; i < 12; i++) {
    placeholders.push(<div key={`placeholder-${i}`} className="bg-gray-200 animate-pulse rounded-lg w-full h-80"></div>);
  }
  return placeholders;
};

export default PlaceHolderCards;
