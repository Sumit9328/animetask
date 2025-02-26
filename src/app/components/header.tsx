"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="overflow-visible">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 bg-[#eef2ff] px-5 py-4">
              <div className="hidden md:flex justify-between items-center px-5">
                <div className="flex items-center space-x-6">
                  <h1 className="font-[400] font-[ppr-m] text-blue-800 text-[30px]">
                    Logo
                  </h1>
                  <div className="menuValue">
                    <button className="text-blue-800 font-[400] font-[ppr-m] text-[20px] ">
                      CATEGORIES <span className="ml-1">▾</span>
                    </button>
                    <section className="overflow-hidden menuItem position-absolute bg-white shadow-md rounded-md ">
                      <div className="container-fluid  bg-[#eef2ff]">
                        <div className="row px-3">
                          <div className="col-md-12 px-5 flex">
                            <div className="col-md-6 flex items-center">
                              <ul className="space-y-1">
                                <li className="text-[20px] text-[#2430A0] font-[ppr-m] font-[400] pb-3">
                                  Language
                                </li>
                                <li className="text-[16px] font-[400] font-[nun-t] text-[#2430A0]">
                                  Cooking
                                </li>
                                <li className="text-[16px] font-[400] font-[nun-t] text-[#2430A0]">
                                  Music
                                </li>
                                <li className="text-[16px] font-[400] font-[nun-t] text-[#2430A0]">
                                  Arts & Crafts
                                </li>
                                <li className="text-[16px] font-[400] font-[nun-t] text-[#2430A0]">
                                  Yoga & Academics
                                </li>
                                <li className="text-[16px] font-[400] font-[nun-t] text-[#2430A0]">
                                  Cultural
                                </li>
                              </ul>

                              <ul className="space-y-1">
                                <li className="text-[20px] text-[#2430A0] font-[ppr-m] font-[400] pb-3">
                                  Language
                                </li>
                                <li className="text-[16px] font-[400] font-[nun-t] text-[#2430A0]">
                                  Cooking
                                </li>
                                <li className="text-[16px] font-[400] font-[nun-t] text-[#2430A0]">
                                  Music
                                </li>
                                <li className="text-[16px] font-[400] font-[nun-t] text-[#2430A0]">
                                  Arts & Crafts
                                </li>
                                <li className="text-[16px] font-[400] font-[nun-t] text-[#2430A0]">
                                  Yoga & Academics
                                </li>
                                <li className="text-[16px] font-[400] font-[nun-t] text-[#2430A0]">
                                  Cultural
                                </li>
                              </ul>
                            </div>

                            <div className="col-md-6 flex justify-center items-center">
                              <Image
                                src="/images/Group 1135.svg"
                                alt="Bookmark"
                                width={476}
                                height={346}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <Link href="/teach" className="no-underline">
                    <span className="text-blue-800 font-[ppr-m] font-[500] text-[16px] cursor-pointer">
                      TEACH
                    </span>
                  </Link>
                  <div className="border border-gray-300 h-6"></div>
                  <Link href="/login">
                    <button className="border-2 border-blue-800 text-blue-800 font-[400] text-[16px] px-4 py-2 rounded-full">
                      LOGIN
                    </button>
                  </Link>
                  <Link href="/signup">
                    <button className="bg-[#2430A0] text-white font-[400] text-[16px] px-4 py-2 rounded-full">
                      SIGNUP
                    </button>
                  </Link>
                </div>
              </div>

              {/* Mobile View */}
              <div className="md:hidden flex justify-between items-center">
                <h1 className="font-[400] font-[ppr-m] text-blue-800 text-[24px]">
                  Logo
                </h1>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-blue-800"
                >
                  {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#eef2ff] z-50 p-5">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-blue-800"
          >
            <X size={30} />
          </button>
          <div className="flex flex-col items-center mt-10 space-y-6">
            <Link href="/teach" className="text-blue-800 text-xl font-[ppr-m]">
              TEACH
            </Link>
            <button className="text-blue-800 text-xl font-[ppr-m]">
              CATEGORIES <span>▾</span>
            </button>
            <Link href="/login">
              <button className="border-2 border-blue-800 text-blue-800 text-xl px-4 py-2 rounded-full">
                LOGIN
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-[#2430A0] text-white text-xl px-4 py-2 rounded-full">
                SIGNUP
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
