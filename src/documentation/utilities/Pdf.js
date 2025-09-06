import React from "react";
import { ExternalLink } from "react-external-link";
import Head from "../shared/navbar/Head";
import Footer from "../shared/footer/Footer";
import { FaDownload } from "react-icons/fa";

const Pdf = () => {
  const externalDownload = [
    {
      id: 1,
      href1: "1-5oDud4UWiCI9p5xKDumehENeE1fP9Ot",
      href2: "1-5oDud4UWiCI9p5xKDumehENeE1fP9Ot",
      book_name: "বাংলা সাহিত্য",
    },
    {
      id: 2,
      href1: "1XYqYk0aDh61xS9e2Cv9aZmCfoWJISSpm",
      href2: "1XYqYk0aDh61xS9e2Cv9aZmCfoWJISSpm",
      book_name: "বাংলা-সহ পাঠ",
    },
    {
      id: 3,
      href1: "1xBwsYefRZgBXVCDBaHYn9TGiM3wMdcu8",
      href2: "1xBwsYefRZgBXVCDBaHYn9TGiM3wMdcu8",
      book_name: "বাংলা ভাষার ব্যাকরণ",
    },
    {
      id: 4,
      href1: "1CCgj3RnqlSC88h-K2-vErKX1PzfFn3uK",
      href2: "1R0_G_42V155BacroNKMFG7Y22sLtM0E3",
      book_name: "গণিত",
    },
    {
      id: 5,
      href1: "1sfFclvEwd76WzgZzcvjMXxEp14cC-tIC",
      href2: "1jweeX1yHktGKzYbLXRlPJDf2dVNOM_Cj",
      book_name: "উচ্চতর গণিত",
    },
    {
      id: 6,
      href1: "1HjjDObrRkP-5JNClyRCggDaYXhyfNYSy",
      href2: "1HjjDObrRkP-5JNClyRCggDaYXhyfNYSy",
      book_name: "English for Today",
    },
    {
      id: 7,
      href1: "1Y503M0UXrE_uBDw0qk6Q5UAtKoGxnJRF",
      href2: "1Y503M0UXrE_uBDw0qk6Q5UAtKoGxnJRF",
      book_name: "English Grammar",
    },
    {
      id: 8,
      href1: "1C26CUi-p1rb03z-1gfGNXWj1tfmG-gtX",
      href2: "15T3wcobriWXSJ2afuWGvht8rs8J47mkD",
      book_name: "তথ্য ও যোগাযোগ প্রযুক্তি",
    },
    {
      id: 9,
      href1: "1ZQ-dSHrAaXG5YZSSeC6aptOuuj0eD-zR",
      href2: "13QVwhG3LRPvaibBjDzcU2OhKZnSB4qK3",
      book_name: "বিজ্ঞান",
    },
    {
      id: 10,
      href1: "1dbIZB4lvXUhKMr4imAZ9txdoLpuLRlUR",
      href2: "1e2k8lLc7ms2t_HThApg-NV4rDYnpCrx_",
      book_name: "পদার্থবিজ্ঞান",
    },
    {
      id: 11,
      href1: "11LdZSm4FtYfp7NfN9CiJYeglGsjPFUiN",
      href2: "1fC5eLIP-yJxYePw2lGRmrLf5bTclAhJg",
      book_name: "রসায়ন",
    },
    {
      id: 12,
      href1: "1l2ofa1KTetaRIAzBgiHDYN9eJaPlUHLK",
      href2: "12F7W8aVcElyMx2mLU7YYLhQeQMD4aJXg",
      book_name: "জীববিজ্ঞান",
    },
    {
      id: 13,
      href1: "1l2gb1AuRIJ8pFDW8va5gRxNTbSIHhr3j",
      href2: "1cjDJOX44VImuWwFS-cyxBtfZdJ2UB7n1",
      book_name: "বাংলাদেশ ও বিশ্বপরিচয়",
    },
  ];
  return (
    <div>
      <Head></Head>
      <div className="w-full py-5 lg:p-5 min-h-96 text-shadow-lg/20">
        <h1 className="w-full text-center text-shadow-lg/50 text-2xl">
          নবম শ্রেণীর বোর্ডবই-২০২৫
        </h1>
        <p className="text-center">সরকার কর্তৃক বিনামূল্যে বিতরণের জন্য। </p>
        <h1 className="text-center block lg:hidden bg-yellow-200">
          বাংলা ভার্সন
        </h1>
        <div className="lg:flex justify-center w-full lg:gap-1 lg:w-4/5 mx-auto">
          <div className="my-1 flex flex-col">
            <div className="grid grid-cols-2 lg:grid-cols-3 mx-2 bg-primary text-white">
              <div className="flex border">
                <p className="text-center w-1/5 p-1 border">নং</p>
                <p className="w-full flex p-1 justify-center">
                  পাঠ্যপুস্তকের নাম
                </p>
              </div>
              <div className="border">
                <p className="w-full p-1 flex justify-center">বাংলা ভার্সন</p>
              </div>
              <div className="hidden lg:block border">
                <p className="w-full p-1 flex justify-center">ইংরেজি ভার্সন</p>
              </div>
            </div>
            {externalDownload.map((bd) => (
              <div className="grid grid-cols-2 lg:grid-cols-3 px-2" key={bd.id}>
                <div className="flex border">
                  <p className="text-center w-1/5 border">{bd.id}</p>
                  <p className="w-full">{bd.book_name}</p>
                </div>
                <div className="grid grid-cols-2 border">
                  <p className="w-full p-1">
                    <ExternalLink
                      href={`https://drive.google.com/uc?export=download&id=${bd.href1}`}
                      className="btn bg-red-600 text-yellow-100 flex text-sm"
                    >
                      <FaDownload />
                      Download
                    </ExternalLink>
                  </p>
                  <p className="w-full p-1">
                    <ExternalLink
                      href={`https://drive.google.com/file/d/${bd.href2}/view`}
                      className="btn bg-primary text-yellow-100 text-sm w-full"
                    >
                      View
                    </ExternalLink>
                  </p>
                </div>
                <div className="hidden lg:grid lg:grid-cols-2 border">
                  <p className="w-full p-1">
                    <ExternalLink
                      href={`https://drive.google.com/uc?export=download&id=${bd.href1}`}
                      className="btn bg-red-600 text-yellow-100 flex text-sm"
                    >
                      <FaDownload />
                      Download
                    </ExternalLink>
                  </p>
                  <p className="w-full p-1">
                    <ExternalLink
                      href={`https://drive.google.com/file/d/${bd.href2}/view`}
                      className="btn bg-primary text-yellow-100 text-sm w-full"
                    >
                      View
                    </ExternalLink>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-center block lg:hidden bg-yellow-200">
            ইংরেজি ভার্সন
          </h1>
          <div className="my-1 block lg:hidden">
            <div className="grid grid-cols-2 mx-2 bg-primary text-white">
              <div className="flex border">
                <p className="text-center w-1/5 border p-1">নং</p>
                <p className="w-full p-1">পাঠ্যপুস্তকের নাম</p>
              </div>
              <div className="border">
                <p className="w-full p-1 text-cenetr flex justify-center">
                  ইংরেজি ভার্সন
                </p>
              </div>
            </div>
            {externalDownload.map((bd) => (
              <div className="grid grid-cols-2 px-2" key={bd.id}>
                <div className="flex border">
                  <p className="text-center w-1/5 border">{bd.id}</p>
                  <p className="w-full">{bd.book_name}</p>
                </div>
                <div className="grid grid-cols-2 border">
                  <p className="w-full p-1">
                    <ExternalLink
                      href={`https://drive.google.com/uc?export=download&id=${bd.href1}`}
                      className="btn bg-red-600 text-yellow-100 flex text-sm"
                    >
                      <FaDownload />
                      Download
                    </ExternalLink>
                  </p>
                  <p className="w-full p-1">
                    <ExternalLink
                      href={`https://drive.google.com/file/d/${bd.href2}/view`}
                      className="btn bg-primary text-yellow-100 text-sm w-full"
                    >
                      View
                    </ExternalLink>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Pdf;
