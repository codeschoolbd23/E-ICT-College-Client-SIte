import React from 'react';
import Head from '../../shared/navbar/Head';
import { Outlet } from 'react-router';
import Footer from '../../shared/footer/Footer';

const Programming = () => {
    return (
      <div>
        <Head></Head>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Programming;