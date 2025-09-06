import React from "react";
import { Link } from "react-router";
import Head from "../shared/navbar/Head";
import Footer from "../shared/footer/Footer";

const Teacher = () => {
  
  const teachers = [
    {
      id: 1,
      imgLink: "https://i.ibb.co/d09PdjTZ/teacher1.jpg",
      name: "Md Mohaimin Khan",
      position: "Principal",
      sub: "B.Sc in Honours(CSE)",
      contact: "+8801#########",
    },
    {
      id: 2,
      imgLink: "https://i.ibb.co/jvN9h7qf/teacher2.jpg",
      name: "Sajedul Hasan Sajid",
      position: "Vice Principal",
      sub: "B.Sc in Honours(Chemistry)",
      contact: "+8801#########",
    },
    {
      id: 3,
      imgLink: "https://i.ibb.co/R43ntkjn/teacher3.jpg",
      name: "Abdullah Al Mamun",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Accounting)",
      contact: "+8801#########",
    },
    {
      id: 4,
      imgLink: "https://i.ibb.co/m5kKcxM7/teacher4.jpg",
      name: "Kaji Nur Rashid",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Management)",
      contact: "+8801#########",
    },
    {
      id: 5,
      imgLink: "https://i.ibb.co/rf05Chgq/teacher5.jpg",
      name: "Shaidullah Khan Patoyary",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Management)",
      contact: "+8801#########",
    },
    {
      id: 6,
      imgLink: "https://i.ibb.co/7t4RYfxJ/teacher6.jpg",
      name: "Pinaksana Raju",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Economics)",
      contact: "+8801#########",
    },
    {
      id: 7,
      imgLink: "https://i.ibb.co/8n5xGy9c/teacher7.jpg",
      name: "Saiful Islam",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Economics)",
      contact: "+8801#########",
    },
    {
      id: 8,
      imgLink: "https://i.ibb.co/F4SHqcYb/teacher8.jpg",
      name: "Abdur Rabby Khan",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(ICT)",
      contact: "+8801#########",
    },
    {
      id: 9,
      imgLink: "https://i.ibb.co/xtzvr9JC/teacher9.jpg",
      name: "Golam Sarowar",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(ICT)",
      contact: "+8801#########",
    },
    {
      id: 10,
      imgLink: "https://i.ibb.co/6Ry33Xsq/teacher10.jpg",
      name: "Sajnu Mirja Dhar",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(English)",
      contact: "+8801#########",
    },
    {
      id: 11,
      imgLink: "https://i.ibb.co/tPmFq7gN/teacher11.jpg",
      name: "Priya Sutra Dhar",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(English)",
      contact: "+8801#########",
    },
    {
      id: 12,
      imgLink: "https://i.ibb.co/TxWstpgS/teacher12.jpg",
      name: "Naima Khandakar",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Botani)",
      contact: "+8801#########",
    },
    {
      id: 13,
      imgLink: "https://i.ibb.co/60Bhdqs9/teacher13.jpg",
      name: "Sakira Anna",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Botani)",
      contact: "+8801#########",
    },
    {
      id: 14,
      imgLink: "https://i.ibb.co/xtqvWD2R/teacher14.jpg",
      name: "Rowsana Begum",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Zoology)",
      contact: "+8801#########",
    },
    {
      id: 15,
      imgLink: "https://i.ibb.co/JjfN8dX6/teacher15.jpg",
      name: "Jully Polli",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Zoology)",
      contact: "+8801#########",
    },
    {
      id: 16,
      imgLink: "https://i.ibb.co/Xxq6FH5c/teacher16.jpg",
      name: "Shahadat Miah",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Mathematics)",
      contact: "+8801#########",
    },
    {
      id: 17,
      imgLink: "https://i.ibb.co/G3BcyBfS/teacher17.jpg",
      name: "Abdur Rahim",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Mathematics)",
      contact: "+8801#########",
    },
    {
      id: 18,
      imgLink: "https://i.ibb.co/0dY06BN/teacher18.jpg",
      name: "Abdur Razzak",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Chemistry)",
      contact: "+8801#########",
    },
    {
      id: 19,
      imgLink: "https://i.ibb.co/Q7Cb3Q1c/teacher19.jpg",
      name: "Tanim Hasan",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Chemistry)",
      contact: "+8801#########",
    },
    {
      id: 20,
      imgLink: "https://i.ibb.co/8gHkb1M6/teacher20.jpg",
      name: "Maruf Khan (Titu)",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Physics)",
      contact: "+8801#########",
    },
    {
      id: 21,
      imgLink: "https://i.ibb.co/9XJzmJx/teacher21.jpg",
      name: "Arafat Talukder",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Accounting)",
      contact: "+8801#########",
    },
    {
      id: 22,
      imgLink: "https://i.ibb.co/kg1bqtvM/teacher22.jpg",
      name: "Shaila Ranu",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Logic)",
      contact: "+8801#########",
    },
    {
      id: 23,
      imgLink: "https://i.ibb.co/9mk83rjF/teacher23.jpg",
      name: "Sabbir Khandakar",
      position: "Assistant Teacher",
      sub: "B.Sc in Honours(Logic)",
      contact: "+8801#########",
    },
  ];
  return (
    <div>
      <Head />
      <div className="w-full bg-red-600 text-yellow-100 shadow-xl">
        <h1 className="text-3xl text-shadow-lg/50 w-full text-center p-10 mb-2">সম্মানিত শিক্ষক মন্ডলী</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 my-2">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="card w-full bg-blue-600 flex flex-col justify-center items-center text-center p-5"
          >
            <div className="avatar w-1/2 flex flex-col justify-center items-center">
              <div className="rounded-full bg-green-400">
                <img src={teacher.imgLink} className="w-full shadow-2xl" />
              </div>
            </div>
            <h1 className="text-xl text-shadow-lg/30 text-white">{teacher.name}</h1>
            <p className="text-lg text-shadow-lg/30 text-red-400">{teacher.position}</p>
            <p className="text-lg text-shadow-lg/30 text-purple-300">{teacher.sub}</p>
            <p className="text-lg text-shadow-lg/30 text-green-300">{teacher.contact}</p>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Teacher;
