import React from "react";
import ProfileBadge from "./ProfileBadge";
import { MdLocationPin } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import PinIcon from "/src/assets/navbar/pin.svg?react";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      const value = e.target.elements.search.value;
      onSearch(value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Service search form"
      className="hidden lg:flex w-full max-w-2xl items-center gap-2 border-2 border-primary bg-black p-1 rounded-full"
    >
      <ProfileBadge
        name="Location"
        location="City, State"
        icon= {PinIcon}
        className="text-white"
      />

      <input
        type="text"
        name="search"
        placeholder="Search for services"
        className="flex-1 bg-white rounded-full text-base lg:text-lg px-4 py-2 focus:outline-none"
        aria-label="Search input"
      />

      <button
        type="submit"
        className="bg-primary rounded-full p-2 hover:bg-opacity-90 transition"
        aria-label="Submit search"
      >
        <IoSearch className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchBar;
