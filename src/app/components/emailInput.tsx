"use client";
import { useState } from "react";
import Image from "next/image";

export default function EmailInput() {
    const [email, setEmail] = useState("");

    return (
        <>
        <div className="col-md-12 py-4 ">

        <div className="flex items-center border border-gray-400 rounded-full overflow-hidden max-w-lg">
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 text-gray-700 text-[14px] font-[ppr-sm] font-[300] focus:outline-none"
            />
            <button className="bg-blue-800 text-white sm:px-6 py-[12px] flex items-center justify-center w-full max-w-[250px] sm:w-[180px] rounded-full hover:bg-blue-900 transition mx-auto">
    <span className="font-[400] font-[ppr-sm] sm:text-[12px] text-[9px] sm:mr-2 text-center whitespace-nowrap">
        START EXPLORING
    </span>
    <Image
        src="/images/arrow-right-circle.svg"
        alt="Agile Logo"
        width={35}
        height={35}
        className="p-0 m-0 hidden sm:block"
    />
</button>

        </div>
        </div>

        </>
    );
}
