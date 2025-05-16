import React from 'react'
import { MdLocationPin } from 'react-icons/md';
import { footerLinks } from '../../assets/assets';

const Footer = () => {
  return (
    <>
    <footer className='bg-black w-full'>
        <div className='lg:flex justify-between'>
            <div className='md:flex justify-between'>
                {footerLinks.map((items,index)=>{
                    return(
                        <div key={index} className='text-white p-10'>
                            <h6 className='font-bold'>{items.title}</h6>
                            {items.links.map((links,index)=>{
                                return(
                                    <p key={index} className='font-light' >{links.text}</p>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div className='flex p-10'>
                <h3 className='text-white'>Stay Connected: </h3>
                <div className="flex items-center rounded-full border-2 size-fit border-primary p-px pl-1">
                    <div className="bg-primary rounded-full size-fit flex items-center justify-center">
                        <MdLocationPin className=' size-5' />
                    </div>
                    <div className="bg-primary rounded-full size-fit flex items-center justify-center">
                        <MdLocationPin className=' size-5' />
                    </div>
                    <div className="bg-primary rounded-full size-fit flex items-center justify-center">
                        <MdLocationPin className=' size-5' />
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:flex justify-between'>
            <div>
                <div className='h-0.5 my-0.5 rounded-full bg-gray-700 w-full' />
                <div className='text-white flex items-end p-5'>
                    <h1 className='text-xl font-bold italic leading-tight md:text-2xl lg:text-3xl'>AskIT</h1>
                    <p className='text-xs md:text-lg lg:text-xl'>Copyrights @ 2024-2025 AskIT. All rights reserved.</p>
                </div>
            </div>
            <div className='flex p-5'>
                <div className="flex items-center rounded-full border-2 size-fit border-primary p-px pl-1">
                    <div className="bg-primary rounded-full size-fit flex items-center justify-center">
                        <MdLocationPin className=' size-5' />
                    </div>
                    <div className='text-white px-2'>
                        <p className='text-[10px] font-semibold'>Download on</p>
                        <p className='text-[8px] font-thin'>AppStore</p>
                    </div>
                </div>
                <div className="flex items-center rounded-full border-2 size-fit border-primary p-px pl-1">
                    <div className="bg-primary rounded-full size-fit flex items-center justify-center">
                        <MdLocationPin className=' size-5' />
                    </div>
                    <div className='text-white px-2'>
                        <p className='text-[10px] font-semibold'>Get it on </p>
                        <p className='text-[8px] font-thin'>PlayStore</p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    </>
  )
}

export default Footer