import React from 'react';
import { ExternalLink } from 'react-external-link';
import Head from '../shared/navbar/Head';
import Footer from '../shared/footer/Footer';
import { FaDownload } from 'react-icons/fa';

const Pdf = () => {
  const externalDownload = [
    {
      id: 1,
      bid: "1-5oDud4UWiCI9p5xKDumehENeE1fP9Ot",
      book_name: "বাংলা সাহিত্য",
      imgLink: "",
      version: "বাংলা ভার্সন",
    },
    {
      id: 2,
      bid: "1XYqYk0aDh61xS9e2Cv9aZmCfoWJISSpm",
      book_name: "বাংলা-সহ পাঠ",
      imgLink: "",
      version: "বাংলা ভার্সন",
    },
    {
      id: 3,
      bid: "1xBwsYefRZgBXVCDBaHYn9TGiM3wMdcu8",
      book_name: "বাংলা ব্যাকরণ",
      imgLink: "",
      version: "বাংলা ভার্সন",
    },
    {
      id: 4,
      bid: "1CCgj3RnqlSC88h-K2-vErKX1PzfFn3uK",
      book_name: "গণিত",
      imgLink: "",
      version: "বাংলা ভার্সন",
    },
    {
      id: 5,
      bid: "1R0_G_42V155BacroNKMFG7Y22sLtM0E3",
      book_name: "Mathematics",
      imgLink: "",
      version: "ইংরেজি ভার্সন",
    },
    {
      id: 6,
      bid: "1sfFclvEwd76WzgZzcvjMXxEp14cC-tIC",
      book_name: "উচ্চতর গণিত",
      imgLink: "",
      version: "বাংলা ভার্সন",
    },
    {
      id: 7,
      bid: "1jweeX1yHktGKzYbLXRlPJDf2dVNOM_Cj",
      book_name: "Higher Mathematics",
      imgLink: "",
      version: "ইংরেজি ভার্সন",
    },
    {
      id: 8,
      bid: "1HjjDObrRkP-5JNClyRCggDaYXhyfNYSy",
      book_name: "ইংরেজি ১ম পত্র",
      imgLink: "",
      version: "বাংলা ভার্সন",
    },
    {
      id: 9,
      bid: "1HjjDObrRkP-5JNClyRCggDaYXhyfNYSy",
      book_name: "English First Paper",
      imgLink: "",
      version: "ইংরেজি ভার্সন",
    },
    {
      id: 10,
      bid: "1ZQ-dSHrAaXG5YZSSeC6aptOuuj0eD-zR",
      book_name: "বিজ্ঞান",
      imgLink: "",
      version: "বাংলা ভার্সন",
    },
    {
      id: 11,
      bid: "13QVwhG3LRPvaibBjDzcU2OhKZnSB4qK3",
      book_name: "Science",
      imgLink: "",
      version: "ইংরেজি ভার্সন",
    },
  ];
    return (
      <div>
        <Head></Head>
        <div className="p-10 min-h-96">
          <h1 className="w-full text-center text-shadow-lg/50 text-2xl">
            নবম শ্রেণীর বোর্ডবই-২০২৫
          </h1>
          <p>সরকার কর্তৃক বিনামূল্যে বিতরণের জন্য। </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {externalDownload.map((dld) => (
              <ul
                key={dld.id}
                className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:p-5 border border-dotted border-green-700 my-2"
              >
                <li className="text-blue-800 text-shadow-lg/10 text-xl flex flex-col p-3">
                  {dld.book_name}
                  <small className="text-yellow-700">({dld.version})</small>
                </li>
                <li className="flex flex-col-reverse lg:flex-row">
                  <ExternalLink
                    href={`https://drive.google.com/uc?export=download&id=${dld?.bid}`}
                    className="btn btn-primary p-3 m-1 text-white text-lg"
                  >
                    <FaDownload />
                    Download
                  </ExternalLink>

                  <ExternalLink
                    href={`https://drive.google.com/file/d/${dld?.bid}/view`}
                    className="btn btn-primary p-3 m-1 text-white text-lg"
                  >
                    View
                  </ExternalLink>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Pdf;