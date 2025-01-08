import React from "react";
import { NavLink } from "react-router";

function Navigation() {
  return (
    <>
      <nav className="w-max ">
        <NavLink className="mx-2" to={"/register"}>
          register
        </NavLink>
        <NavLink className="mx-2" to={"/dashboard"}>
          dashboard
        </NavLink>
        <NavLink className="mx-2" to={"/hahahahah"}>
          some none link
        </NavLink>
      </nav>
    </>
  );
}

export default Navigation;
