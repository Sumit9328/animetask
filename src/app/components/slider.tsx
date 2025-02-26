"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useEffect } from "react";

const teachers = [
  { name: "Karandeep", subject: "YOGA", img: "/images/Rectangle 157.svg" },
  { name: "Karandeep", subject: "YOGA", img: "/images/Rectangle 157 (1).svg" },
  { name: "Karandeep", subject: "YOGA", img: "/images/Rectangle 157 (2).svg" },
  { name: "Karandeep", subject: "YOGA", img: "/images/Rectangle 157.svg" },
  { name: "Karandeep", subject: "YOGA", img: "/images/Rectangle 157.svg" },
];

export default function TeacherSlider() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const nextButton = document.querySelector(".swiper-button-next") as HTMLElement | null;
      const prevButton = document.querySelector(".swiper-button-prev") as HTMLElement | null;

      if (nextButton) nextButton.style.left = "50px";
      if (prevButton) prevButton.style.left = "0px";
    }
  }, []);

  return (
    <div className="col-md-12 sm:pt-14">
      <div className="sm:py-10 py-4 sm:px-5 px-3 relative">
        <h2 className="text-[40px] font-[ppr-m] font-[700] text-[#1A237E] px-4 mb-5 text-center sm:text-left">
          Meet our teachers
        </h2>

        <div className="absolute top-1/2 left-0 z-10 flex gap-2 -translate-y-1/2">
          <div className="swiper-button-prev bg-white border px-4 py-2 rounded-full shadow-md"></div>
          <div className="swiper-button-next bg-white px-4 py-2 rounded-full shadow-md"></div>
        </div>

        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3.2 },
          }}
          className="mySwiper"
        >
          {teachers.map((teacher, index) => (
            <SwiperSlide key={index} className="p-4 relative">
              <div className="bg-white overflow-hidden transition-all duration-300 rounded-2xl shadow-md">
                <div className="relative">
                  <Image
                    src={teacher.img}
                    alt={teacher.name}
                    width={500}
                    height={300}
                    className="rounded-t-2xl w-full"
                  />
                </div>
                <div className="p-4 text-center w-full">
                  <h3 className="text-lg font-bold">{teacher.name}</h3>
                  <p className="text-sm text-pink-600 font-semibold">
                    {teacher.subject}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
