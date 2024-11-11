import React, { useState } from "react";
import { navigation } from "../../utils/navigation";
import { NavLink } from "react-router-dom";
import FindIco from "../../assets/icons/FindIco";
import CloseIco from "../../assets/icons/CloseIco";
import SearchInput from "./SearchInput";

const MobileNav = () => {
  const [searchVisible, setSearchVisible] = useState(false);

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
            <FindIco />
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
          <SearchInput />
          <button
            onClick={() => {
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
