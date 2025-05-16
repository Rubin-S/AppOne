import React from 'react'
import ProfileBadge from './ProfileBadge';
import { MdLocationPin } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <form className="hidden lg:flex  h-fit w-2/5 bg-black border-2 border-primary p-1 rounded-full">
        <ProfileBadge name="Location" location="City, State" icon={MdLocationPin} className='text-white'/>
        <input type="text" 
               placeholder="Search" 
               className="flex items-center rounded-full lg:text-xl md:text-lg xs:text-base pl-5 border-1 bg-white height-full w-full border-gray p-px pl-1 ml-2">
        </input>
        <button className="bg-primary rounded-full size-fit flex items-center p-2 mx-1 justify-center">
                <IoSearch className='size-5' />
        </button>
    </form>
  )
}

export default SearchBar