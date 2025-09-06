import React from 'react';
import Head from '../navbar/Head';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';

const CollegeLayout = () => {
    return (
        <div>
            <Head></Head>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default CollegeLayout;