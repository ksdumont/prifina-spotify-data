import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img
          src="/images/PrifinaVectorIcon.png"
          width="30"
          height="30"
          className="d-inline-block align-bottom"
          alt=""
          loading="lazy"
        />{" "}
        Prifina
      </a>
    </nav>
  );
};

export default Nav;
