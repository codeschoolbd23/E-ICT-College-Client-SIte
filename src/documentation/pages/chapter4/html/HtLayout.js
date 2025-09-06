import React from "react";
import Head from "../../../shared/navbar/Head";
import { Outlet, useLoaderData } from "react-router";
import Footer from "../../../shared/footer/Footer";
import HtSidebar from "./HtSidebar";

const HtLayout = () => {
  const htmls = useLoaderData();
  return (
      <div className="w-full lg:flex">
        <div className="w-72">
          <HtSidebar htmls={htmls}></HtSidebar>
        </div>
        <div className="w-full scrolBody lg:px-2">
          <Outlet></Outlet>
        </div>
      </div>
  );
};

export default HtLayout;
