import React, { useState, useEffect } from "react";
import ArrowIco from "../../assets/icons/ArrowIco";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed left-2 bottom-24 bg-blue-500 p-3 rounded-full cursor-pointer animate-bounce md:left-16"
        >
          <ArrowIco />
        </div>
      )}
    </>
  );
};

export default Footer;
