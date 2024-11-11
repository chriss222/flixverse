import React from "react";
import { navigation } from "../../utils/navigation";
import { NavLink } from "react-router-dom";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="absolute top-0 w-full h-16 bg-neutral-700 bg-opacity-80 left-0">
      <div className="justify-center container mx-auto px-2 flex items-center h-full gap-5">
        <div className="text-lg font-bold px-6 py-2 bg-red-50 rounded-md tracking-widest cursor-pointer">
          <NavLink to="/">
            <h1>Flixverse</h1>
          </NavLink>
        </div>
        <nav className="hidden lg:flex items-center gap-2">
          {navigation.map((nav, i) => (
            <div key={i} className="px-2 py-2 bg-neutral-500 rounded-md">
              <NavLink to={nav.href} className={({ isActive }) => `${isActive ? "text-neutral-300" : ""} hover:text-neutral-200`}>
                <div className="flex items-center gap-4 ml-4">
                  {nav.label}
                  <nav.ico />
                </div>
              </NavLink>
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex ml-auto">
          <SearchInput />
        </div>
      </div>
    </header>
  );
};

export default Header;
