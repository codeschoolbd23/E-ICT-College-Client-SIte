import React from "react";
import { Link } from "react-router";
import Social from "../../utilities/Social";
const Footer = () => {
  const cssLink =
    "text-shadow-lg/30 text-pretty mb-1 px-2  hover:text-green-300 hover:bg-purple-950 py-3";
const footermenu = [
  { id: 1, menu: "আমাদের সম্পর্কে" ,to:"about"},
  { id: 2, menu: "যোগাযোগ মাধ্যম" ,to:"contact"},
  { id: 3, menu: "শিখুন" ,to:"learn"},
  { id: 4, menu: "ব্লগ সাইট" ,to:"blog"},
  { id: 5, menu: "ফ্রি-রিসোর্স" ,to:"resorces"},
  {id:6,menu:"প্রতিষ্ঠান",to:"organization"},
  {id:7,menu:"সার্ভিস সমূহ",to:"service"},
  {id:8,menu:"শিক্ষকমন্ডলী",to:"teacher"},
  {id:9,menu:"সফলতার গল্প",to:"story"},
  {id:10,menu:"জিগাসা",to:"ask"},
  {id:11,menu:"সরকারী পিডিএফ",to:"pdf"},
  {id:12,menu:"কোড-স্কুল",to:"school"}
];
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content pt-10 pb-2">
      <div className="font-bold text-center text-shadow-lg/50 text-3xl text-yellow-200 w-full">
        ই-আইসিটি কলেজ
      </div>
      <hr className="text-white font-semibold w-full" />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 w-full text-lg lg:text-xl text-shadow-lg/50">
        {footermenu.map((ln) => (
          <Link key={ln.id} to={`/${ln.to}`} className={`${cssLink}`}>
            {ln.menu}
          </Link>
        ))}
      </div>

      <aside className="bg-blue-800 w-full">
        <p>
          <br />
          &copy;২০২৫ - ই-আইসিটি কলেজ। যাত্রার শুরু-১লা সেপ্টেম্বর ২০২৫ ইং;
        </p>
      <Social />
      </aside>
    </footer>
  );
};

export default Footer;
