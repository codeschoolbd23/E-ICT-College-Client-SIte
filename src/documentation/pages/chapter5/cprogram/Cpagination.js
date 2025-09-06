import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Cpagination = () => {
    const[setData,cprogramData]=useState([]);
useEffect(()=>{
    fetch("https://e-ict-college.web.app/c")
      .then((rs) => rs.json())
      .then((rs) => {
        setData(rs);
        console.log(rs);
      });
},[])
  return (
    <div>
      Page:
      {cprogramData.map((cp) => (
        <Link
          to={`/c-program/${cp?._id}`}
          className="btn btn-ghost h-fit p-1 flex-wrap text-left text-md w-10"
        >
          {cp?.cid}
        </Link>
      ))}
    </div>
  );
};

export default Cpagination;