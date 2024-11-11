import React, { useEffect, useState } from "react";
import FindIco from "../../assets/icons/FindIco";
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
    <div className="flex items-center gap-1">
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
      <div className="hidden lg:block">
        <FindIco />
      </div>
    </div>
  );
};

export default SearchInput;
