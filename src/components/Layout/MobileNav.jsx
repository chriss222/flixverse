import React, { useState } from "react";
import { navigation } from "../../utils/navigation";
import { NavLink, useNavigate } from "react-router-dom";
import SearchIco from "../../assets/icons/searchIco";
import CloseIco from "../../assets/icons/CloseIco";

const MobileNav = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <section className="lg:hidden h-16 bg-neutral-700 bg-opacity-95 fixed bottom-0 w-full left-0">
      <nav
        className={`flex h-full justify-between items-center px-3 transition-all duration-300 ease-in-out 
                    ${searchVisible ? "opacity-0" : "opacity-100"}`}
      >
        <div className="flex items-center">
          {navigation.map((nav, i) => (
            <div key={i}>
              <NavLink to={nav.href} className={({ isActive }) => `${isActive ? "text-neutral-800" : ""}`}>
                <div className={`flex flex-col items-center ${i !== 0 ? "ml-4" : ""}`}>
                  <nav.ico />
                  {nav.label}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <button onClick={() => setSearchVisible(true)} className="flex justify-center self-stretch min-w-[62px]">
          <div className="self-center">
            <SearchIco />
          </div>
        </button>
      </nav>
      {setSearchVisible && (
        <div
          className={`absolute h-full w-full left-0 top-0 bg-neutral-500 flex items-center justify-center gap-6
                      transition-all duration-200 ease-in-out transform translate-y-full opacity-0 ${
                        searchVisible ? "translate-y-[1px] opacity-100" : ""
                      }`}
        >
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              navigate(e.target.value ? `/search?q=${e.target.value}` : "");
            }}
            className="rounded-full px-4 py-1"
            placeholder="Search..."
          />
          <button
            onClick={() => {
              setSearch("");
              setSearchVisible(false);
            }}
            className="self-center"
          >
            <CloseIco />
          </button>
        </div>
      )}
    </section>
  );
};

export default MobileNav;
