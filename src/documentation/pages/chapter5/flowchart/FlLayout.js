import React from "react";
import { Outlet, useLoaderData } from "react-router";
import FlSidebar from "./FlSidebar";

const FlLayout = () => {
  const flowchart = useLoaderData();
  return (
      <div className="w-full lg:flex">
        <div className="w-72">
          <FlSidebar flowchart={flowchart}></FlSidebar>
        </div>
        <div className="w-full scrolBody lg:px-2">
          <Outlet></Outlet>
        </div>
      </div>
  );
};

export default FlLayout;
