import React from 'react';


const ProgramHome= () => {
  const src = [
    "https://i.ibb.co/vvCQkktD/program-Layout.jpg",
  ];
  const h1Cls =
    "mt-4 pb-2 text-lg lg:text-xl text-shadow-lg/20 font-semibold text-primary";
  const spanCss = "text-lg text-orange-500 font-medium pr-2";
  return (
    <div className="lg:flex flex-wrap w-full justify-center">
      <div className="lg:p-1 flex w-full lg:h-96">
        {src.map((srclink) => (
          <>
            <img
              src={srclink}
              alt="front-Page"
              border="0"
              className="w-full"
            />
          </>
        ))}
        
      </div>
      <div className="w-full lg:p-1">
        <div className="p-5 lg:text-lg text-shadow-lg/10">
          <h1 className={`${h1Cls}`}>সূচনাঃ</h1>
          <p className="lg:px-5">
            তথ্য ও যোগাযোগ (Information Communication) বা তথ্য ও যোগাযোগ
            প্রযুক্তি (ICT - Information and Communication Technology) হলো একট
            বিস্তৃত ক্ষেত্র যা তথ্য সংগ্রহ, সংরক্ষণ, প্রক্রিয়াকরণ, এবং
            আদান-প্রদানের প্রযুক্তি ও পদ্ধতিগুলোর সমন্বয়ে গঠিত।
          </p>
          <h1 className={`${h1Cls}`}>ডিজিটাল কমিউনিকেশন সংজ্ঞাঃ{""}</h1>
          <p className="lg:px-5">
            তথ্য (Information) মানে হলো নির্দিষ্ট অর্থবোধক ও ব্যবহারযোগ্য ডেটা
            যা বিশ্লেষণ ও ব্যাখ্যার মাধ্যমে পাওয়া যায়। যোগাযোগ (Communication)
            মানে হলো তথ্য আদান-প্রদানের প্রক্রিয়া — একজন ব্যক্তি বা উৎস থেকে
            অন্য ব্যক্তি বা গন্তব্যে।
          </p>
          <hr />
          <h1 className={`${h1Cls}`}>তথ্য ও যোগাযোগের উপাদানসমূহঃ </h1>
          <ul className="list-decimal lg:px-5">
            <li>
              <span className={`${spanCss}`}>উৎস (Source):</span>
              যে ব্যক্তি বা যন্ত্র তথ্য তৈরি করে।
            </li>
            <li>
              <span className={`${spanCss}`}>বার্তা (Message):</span>
              যে তথ্যটি প্রেরণ করা হয়।
            </li>
            <li>
              <span className={`${spanCss}`}>মাধ্যম (Medium):</span>
              যেটির মাধ্যমে তথ্য পৌঁছানো হয় — যেমন রেডিও, মোবাইল, ইন্টারনেট।
            </li>
            <li>
              <span className={`${spanCss}`}>প্রাপক (Receiver):</span>
              যে ব্যক্তি বা যন্ত্র তথ্য গ্রহণ করে।
            </li>
            <li>
              <span className={`${spanCss}`}>প্রতিক্রিয়া (Feedback):</span>
              প্রাপকের প্রতিক্রিয়া বা প্রতিক্রিয়া বার্তা।
            </li>
          </ul>
          <hr />
          <h1 className={`${h1Cls}`}>তথ্য ও যোগাযোগের প্রযুক্তিঃ</h1>
          <ul className="list-disc lg:px-5">
            ICT এমন প্রযুক্তির সমন্বয় যা কম্পিউটার, টেলিযোগাযোগ, অডিও-ভিডিও,
            নেটওয়ার্কিং এবং অন্যান্য ডিজিটাল প্রযুক্তিকে অন্তর্ভুক্ত করে। যেমন:
            <li>ইন্টারনেট</li>
            <li>মোবাইল ফোন</li>
            <li>কম্পিউটার</li>
            <li>ই-মেইল</li>
            <li>সামাজিক যোগাযোগ মাধ্যম (Facebook, WhatsApp, etc.)</li>
          </ul>
          <hr />
          <h1 className={`${h1Cls}`}>তথ্য ও যোগাযোগের গুরুত্ব:</h1>
          <ul className="list-decimal lg:px-5">
            <li>
              <b>শিক্ষা:</b> অনলাইন শিক্ষা, ডিজিটাল পাঠ্যপুস্তক।{" "}
            </li>
            <li>
              <b>ব্যবসা:</b> ই-কমার্স, অনলাইন ব্যাংকিং। চিকিৎসা: টেলিমেডিসিন,
              ডিজিটাল রিপোর্ট।
            </li>
            <li>
              <b>প্রশাসন:</b> ই-গভর্ন্যান্স, নাগরিক সেবা।
            </li>
            <li>
              <b>যোগাযোগ:</b> দেশ-বিদেশে দ্রুত বার্তা আদান-প্রদান।
            </li>
          </ul>
          <hr />
          <h1 className={`${h1Cls}`}>উপসংহারঃ</h1>
          <p className="lg:px-5">
            তথ্য ও যোগাযোগ আমাদের দৈনন্দিন জীবনে অপরিহার্য হয়ে উঠেছে। আধুনিক
            সমাজে দক্ষতা ও জ্ঞানের উন্নয়নে ICT একটি গুরুত্বপূর্ণ ভূমিকা পালন
            করছে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramHome;