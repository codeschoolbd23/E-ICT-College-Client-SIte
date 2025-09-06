import React from 'react';
import { Link } from 'react-router';

const F404 = () => {
    return (
        <div className='flex flex-col bg-ghost text-red-500 items-center p-10 bg-base-300 min-h-screen'>
            <h1 className='font-extrabold'>404</h1>
            <h1>Opps......</h1>
            <p>The page you search is not found.</p>
            <Link to="/">Return Home</Link>
        </div>
    );
};

export default F404;