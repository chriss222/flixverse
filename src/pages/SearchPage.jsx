import React from "react";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  console.log("LOCATION: ", location);
  return <div>SearchPage</div>;
};

export default SearchPage;
