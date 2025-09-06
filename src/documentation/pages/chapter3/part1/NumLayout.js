import React from "react";
import { Outlet, useLoaderData } from "react-router";
import NumSidebar from "./NumSidebar";

const NumLayout = () => {
  const numbers = useLoaderData();
  return (
    <div className="w-full lg:flex">
      <div className="w-72">
        <NumSidebar numbers={numbers}></NumSidebar>
      </div>
      <div className="w-full scrolBody lg:px-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default NumLayout;
