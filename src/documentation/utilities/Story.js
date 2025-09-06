import React from "react";
import { Link } from "react-router";
import Head from "../shared/navbar/Head";
import Footer from "../shared/footer/Footer";

const Story = () => {
  const succesLayout = [
    // { id: 1, https: "https://i.ibb.co/KjbKPvK8/success-Layout1.jpg" },
    // { id: 2, https: "https://i.ibb.co/dwH7fJD1/success-Layout2.jpg" },
    { id: 3, https: "https://i.ibb.co/KxHCgJbh/success-Layout3.jpg" },
    { id: 4, https: "https://i.ibb.co/5hVnRBK1/success-Layout4.jpg" },
  ];
  const success = [
    {
      id: 1,
      name: "Farhan Nadim",
      hsc: 5.0,
      batch: 2024,
      study: "Study in BUET",
      https: "https://i.ibb.co/qMT36yrw/boy1.jpg",
    },
    {
      id: 2,
      name: "Khabirul Islam",
      hsc: 5.0,
      batch: 2024,
      study: "Study in BUET",
      https: "https://i.ibb.co/CpSWxKvZ/boy2.jpg",
    },
    {
      id: 3,
      name: "Md Akhterrujjaman",
      hsc: 5.0,
      batch: 2024,
      study: "Study in Dhaka University",
      https: "https://i.ibb.co/kgWRqtsB/boy3.jpg",
    },
    {
      id: 4,
      name: "Rabiul Khandakar",
      hsc: 5.0,
      batch: 2024,
      study: "Study in KUET",
      https: "https://i.ibb.co/RkXtLs7H/boy4.jpg",
    },
    {
      id: 5,
      name: "Rafiul Mridha",
      hsc: 5.0,
      batch: 2024,
      study: "Study in Dhaka University",
      https: "https://i.ibb.co/zTrr45hJ/boy5.jpg",
    },
    {
      id: 6,
      name: "Sheikha Sabiha",
      hsc: 5.0,
      batch: 2024,
      study: "Study in Chattagram University",
      https: "https://i.ibb.co/Z1pHPLqQ/boy6.jpg",
    },
    {
      id: 7,
      name: "Sakhira Jahan",
      hsc: 5.0,
      batch: 2024,
      study: "Study in Rajshahi University",
      https: "https://i.ibb.co/XrnHdmPm/boy7.jpg",
    },
    {
      id: 8,
      name: "Ebrahim Khan",
      hsc: 5.0,
      batch: 2024,
      study: "Noyakhali Agriculture University",
      https: "https://i.ibb.co/hJfzLhgn/boy8.jpg",
    },
    {
      id: 9,
      name: "Sheikh Sadiqul Habib",
      hsc: 5.0,
      batch: 2024,
      study: "Study in Dhaka Medical College",
      https: "https://i.ibb.co/JWBz6Prk/boy9.jpg",
    },
    {
      id: 10,
      name: "Rasfia Champa",
      hsc: 5.0,
      batch: 2024,
      study: "Study in Haji Danesh Science & Tec.",
      https: "https://i.ibb.co/35Xzm1ZP/boy10.jpg",
    },
    {
      id: 11,
      name: "Farihan Bhuiyan",
      hsc: 5.0,
      batch: 2024,
      study: "Study in CUET",
      https: "https://i.ibb.co/60SQkdWy/boy11.jpg",
    },
    {
      id: 12,
      name: "Rakira Kobri",
      hsc: 5.0,
      batch: 2024,
      study: "Study in RUET",
      https: "https://i.ibb.co/VYS4vPRW/boy12.jpg",
    },
    {
      id: 13,
      name: "Sabbir Khan",
      hsc: 5.0,
      batch: 2024,
      study: "Study in Potoyakhali Science & Tec.",
      https: "https://i.ibb.co/8DcwBRVn/boy13.jpg",
    },
    {
      id: 14,
      name: "Md Hasanur Raju",
      hsc: 5.0,
      batch: 2024,
      study: "Study in Bangladesh Agriculture University",
      https: "https://i.ibb.co/k2KbM0Cb/boy14.jpg",
    },
  ];
  return (
    <div>
      <Head />

      <div className="flex w-full">
        {succesLayout.map((sl) => (
          <div key={sl.id} className="w-1/2">
            <img src={sl.https} className="w-full h-28 lg:h-72" />
          </div>
        ))}
      </div>
      <div className="bg-blue-950 p-5 text-shadow-lg/50 text-xl text-white text-center uppercase">
          Success Story Gallery at a Glance!!!
          <hr/>
      </div>
      <div className="grid lg:grid-cols-3 gap-2">
        {success.map((ss) => (
          <div
            key={ss.id}
            className="shadow-lg grid grid-cols-2 p-4 bg-purple-900"
          >
            <div>
              <div className="text-xl text-shadow-lg/30 text-orange-100 w-full">
                {ss.study}
              </div>
              <div className="stat-title text-yellow-200">HSC Result</div>
              <div className="stat-title text-blue-200">GPA-{ss.hsc}</div>
              <div className="stat-title text-red-200">Batch-{ss.batch}</div>
              <div className="text-xl text-shadow-lg/30 text-blue-300">
                E-ICT College
              </div>
            </div>
            <div>
              <div className="stat-figure text-secondary">
                <div className="avatar avatar-online">
                  <div className="w-16 rounded-full">
                    <img src={`${ss.https}`} />
                  </div>
                </div>
                <h1>{ss.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Story;
