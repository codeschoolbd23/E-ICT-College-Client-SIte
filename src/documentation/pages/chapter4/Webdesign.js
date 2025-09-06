import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../shared/footer/Footer';
import Head from '../../shared/navbar/Head';

const Webdesign = () => {
    return (
      <div>
        <Head></Head>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Webdesign;