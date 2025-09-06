import React from "react";
import { Outlet, useLoaderData } from "react-router";
import LogicSidebar from "./LogicSidebar";

const LogicLayout = () => {
  const logicgate = useLoaderData();
  return (
    <div className="w-full lg:flex">
      <div className="w-72">
        <LogicSidebar logicgate={logicgate}></LogicSidebar>
      </div>
      <div className="w-full scrolBody lg:px-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LogicLayout;
