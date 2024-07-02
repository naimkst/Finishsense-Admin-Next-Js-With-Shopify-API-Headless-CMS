import React from "react";
import LoaderImg from "../public/images/preloader.png";

export const Loader = () => {
  return (
    <div className="preloader">
      <div className="vertical-centered-box">
        <div className="content">
          <div className="loader-circle"></div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
          <img
            src="/images/preloader.png"
            width="100%"
            height="100%"
            alt="Loader"
          />
        </div>
      </div>
    </div>
  );
};
