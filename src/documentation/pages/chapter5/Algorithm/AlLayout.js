import React from "react";
import Head from "../../../shared/navbar/Head";
import { Outlet, useLoaderData } from "react-router";
import Footer from "../../../shared/footer/Footer";
import AlSidebar from "./AlSidebar";


const AlLayout = () => {
  const algorithm = useLoaderData();
  return (
      <div className="w-full lg:flex">
        <div className="w-72">
          <AlSidebar algorithm={algorithm}></AlSidebar>
        </div>
        <div className="w-full scrolBody lg:px-2">
          <Outlet></Outlet>
        </div>
      </div>
  );
};

export default AlLayout;
