import React from "react";
import { Outlet, useLoaderData } from "react-router";
import Footer from "../../shared/footer/Footer";
import DataSidebar from "./DataSidebar";
import Head from "../../shared/navbar/Head";

const DataLayout = () => {
  const database = useLoaderData();
  return (
    <div>
        <Head></Head>
      <div className="w-full lg:flex">
        <div className="w-72">
          <DataSidebar database={database}></DataSidebar>
        </div>
        <div className="w-full scrolBody lg:px-2">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DataLayout;
