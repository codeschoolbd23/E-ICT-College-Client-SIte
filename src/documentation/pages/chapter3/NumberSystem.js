import React from "react";
import { Outlet } from "react-router";
import Head from "../../shared/navbar/Head";
import Footer from "../../shared/footer/Footer";

const NumberSystem = () => {
  return (
    <div>
      <Head></Head>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default NumberSystem;
