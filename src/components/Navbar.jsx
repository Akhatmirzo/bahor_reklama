import React from 'react';

import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

import assets from '../assets/assets';

const Navbar = () => {
  return (
    <div className='w-full h-auto p-[20px_24px] b-nav'>
        <div className="nav-container">
            <a href="#" className='b-nav-brand'>
                <img src={assets.Logo} alt="Logo" className='w-[120px]' />
            </a>
            <div className='flex items-center gap-[20px] sm:flex-col sm:gap-[5px] sm:items-end'>
                <div className='sm:text-[14px] sm:font-semibold'>Obuna bo'ling:</div>
                <div className='flex items-center gap-[10px]'>
                    <a href="https://www.instagram.com/nizomov_ulugbek_?igsh=eW84czB6MGdpaXRy" target='_blank'>
                        <FaInstagram fontSize={25} className='sm:text-[18px]' />
                    </a>
                    <a href="https://t.me/baxorreklamaN001" target='_blank'>
                        <FaTelegramPlane fontSize={25} className='sm:text-[18px]' />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;