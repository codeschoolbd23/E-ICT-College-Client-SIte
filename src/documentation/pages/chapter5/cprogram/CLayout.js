import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import CSidebar from './CSidebar';
const CLayout = () => {
    const program=useLoaderData();
    return (   
        <div className="w-full lg:flex">
          <div className="w-72">
            <CSidebar program={program}></CSidebar>
          </div>
          <div className="w-full scrolBody lg:px-2">
            <Outlet></Outlet>
          </div>
        </div>
    );
};

export default CLayout;