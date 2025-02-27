"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BotTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div className="col-md-3 flex justify-end items-center">
      <motion.div
        animate={{
          y: [0, -10, 10, 0], 
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={scrollToTop} // Click event to scroll to top
        className="cursor-pointer"
      >
        <Image
          src="/images/Group 964.svg"
          alt="Agile Logo"
          width={68}
          height={68}
          className="p-0 m-0 mx-1"
        />
      </motion.div>
    </div>
  );
}
