import React from "react";
import { Link } from "react-router";
const ComSidebar = ({ communication }) => {
  console.log(communication);
  return (
    <div className="drawer lg:drawer-open scrollHead">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="text-lg w-full h-fit block text-shadow-lg/50 btn btn-primary drawer-button lg:hidden mt-1  hover:bg-yellow-300 hover:text-blue-700"
        >
          সূচিপত্রঃ ডিজিটাল কমিউনিকেশন
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-300 min-h-full w-80 lg:w-72">
          {/* Sidebar content here */}
          <li className="menu-title bg-blue-500 font-medium text-2xl text-shadow-lg/40 text-white">
            সূচিপত্র
          </li>
          {communication.map((cb) => (
            <li
              key={cb._id}
              className="text-pretty flex flex-col justify-start items-start"
            >
              <Link
                to={`/communication/${cb?._id}`}
                className="btn w-full p-1 flex-wrap text-pretty h-full text-shadow-lg/10 hover:bg-yellow-200 my-1 text-blue-700"
              >
                {cb?.topic}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComSidebar;
