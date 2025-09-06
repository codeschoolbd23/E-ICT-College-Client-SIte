import React from 'react';
import Head from '../shared/navbar/Head';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import '../shared/navbar/Head.css';
const Main = () => {
    return (
        <div>
           <Head></Head>
           <div className='w-full flex'>
            {/* <div className='w-56 py-3 border border-secondary hidden lg:flex'><Sidebar></Sidebar></div> */}
            <div className='w-full border border-primary'><Outlet></Outlet></div>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;