import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const keywords = [
    "amaravati city",
    "amaravati capital city",
    "crda plots for sale in amaravathi",
    "crda approved plots for sale in amaravathi",
    "apcrda plots",
    "crda land pooling plots for sale",
    "crda plots for sale",
    "crda pooling plots for sale",
    "amaravati crda",
    "capital amaravati",
    "amaravathi lands for sale",
    "amaravati land prices",
    "amaravathi land for sale",
    "land prices in amaravati andhra pradesh",
    "land rates in amaravathi",
    "amaravati land for sale",
    "amaravathi land pooling plots for sale",
    "land pooling plots for sale in amaravathi",
    "amaravathi land rates",
    "1 acre land cost in amaravathi",
    "plots for sale in amaravati",
    "plots for sale in amaravati andhra pradesh",
    "amaravathi plots for sale",
    "amaravathi plots",
    "plots in amaravati",
    "open plots in amaravati",
    "amaravathi properties",
    "plots in amaravati andhra pradesh",
    "plots sale in amaravathi crda region",
    "residential plots in amaravati andhra pradesh",
    "thullur real estate",
    "amaravati real estate",
    "real estate agents in amaravati andhra pradesh",
    "real estate in amaravathi",
    "amaravati properties",
    "amaravati apartments",
    "amaravathi homes",
    "apcrda plot details",
    "apcrda villages list",
    "apcrda plot search",
  ];

  const capitalizeWords = (text) =>
    text.replace(/\b\w/g, (char) => char.toUpperCase());

  const socials = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaWhatsapp />, link: "https://wa.me/919052693333" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaPinterest />, link: "https://pinterest.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* SEO Keywords Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm leading-relaxed">
          {keywords.map((word, idx) => (
            <span key={idx} className="block">
              {capitalizeWords(word)}
            </span>
          ))}
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-4 mt-8">
          {socials.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
          © Topline Realty - All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
