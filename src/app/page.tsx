
'use client';
import React from "react";
import Header from "./components/header";
import Image from "next/image";
import CurrencyToggle from "./components/capButton";
import TeacherSlider from "./components/slider";
import { useState } from "react";
import Footer from "./components/footer";
import EmailInput from "./components/emailInput";
import AnimatedLogo from "./components/animBut";
import { FaArrowRight } from "react-icons/fa";



const categories = [
  { name: "Language", img: "/images/first.svg" },
  { name: "Music", img: "/images/eight.svg" },
  { name: "Music", img: "/images/third.svg" },
  { name: "Arts & Craft", img: "/images/fourth.svg" },
  { name: "Yoga", img: "/images/fifth.svg" },
  { name: "Academics", img: "/images/sixth.svg" },
  { name: "Back to Roots", img: "/images/seventh.svg" },
  { name: "Funteresting", img: "/images/eight.svg" },
];



const testimonials = [
  {
    name: "Karandeep",
    img: "/images/Ellipse 12 (1).svg", // Update with actual image path
    text: "It is nice to be on an international platform where there are teachers from around the world.",
  },
  {
    name: "Kalpana",
    img: "/images/Ellipse 12.svg", // Update with actual image path
    text: "The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well.",
    highlight: true, // Center one is highlighted
  },
  {
    name: "Kirti",
    img: "/images/Ellipse 12 (2).svg", // Update with actual image path
    text: "As a student, I get to explore and learn about the different cultural specialties of another country with native teachers.",
  },
];



const blogs = [
  {
    id: 1,
    category: "CATEGORY 01",
    image: "/images/Rectangle 8.svg", // Replace with your actual image
    title: "Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
    publisher: "Publisher name",
    comments: 0,
  },
  {
    id: 2,
    category: "CATEGORY 03",
    image: "/images/Rectangle 8 (1).svg",
    title: "Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
    publisher: "Publisher name",
    comments: 12,
  },
  {
    id: 3,
    category: "CATEGORY 02",
    image: "/images/Rectangle 8 (2).svg",
    title: "Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
    publisher: "Publisher name",
    comments: 0,
  },
];



const Home = () => {
  const [currency] = useState('NOK');
  const [email, setEmail] = useState("");
  return (
    <>
      <section>
        <Header />
      </section>

      <section className="overflow-hidden">
        <div className="container-fluid">
          <div className="sm:px-8">

          <div className="row">
            <div className="col-md-12 sm:flex sm:pt-4 pt-4">
              <div className="col-md-6 sm:flex items-center sm:px-5 px-3">
                <div className="col-md-8">
                  <div className="sm:flex items-center">
                    {" "}
                    <p className="sm:text-[25px] text-[50px] font-[700] font-[ppr-sm] text-[#2430A0]">
                      Hommies
                    </p>
                    <Image
                      src="/images/pngwing 1.svg"
                      alt="Agile Logo"
                      width={42}
                      height={42}
                      className="p-0 m-0 mx-1"
                    />
                    <p className="sm:text-[25px] text-[40px] font-[ppr-sm] font-[700] text-[#2430A0]">
                      Happiness Home
                    </p>
                    <Image
                      src="/images/Subtract.svg"
                      alt="Agile Logo"
                      width={42}
                      height={42}
                      className="p-0 m-0 mx-[5px]"
                    />
                  </div>
                  <p className=" font-[400] text-[20px] text-[#2430A0] leading-[26px]">
                    A Nordic startup which brings incredibly interesting hobbies
                    from around the world to people of all ages.
                  </p>

                  <EmailInput />
                </div>
              </div>

              <div className="col-md-6">
                <Image
                  src="/images/Group 1130.svg"
                  alt="Agile Logo"
                  width={42}
                  height={42}
                  className="p-0 m-0 w-full"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>



      <section className="overflow-hidden">
        <div className="container-fluid">
          <div className="sm:px-8">

          <div className="row">
            <div className="col-md-12 sm:flex justify-center items-center sm:px-5 px-4">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="col-md-12 flex justify-center items-center"></div>
                <div className="col-md-12 px-2">
                  <p className="text-[40px] font-[ppr-sm] font-[700] leading-[50px] text-[#2430A0]">
                    Explore. Enroll. Have Fun. Repeat - here hobby meets
                    happiness
                  </p>
                </div>
              </div>
              <div className="col-md-3 sm:flex justify-end items-center">
                <AnimatedLogo />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>



<section className="overflow-hidden">
  <div className="container-fluid">
    <div className="sm:px-8">

    <div className="row">
      <div className="col-md-12 sm:px-5 pt-24 sm:flex justity-between items-center">
        <div className="col-md-3 sm:py-0 py-4">
          <div className="col-md-12 flex justify-center items-center">
          <Image
                  src="/images/Artboard-27.svg"
                  alt="Agile Logo"
                  width={90}
                  height={90}
                  className="p-0 m-0 pb-4 sm:w-[90px] w-[200px]"
                />
          </div>
          <div className="flex justify-center">

          <div className=" col-md-10 text-center h-[120px]">
            <p className="text-[19px] font-[ppr-m] font-[500] text-[#2430A0]">Learn something new</p>
            <p className="text-[16px] font-[nun-t] font-[400] px-[35px] font-[nun-t] text-[#51557D]">Explore your passion and go beyond the physical and mental boundaries of time, age, gender or geography.</p>
          </div>
          </div>
        </div>
        <div className="col-md-3 sm:py-0 py-4">
          <div className="col-md-12 flex justify-center items-center">
          <Image
                  src="/images/Artboard-21.svg"
                  alt="Agile Logo"
                  width={90}
                  height={90}
                  className="p-0 m-0 pb-4 sm:w-[90px] w-[200px]"
                />
          </div>
          <div className="flex justify-center">

          <div className=" col-md-10 text-center h-[120px]">
            <p className="text-[19px] font-[ppr-m] font-[500] text-[#2430A0]">Skilled & Passionate Teachers</p>
            <p className="text-[16px] font-[nun-t] font-[400] px-[35px] font-[nun-t] text-[#51557D]">We offers Interactive classes by experts who are qualified and trusted.</p>
          </div>
          </div>
        </div>
        <div className="col-md-3 sm:py-0 py-4">
          <div className="col-md-12 flex justify-center items-center">
          <Image
                  src="/images/6092 - Studying on System II.svg"
                  alt="Agile Logo"
                  width={90}
                  height={90}
                  className="p-0 m-0 pb-4 sm:w-[90px] w-[200px]"
                />
          </div>
          <div className="flex justify-center">

          <div className=" col-md-10 text-center h-[120px]">
            <p className="text-[19px] font-[ppr-m] font-[500] text-[#2430A0]">Take classes anytime, anywhere</p>
            <p className="text-[16px] font-[nun-t] font-[400] px-[35px] font-[nun-t] text-[#51557D]">Join sessions at your own convenience and pace, from the comforts of your home.</p>
          </div>
          </div>
        </div>
        <div className="col-md-3 sm:py-0 py-4">
          <div className="col-md-10 flex justify-center items-center">
          <Image
                  src="/images/icons8-topup-payment-96 1.svg"
                  alt="Agile Logo"
                  width={90}
                  height={90}
                  className="p-0 m-0 pb-4 sm:w-[90px] w-[200px]"
                />
          </div>
          <div className="flex justify-center ">

          <div className=" col-md-12 text-center h-[120px]">
            <p className="text-[19px] font-[ppr-m] font-[500] text-[#2430A0]">Pay as you go</p>
            <p className="text-[16px] font-[nun-t] font-[400] px-[35px] font-[nun-t] text-[#51557D]">No enrollment fee for our classes. You only pay for the classes that you take. Your payment is Safe and secure with us.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>



<section className="overflow-hidden">
  <div className="container-fluid">
    <div className="sm:px-8">

    <div className="row">
      <div className="col-md-12 sm:px-5 px-3 pt-14">
      <div className="p-6 bg-white">
        <div className="col-md-12 sm:flex py-4">

        <div className="col-md-6">

      <div className="sm:flex gap-3 items-center mb-2">
        <h2 className="text-[40px] font-[700] font-[ppr-m] text-blue-900">Discover classes</h2>
        <button className="text-red-600 font-[ppr-m] font-semibold underline">SHOW ALL</button>
      </div>
      <p className="text-gray-600 font-[ppr-m] mb-6">Choose from a variety of classes from around the world.</p>
        </div>
      <div className=" col-md-6 flex justify-end mb-4">
      <CurrencyToggle/>

      </div>
        </div>
      <div className="sm:grid sm:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-[#2430A0] shadow-md rounded-lg">
            <div className="relative">
              <Image src="/images/unsplash_azA1hLbjBBo.svg" alt="Class" width={300} height={200} className="w-full" />
              <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">60% OFF</span>
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                <Image src="/images/Group 930.png" alt="Bookmark" width={16} height={16} />
              </button>
            </div>
            <div className="p-4 bg-blue-50">
              <h3 className="text-blue-600 text-sm font-bold font-[nun-t]">LANGUAGE</h3>
              <h2 className="text-lg font-semibold font-[ppr-m]">Class name - Lorem ipsum sit elit varius lectus sit amet</h2>
              <p className="text-sm text-gray-600 font-[nun-t]">by John Doe <span className="text-yellow-500">★ 4.7</span></p>
              <p className="text-gray-600 text-sm mt-2 font-[nun-t]">Lorem ipsum dolor sit amet, varius consectetur varius entat consectetur adipiscing elit...</p>
            </div>
            <div className="flex justify-between gap-2 px-4 sm:mb-0 mb-4 py-2 border-t">
              <p className="text-white font-[ppr-m] p-0 m-0">{currency === 'NOK' ? 'kr1000' : '₹1,499'} <span className="text-gray-400 line-through">{currency === 'NOK' ? 'kr2000' : '₹2,499'}</span></p>
              <p className="text-white px-4 py-0 font-[ppr-m] rounded-full p-0 m-0 pb-2">Enroll now</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
    </div>
  </div>
</section>




<section className="overflow-hidden">
  <div className="container-fluid">
    <div className="sm:px-8">

    <div className="row">
      <div className="col-md-12 sm:px-5 px-3 pt-14">
      <div className="px-4">
      <h2 className="sm:text-[40px] text-[32px] font-[ppr-m] font--[700] text-blue-900 mb-6">Browse by category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="text-center">
            <div className="relative group">
              <div className="overflow-hidden rounded-lg p-4">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  width={160}
                  height={150}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="mt-2 text-gray-800 font-medium">{cat.name}</p>
              <div className="w-full h-[2px] bg-gray-300 transition-all duration-300 mt-1 group-hover:bg-blue-600"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
    </div>
  </div>
</section>





<section className="overflow-hidden">
  <div className="container-fluid p-0 m-0">
    <div className="sm:px-8">

    <div className="row">
      <div className="row-md-12 sm:flex justify-between gap-4">
        <div className="col-md-10">
          <div className="col-md-12 h-[60px]"></div>
          <div className="col-md-12 sm:px-5 px-3">
<div className="col-md-12">
  <p className="text-[40px] font-[500] text-[#2430A0] leading-[40px] pb-4 font-[ppr-m]">Six reasons to choose our class</p>
</div>
<div className="col-md-12 flex flex-wrap ">
  <div className="col-md-4">
    <div className="col-md-11 px-3">
    <Image src="/images/firstCl.svg" alt="Bookmark" width={120} height={120} className="py-3" />
    <p className="text-[20px] font-[ppr-m] font-[700]">Interactive live online classes at your convenient time slots</p>

    </div>
  </div>
  <div className="col-md-4">
    <div className="col-md-11 px-3">
    <Image src="/images/firstTech.svg" alt="Bookmark" width={120} height={120} className="py-3" />
    <p className="text-[20px] font-[ppr-m] font-[700]">Learning from passionate, talented and trusted teachers</p>

    </div>
  </div>
  <div className="col-md-4">
    <div className="col-md-11 px-3">
    <Image src="/images/secTech.svg" alt="Bookmark" width={120} height={120} className="py-3" />
    <p className="text-[20px] font-[ppr-m] font-[700]">Cross country sharing of interesting and unique hobbies from across the world</p>

    </div>
  </div>
  <div className="col-md-4 pt-4">
    <div className="col-md-11 px-3">
    <Image src="/images/thirdTech.svg" alt="Bookmark" width={120} height={120} className="py-3" />
    <p className="text-[20px] font-[ppr-m] font-[700]">Age no bar for enroling into your cherished hobby or activity classes</p>

    </div>
  </div>
  <div className="col-md-4 pt-4">
    <div className="col-md-11 px-3">
    <Image src="/images/fifthTech.svg" alt="Bookmark" width={120} height={120} className="py-3" />
    <p className="text-[20px] font-[ppr-m] font-[700]">Transparent and structured fee payment options</p>

    </div>
  </div>
  <div className="col-md-4 pt-4">
    <div className="col-md-11 px-3">
    <Image src="/images/revival.svg" alt="Bookmark" width={120} height={120} className="py-3"/>
    <p className="text-[20px] font-[ppr-m] font-[700]">Contributing to the revival and nurturing of traditional art forms</p>

    </div>
  </div>
</div>
          </div>
        </div>
        <div className="col-md-2 absolute right-[1px] flex justify-end">
        <Image src="/images/Vector.svg" className="hidden sm:block" alt="Bookmark" width={176} height={346} />

        </div>
      </div>
    </div>
    </div>
  </div>
</section>



<section className="overflow-hidden">
  <div className="container-fluid">
    <div className="sm:px-8">

    <div className="row">
      <div className="col-md-12 sm:px-5 px-3 pt-14">
        <h2 className="text-[40px] px-4 font-[ppr-m] font-[700] text-blue-900 pb-5">
          Love from community
        </h2>
        <div className="grid grid-cols-1 px-4 sm:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg border shadow-md text-center transition-all duration-300 ${
                testimonial.highlight
                  ? "bg-blue-700 text-white transform scale-105"
                  : "bg-white text-gray-700"
              }`}
            >
              <Image
                src="/images/iconA.svg"
                alt="Quote"
                width={50}
                height={50}
                className="absolute top-[40px] left-[50px] opacity-40"
              />

              <div className="flex justify-center">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
              <p className="mt-4 font-[600] text-[20px] font-[ppr-m]">{testimonial.name}</p>
              <p className="mt-2 font-[400] text-[16px] font-[nun-t]">{testimonial.text}</p>
              {testimonial.highlight && (
                <div className="mt-2 w-16 h-1 bg-white mx-auto"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  </div>
</section>




<TeacherSlider/>





<section className="overflow-hidden">
        <div className="container-fluid">
          <div className="sm:px-8">

          <div className="row">
            <div className="col-md-12 sm:flex sm:px-5 px-3">
              
            <div className="col-md-6">
                <Image
                  src="/images/Group 1130.svg"
                  alt="Agile Logo"
                  width={42}
                  height={42}
                  className="p-0 m-0 w-full"
                />
              </div>
              <div className="col-md-6 sm:flex items-center sm:px-5 px-3">
              <div className="p-6 bg-white sm:px-5 px-3 rounded-lg">
      <h2 className="text-[40px] font-[ppr-m] pb-3 font-[400] text-blue-900">Become a certified teacher</h2>
      <p className="text-gray-600 mt-2 font-[nun-t] font-[400] text-[16px]">
        We only have the best and trusted teachers from the globe. Join us if you have the skill and passion to share it.
      </p>

      <ul className="mt-4 space-y-2 text-gray-700">
        <li className="flex items-center">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 font-[nun-t] font-[400] text-[16px]"></span>
          Make your own schedule
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 font-[nun-t] font-[400] text-[16px]"></span>
          Teach students on an international platform
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 font-[nun-t] font-[400] text-[16px]"></span>
          Become part of an international community of passionate educators
        </li>
      </ul>

      <button className="mt-5 flex items-center bg-blue-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-800 transition">
        START TEACHING <FaArrowRight className="ml-2" />
      </button>
    </div>
              </div>

            </div>
          </div>
          </div>
        </div>
      </section>






      <section className="overflow-hidden mx-auto sm:px-5 px-3 sm:pt-14 pt-4">
        <div className="container-fluid">
          <div className="sm:px-8">
            
          <div className="row">
            <div className="col-md-12 sm:px-5 px-3">

      <div className="sm:flex gap-3 items-center pb-6">
        <h2 className="text-[40px] font-[ppr-m] font-[400] text-blue-900">Our blogs</h2>
        <a href="#" className="text-red-500 font-semibold hover:underline">
          SHOW ALL
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded-lg shadow-md overflow-hidden bg-white">
            <div className="relative">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded">
                {blog.category}
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-[20px] font-[ppr-m] font-[600] text-gray-800">{blog.title}</h3>
              <p className="text-gray-600 font-[400] font-[nun-t] text-[16px] mt-2">{blog.description}</p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                <span className="font-semibold text-blue-600">{blog.publisher}</span>
                <div className="flex items-center">
                  <span className="ml-1">{blog.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
            </div>

          </div>
          </div>
        </div>
    </section>



    <section className="overflow-hidden">
  <div className="container-fluid">
    <div className="sm:py-10">

    <div className="row">
      <div className="col-md-12 sm:pt-24 pt-4 sm:pb-24 pb-4">
        <div className="sm:flex justify-center items-center sm:px-5 px-3">
          <div className="bg-[#FF6F52] text-white rounded-full w-full max-w-4xl px-5 py-5 flex flex-col items-center shadow-lg">
            <h2 className="text-lg sm:text-[40px] md:text-3xl font-[700] font-[ppr-m] text-center">
              Start learning new skills today and <br /> pursue your passion
            </h2>
            <p className="sm:mt-3 text-center text-[14px] sm:text-[16px] font-[nun-t] md:text-base">
              Join the community of global learners and start exploring today.
            </p>

            <div className="flex flex-col sm:flex-row items-center bg-white rounded-full sm:p-1 mt-4 sm:mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-gray-700 outline-none bg-transparent w-full sm:w-auto text-sm sm:text-base"
              />
              <button className="bg-[#FF6F52] text-white font-semibold px-5 py-2 rounded-full w-full sm:w-auto  sm:mt-0">
                GET STARTED →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>




<Footer/>



    </>
  );
};

export default Home;
