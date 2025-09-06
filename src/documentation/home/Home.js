import React from "react";
import mainPage from "../images/Main.png";
import { Link } from "react-router";
const Home = () => {
  const overview = [
    {
      id: 1,
      chapter:
        "প্রথম অধ্যায়ঃ তথ্য ও যোগাযোগপ্রযুক্তি : বিশ্ব ও বাংলাদেশ প্রেক্ষিত",
      src: "https://i.ibb.co/qL4fynJb/chapter1.jpg",
      goChapter: "Open Chapter-01",
      to: "information",
    },
    {
      id: 2,
      chapter: "দ্বিতীয় অধ্যায়ঃকমিনিকেশন সিস্টেম ও নেটওয়ার্কিং",
      src: "https://i.ibb.co/S1RStPp/chapter2.png",
      goChapter: "Open Chapter-02",
      to: "communication",
    },
    {
      id: 3,
      chapter: "তৃতীয় অধ্যায়ঃ সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস",
      src: "https://i.ibb.co/1GYY6WwZ/chapter3.jpg",
      goChapter: "Open Chapter-03",
      to: "numberSystem",
    },
    {
      id: 4,
      chapter: "চতূর্থঅধ্যায়ঃ ওয়েব ডিজাইন পরিচিতি এবং এইচটিএমএল",
      src: "https://i.ibb.co/mVbz1dTT/chapter4.jpg",
      goChapter: "Open Chapter-04",
      to: "web",
    },
    {
      id: 5,
      chapter: "পঞ্চম অধ্যায়ঃ প্রোগ্রামিং ভাষা",
      src: "https://i.ibb.co/TDsfP1dc/chapter5.jpg",
      goChapter: "Open Chapter-05",
      to: "program",
    },
    {
      id: 6,
      chapter: "ষষ্ঠ অধ্যায়ঃ ডেটাবেজ ম্যানেজমেন্ট সিস্টেম",
      src: "https://i.ibb.co/bfxTZ3G/chapter6.png",
      goChapter: "Open Chapter-06",
      to: "database",
    },
  ];

  return (
    <div className="w-full">
      <div>
        <img src={mainPage} alt="college view" className="w-full h-full" />
      </div>
      <div className="shadow-2xl p-4 w-full mx-auto flex items-center justify-center bg-blue-600">
        <h1 className=" text-lg lg:text-6xl text-center text-pretty w-full font-mono font-semibold text-yellow-200 text-shadow-lg/50 py-2 underline underline-offset-8 decoration-dotted">
          HSC ICT--শেখা হোক ঘরে বসেই
        </h1>
      </div>
      <div className="w-full flex flex-wrap lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/39VggC79/student-Study.webp"
            className="w-fit"
          />
        </div>
        <div className="lg:w-1/2 bg-primary">
          <p className="text-pretty text-lg text-shadow-lg/30 text-white mx-10">
            HSC ICT Online এর মাধ্যমে ঘরে বসে ICT শেখার জন্য শিক্ষার্থীর জন্য
            রয়েছে-
          </p>
          <ol
            type="A"
            className="text-pretty text-lg text-yellow-100 text-shadow-lg/30 m-10"
          >
            <li className="py-2">1.শিক্ষার্থী ড্যাশবোর্ড</li>
            <li className="py-2">2.প্রগ্রেস মনিটরিং</li>
            <li className="py-2">3.অধ্যায়ভিত্তিক অনুশীলন</li>
            <li className="py-2">4.শিক্ষার্থী র‍্যাঙ্কিং</li>
          </ol>
          <p className="text-pretty text-shadow-lg/30 text-lg text-yellow-100 m-10">
            ......সহ আরো অনেক মজার ফিচার্স.....
          </p>
        </div>
      </div>
      <h1 className="bg-blue-600 text-lg lg:text-2xl text-center text-pretty w-full font-mono font-semibold text-yellow-200 text-shadow-lg/50 py-2 underline underline-offset-8 decoration-dotted">
        তথ্য ও যোগাযোগ প্রযুক্তি অধ্যায়সমূহ
      </h1>
      <div className="w-full lg:flex flex-wrap">
        {overview.map((cp) => (
          <div className="card bg-base-100 lg:w-1/6 hover:bg-slate-700 hover:text-white shadow-sm hover:shadow-xl lg:p-2 hover:p-0">
            <figure>
              <img
                src={cp?.src}
                alt="chapter1"
                border="0"
                className="w-full h-32"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title  text-xl text-pretty text-shadow-lg/20 text-blue-700 hover:text-yellow-200">
                {cp?.chapter}
              </h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-center">
                <Link to={`${cp?.to}`}
                 className="btn btn-primary w-full outline outline-red-300 btn-outline text-yellow-700 hover:text-yellow-200">
                  {cp?.goChapter}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
