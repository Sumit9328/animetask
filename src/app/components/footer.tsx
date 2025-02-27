import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (

    <>
    
    <footer className="bg-gray-100 sm:px-8">
      <div className="py-10 sm:px-2 pt-14">

      <div className="container-fluid sm:px-5 mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            
            <ul className="mt-3 space-y-2 text-gray-600">
            <li className="text-[26px] font-[400] font-[ppr-m] text-[#2430A0]">Class Categories</li>

              <li>Cooking</li>
              <li>Music</li>
              <li>Arts & Craft</li>
              <li>Yoga</li>
              <li>Academic</li>
              <li>Back To Roots</li>
              <li>Funteresting</li>
            </ul>
          </div>

          <div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li className="text-[26px] font-[400] font-[ppr-m] text-[#2430A0]">Company</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
            </ul>
          </div>

          <div>
           
            <ul className="mt-3 space-y-2 text-gray-600">
              <li className="text-[26px] font-[400] font-[ppr-m] text-[#2430A0]">Learn</li>
              <li>All Classes</li>
            </ul>
            
            <ul className="mt-3 space-y-2 text-gray-600">
              <li className="text-[26px] font-[400] font-[ppr-m] text-[#2430A0]">Teach</li>

              <li>Become A Teacher</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <Image 
              src="/images/Rectangle 164.svg" 
              alt="Sell Products" 
              width={300}
              height={250}
              className="rounded-lg shadow-md"
            />
            <button className="mt-3 bg-white text-blue-900 border border-blue-900 px-4 py-2 rounded-lg font-[400] text-[14px] font-[nun-t] hover:bg-blue-900 hover:text-white transition">
              SELL YOUR PRODUCTS WITH US
            </button>
          </div>
        </div>

        <div className="border-t px-4 border-gray-300 mt-10 pt-3 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p className="font-[ppr-m] text-[16px]">© Project 2021. All rights reserved.</p>
          <p className="flex items-center sm:font-[16px] text-[22px] font-[nun-t]">
            Made with <span className="text-red-500 mx-1">❤️</span> by SimplePlan
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
    <FaFacebookF className="text-gray-600 hover:text-blue-900 transition cursor-pointer text-2xl md:text-3xl" />
    <FaInstagram className="text-gray-600 hover:text-blue-900 transition cursor-pointer text-2xl md:text-3xl" />
    <FaLinkedinIn className="text-gray-600 hover:text-blue-900 transition cursor-pointer text-2xl md:text-3xl" />
    <FaTwitter className="text-gray-600 hover:text-blue-900 transition cursor-pointer text-2xl md:text-3xl" />
</div>

        </div>
      </div>
      </div>
    </footer>
    </>
  );
}
