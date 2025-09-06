import React from "react";
import { ExternalLink } from "react-external-link";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsappSquare, FaYoutube } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex gap-3 text-lg justify-center">
      <ExternalLink
        target="_blank"
        href="https://wa.me/01406541101?text=Hello,Mr/Ms.How are you?"
        className="btn btn-circle bg-white h-7"
      >
        <FaWhatsappSquare
          title="+8801406541101"
          className="hover:h-7 rounded w-8 h-6 my-1 text-green-400"
        />
      </ExternalLink>
      <ExternalLink
        target="_blank"
        href="https://www.facebook.com/codeschoolbd23/"
        className="btn btn-circle bg-white h-7"
      >
        <FaFacebook
          title="ফেসবুকে আপনাকে স্বাগতম"
          className="hover:h-7 rounded w-8 h-6 my-1 text-blue-900"
        />
      </ExternalLink>
      <ExternalLink
        target="_blank"
        href="https://www.youtube.com/@codeschoolbd23"
        className="btn btn-circle bg-white h-7"
      >
        <FaYoutube
          title="ইউটিউবে আপনাকে স্বাগতম"
          className="hover:h-7 rounded w-8 h-6 my-1 text-red-500"
        />
      </ExternalLink>
      <ExternalLink
        target="_blank"
        href="https://www.linkedin.com/in/codeschoolbd23/"
        className="btn btn-circle bg-white h-7"
      >
        <FaLinkedin
          title="লিংকডইন আপনাকে স্বাগতম"
          className="hover:h-7 rounded  w-8 h-6 my-1 text-blue-700"
        />
      </ExternalLink>
      <ExternalLink
        target="_blank"
        href="https://github.com/codeschoolbd23"
        className="btn btn-circle bg-white h-7"
      >
        <FaGithub
          title="গিটহাব আপনাকে স্বাগতম"
          className="hover:h-7 rounded w-8 h-6 my-1 text-black"
        />
      </ExternalLink>
    </div>
  );
};

export default Social;
