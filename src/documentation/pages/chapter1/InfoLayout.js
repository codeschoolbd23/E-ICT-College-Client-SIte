import React from "react";
import { Outlet, useLoaderData } from "react-router";
import Footer from "../../shared/footer/Footer";
import Head from "../../shared/navbar/Head";
import InfoSidebar from "./InfoSidebar";

const InfoLayout = () => {
  const information = useLoaderData();
  return (
    <div>
      <Head></Head>
      <div className="w-full lg:flex">
        <div className="w-fit">
          <InfoSidebar information={information}></InfoSidebar>
        </div>
        <div className="w-full scrolBody lg:px-2">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default InfoLayout;
