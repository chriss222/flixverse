import React from "react";
import SearchIco from "../../assets/icons/searchIco";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden lg:flex items-center ml-auto gap-1">
      <input
        onChange={(e) => navigate(`/search?q=${e.target.value}`)}
        type="text"
        placeholder="Search here.."
        className="px-4 py-1 bg-transparent outline-none border-none"
      />
      <SearchIco />
    </div>
  );
};

export default SearchInput;
