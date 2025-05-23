// src/components/CarpenterCardPreview.jsx
import React from "react";
import {
  FaWhatsapp,
  FaStar,
  FaPhoneAlt,
  FaBookmark,
  FaComments,
  FaFlag,
  FaShareAlt,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { PiHammerBold } from "react-icons/pi";
import svg from "../../assets/common/profileCard/ProfileCardBottom.svg";

const CarpenterCardPreview = ({
  firstName = "Kathir",
  lastName = "",
  profession = "Carpenter",
  company,
  experience = "",
  services = "",
  description = "",
  image,
  address,
  city,
  state,
  availableWeekends,
  rating = 0,
  reviews = 0,
}) => {
  const fullName = `${firstName} ${lastName}`.trim();
  const locationLabel =
    [address, city, state].filter(Boolean).join(", ") ||
    "Gandhipuram, Coimbatore";

  const serviceTags = services
    ? services
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="max-w-md mx-auto rounded-4xl bg-white shadow-sm p-4 relative">
      <div className="flex pt-5 items-center">
        {/* Profile Image */}
        <div className="w-24 h-24 rounded-full border-4 border-green-500 overflow-hidden">
          <img
            src={image || "https://via.placeholder.com/150"}
            alt={fullName || "Profile"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-4">
          {/* Name and Profession */}
          <h2 className="text-2xl font-semibold">{fullName || "Kathir"}</h2>
          <p className="text-lg">{profession || "Carpenter"}</p>
          <p className="text-xs flex items-center bg-black bg-opacity-60 text-white rounded-full px-2 py-1 mt-1">
            <MdLocationOn className="text-sm mr-1" />
            {locationLabel}
          </p>
        </div>
      </div>

      {/* Company (if any) */}
      {company && (
        <p className="text-sm text-gray-600 mt-2">Company: {company}</p>
      )}

      {/* Service Tags */}
      {serviceTags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-3 text-xs">
          {serviceTags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-cyan-100 border border-cyan-300 text-black px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* About / Description */}
      {description && (
        <div className="bg-gray-50 rounded-xl p-3 mt-4 text-sm text-gray-700">
          <h3 className="text-lg font-semibold mb-2">About Me</h3>
          <p className="text-sm">{description}</p>
          <div className="flex justify-between items-center mt-4 text-sm">
            {availableWeekends != null && (
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center gap-1">
                <IoMdTime />{" "}
                {availableWeekends ? "Available on weekends" : "Weekdays only"}
              </span>
            )}
            {experience && (
              <span className="bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1">
                <PiHammerBold /> {experience}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Rating */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold">{rating.toFixed(1)}</span>
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(rating) ? "opacity-100" : "opacity-30"
                }
              />
            ))}
          </div>
          <span className="text-gray-400 text-xs">
            Based on {reviews.toLocaleString()} reviews
          </span>
        </div>
        <button className="bg-green-600 text-white px-4 py-1 rounded-full text-sm">
          Get quotation
        </button>
      </div>

      {/* Bottom SVG & Actions */}
      <div className="relative -m-4 mt-6">
        <img src={svg} alt="Footer" className="w-full object-cover" />
        <div className="absolute inset-0 flex items-end justify-between px-6 pb-4 text-white text-xs">
          <button className="flex flex-col items-center hover:text-gray-200">
            <FaFlag className="text-lg" />
            Report
          </button>
          <button className="flex flex-col items-center hover:text-gray-200">
            <FaComments className="text-lg" />
            Chat
          </button>
          <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 bg-lime-500 p-4 rounded-full shadow-lg z-10 hover:bg-lime-600">
            <FaPhoneAlt className="text-black text-xl" />
          </div>
          <button className="flex flex-col items-center hover:text-gray-200">
            <FaShareAlt className="text-lg" />
            Share
          </button>
          <button className="flex flex-col items-center hover:text-gray-200">
            <FaBookmark className="text-lg" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarpenterCardPreview;
