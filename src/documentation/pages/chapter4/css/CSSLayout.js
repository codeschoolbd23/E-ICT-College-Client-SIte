import React from "react";
import { Outlet, useLoaderData } from "react-router";
import CSSSidebar from "./CSSSidebar";

const CSSLayout = () => {
  const css = useLoaderData();
  return (
    <div className="w-full lg:flex">
      <div className="w-72">
        <CSSSidebar css={css}></CSSSidebar>
      </div>
      <div className="w-full scrolBody lg:px-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default CSSLayout;
