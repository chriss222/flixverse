import React, { useEffect, useState } from "react";
import SearchIco from "../../assets/icons/searchIco";
import { useLocation, useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (location.pathname.includes("/search")) return;
    setSearch("");
  }, [location]);

  return (
    <div className="hidden lg:flex items-center ml-auto gap-1">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          navigate(e.target.value ? `/search?q=${e.target.value}` : "");
        }}
        value={search}
        type="text"
        placeholder="Search here.."
        className="px-4 py-1 bg-transparent outline-none border-none"
      />
      <SearchIco />
    </div>
  );
};

export default SearchInput;
