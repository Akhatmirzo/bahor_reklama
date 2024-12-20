import React from "react";
import assets from "../assets/assets";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="w-full h-auto p-[20px_24px] b-nav">
        <div className="global-container flex-col w-full">
          <div className="w-full flex items-center justify-between">
            <a href="#" className="b-nav-brand">
              <img src={assets.Logo} alt="Logo" className="w-[120px]" />
            </a>

            <div className="flex items-center gap-[20px] sm:flex-col sm:gap-[5px] sm:items-end">
              <div className="sm:text-[14px] sm:font-semibold">
                Obuna bo'ling:
              </div>
              <div className="flex items-center gap-[10px]">
                <a
                  href="https://www.instagram.com/nizomov_ulugbek_?igsh=eW84czB6MGdpaXRy"
                  target="_blank"
                >
                  <FaInstagram fontSize={25} className="sm:text-[18px]" />
                </a>
                <a href="https://t.me/baxorreklamaN001" target="_blank">
                  <FaTelegramPlane fontSize={25} className="sm:text-[18px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-5 md:mt-10 flex md:flex-col items-center justify-between">
            <div className="flex items-center gap-[20px] sm:flex-col sm:gap-[5px]">
              <div className="sm:text-[14px] sm:font-semibold">
                Bog'lanish uchun:
              </div>
              <div className="flex items-center gap-[10px]">
                <a href="tel:+998999999999999" target="_blank">
                  +998999999999999
                </a>
              </div>
            </div>
            <div className="flex items-center gap-[20px] md:flex-col sm:gap-[5px]">
              <div className="sm:text-[14px] sm:font-semibold">Address:</div>
              <div className="flex items-center gap-[10px]">
                <a href="tel:+998999999999999" target="_blank" className="text-center">
                  Denov tumani O'zbegim to'yxonasi ro'parasi
                </a>
              </div>
            </div>
          </div>

          <div class="flex md:flex-col items-center justify-between mt-10 w-full px-[24px] py-[16px] border-t-2 border-[#eee]">
            <p class="credits md:text-center flex md:flex-col">
              <span className=" whitespace-nowrap">Powered by</span>
              <a href="https://www.instagram.com/akhatmirzo.umarov/" target="_blank">Akhatmirzo Umarov and Bekzod Sattorov</a>
              <span className=" whitespace-nowrap">Designed by</span>
              <a href="https://www.instagram.com/iambecksattorov/" target="_blank">Bekzod Sattorov</a>
            </p>
            <nav class="links items-center md:justify-center">
              <a href="/">Licenses</a>
              <a href="/">Style guide</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
