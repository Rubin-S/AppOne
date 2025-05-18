import React from "react";
import { FaWhatsapp, FaStar, FaPhoneAlt, FaSave, FaRegCommentDots, FaExclamationTriangle, FaBookmark, FaComments, FaFlag, FaShareAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { PiHammerBold } from "react-icons/pi";
import svg from "./Path5006.svg";

const CarpenterCard = () => {
    return (
        <div className="max-w-md mx-auto rounded-4xl bg-white shadow-sm p-4 relative">
            <div className="flex pt-5">
                {/* Profile Image */}
                <div className="w-30 h-30 mx-auto rounded-full border-4 border-green-500 overflow-hidden">
                    <img
                        src="https://via.placeholder.com/150" // Replace with your image
                        alt="Kathir"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    {/* Name and Location */}
                    <h2 className="text-2xl font-semibold mt-3">Kathir</h2>
                    <p className=" text-lg">Carpenter</p>
                    <p className="text-white text-xs flex items-center border-1 border-primary rounded-full justify-center gap-1 bg-[#000000bf] p-1">
                        <MdLocationOn className="text-black h-5 w-5 bg-primary rounded-full" /> Gandhipuram, Coimbatore
                    </p>
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-3 text-xs">
                {["House wiring", "Switchboard installation", "Switchboard installation"].map((tag, index) => (
                    <span
                        key={index}
                        className="bg-[#02cbce40] border border-[#88EEFF] text-black px-1 py-0.5 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* About Section */}
            <div className="bg-[#EDF4F9] rounded-xl p-3 mt-4 text-sm text-gray-700">
                <h3 className="text-lg font-semibold mb-2">About Me</h3>
                <p className="p-3 border-2 border-[#02cbce40] rounded-lg">
                    With over 12 years of hands-on experience, I offer reliable and
                    affordable carpentry solutions including door fittings, window
                    frames, custom furniture, and minor home repairs. Known for on-time
                    delivery and professional finish. Serving all areas in and around
                    Bangalore. Let’s build something great together!
                </p>

                {/* Availability and Experience */}
                <div className="flex justify-between items-center mt-4 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center gap-1">
                            <IoMdTime /> Available on weekends
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1">
                            <PiHammerBold /> 3 Years
                        </span>
                    </div>
                </div>
            </div>



            {/* Rating and Button */}
            <div className="flex justify-between items-center mt-4 text-sm">
                <div className="flex items-center gap-1">
                    <span className="text-2xl font-semibold">4.8</span>
                    <div className="flex text-yellow-400">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span className="text-gray-400 text-xs ml-1">Based on 10,000 Reviews</span>
                </div>
                <button className="bg-green-600 text-white px-4 py-1 rounded-full text-sm">
                    Get quotation
                </button>
            </div>

            {/* Bottom Actions */}
            <div className="relative -m-4">
                {/* SVG Footer Shape */}
                <img
                src={svg} // ✅ update with your actual relative path or import
                alt="Footer background"
                className="w-full object-cover"
                />

                {/* Bottom Buttons Overlay */}
                <div className="absolute inset-0 flex items-end justify-between px-6 pb-4 text-white text-xs">
                <button className="flex flex-col items-center">
                    <FaFlag className="text-lg" />
                    Report
                </button>
                <button className="flex flex-col items-center">
                    <FaComments className="text-lg" />
                    Chat
                </button>

                {/* Center Call Button (Above SVG center) */}
                <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 bg-lime-500 p-4 rounded-full shadow-lg z-10">
                    <FaPhoneAlt className="text-black text-xl" />
                </div>

                <button className="flex flex-col items-center">
                    <FaShareAlt className="text-lg" />
                    Share
                </button>
                <button className="flex flex-col items-center">
                    <FaBookmark className="text-lg" />
                    Save
                </button>
                </div>
            </div>
        </div>
    );
};

export default CarpenterCard;
