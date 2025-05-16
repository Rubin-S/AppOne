import React from 'react'
import SearchBar from '../common/SearchBar'
import ProfileBadge from '../common/ProfileBadge'
import { navLinks, menuLinks } from '../../assets/navbar/assets.jsx'
import { NavLink, useLocation } from 'react-router-dom'
import { MdLocationPin } from 'react-icons/md';
import { useAppContext } from '../../context/AppContext'

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, language, setLanguage, signupData} = useAppContext()
  const [open, setOpen] = React.useState(false)
  const location = useLocation()

  const logOut = () => {
    setIsLoggedIn(!isLoggedIn)
    console.log('Logged out')
  }

  const renderLinks = (isMobile = false) => (
    <div
      className={`items-center justify-center gap-4 flex flex-col sm:flex-row`}
    >
      {navLinks.map(({ name, to, showIfLoggedIn, img: Icon }) => {
        if (showIfLoggedIn && !isLoggedIn) return null;
        const className = `${
          isMobile ? "block" : ""
        } text-white font-semibold flex items-center gap-2`;

        return (
          <NavLink key={name} to={to} className={className}>
            {/* Render icon only on desktop */}
            {!isMobile && Icon && (
              <Icon
                className="w-5 h-5 rounded-full bg-primary p-0.5"
                aria-hidden="true"
              />
            )}
            {name}
          </NavLink>
        );
      })}

      {!isLoggedIn ? (
        <>
          <img src="/src/assets/navbar/login.svg" alt="" />
          <NavLink onClick={logOut} className="text-white font-semibold">
            Log In
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-primary cursor-pointer font-semibold text-black px-4 py-1 size-fit rounded-full"
          >
            Sign Up
          </NavLink>
        </>
      ) : (
        <ProfileBadge
          name={signupData.name}
          location={signupData.username}
          icon={MdLocationPin}
          className="text-white"
        />
      )}
    </div>
  );

  return (
    <nav className='flex items-center gap-20 justify-between px-6 md:px-8 lg:px-12 xl:px-16 py-4 border-b bg-black relative transition-all'>
      <NavLink to="/" className="text-3xl italic text-white font-bold">AskIT</NavLink>

      {location.pathname !== '/' && <SearchBar />}

      {/* Desktop nav */}
      <div className='hidden relative  group sm:flex items-center justify-between gap-4'>
        {renderLinks()}
        <div className="absolute top-full transform lg:-translate-x-1/2 md:-translate-x-1/3 rounded-md hidden group-hover:flex w-screen max-w-4xl bg-white shadow-lg border-t p-6">
          <div className="w-3/5">
            <div className='md:flex grid grid-cols-3 gap-8 w-full justify-between'>
              {menuLinks.map((items,index)=>{
                  return(
                      <div key={index} className='text-black p-5'>
                          <h6 className='font-bold'>{items.title}</h6>
                          {items.links.map((links,index)=>{
                              return(
                                  <p key={index} to={links.url} className='font-light cursor-pointer' >{links.text}</p>
                              )
                          })}
                      </div>
                  )
              })}
            </div>
          </div>
          <div className="w-2/5 flex-col items-center justify-center gap-4">
            <h1 className="font-bold p-1 ">Set Language</h1>
            <p className="italic p-1">Select your pefered language</p>
            <h1 className="font-semibold p-1">Language</h1>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border-2 border-gray-300 rounded-sm px-4 py-2"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="ta">Tamil</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="es">Spanish</option>
              <option value="ja">Japanese</option>
              <option value="zh">Chinese</option>
            </select>

          </div>
        </div>
      </div>

      {/* Mobile toggle button */}
      <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile nav */}
      <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-black shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
        {renderLinks(true)}
      </div>
    </nav>
  )
}

export default Navbar
