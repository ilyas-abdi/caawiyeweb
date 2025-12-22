"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // <-- framer-motion
import Testimonial1 from "./assets/Accpted.png";
import icon1 from "./assets/Icon1.png";
import icon3 from "./assets/Icon3.png";
import icon4 from "./assets/icon4.png";

const testimonials = [
  {
    image: Testimonial1,
    quote:
      "My laptop was completely damaged and wouldn’t even turn on. Caawiye fixed it for free, and now it works perfectly again. I truly appreciate the support.",
    name: "Mohamed Aden",
    role: "Laptop Repair Client",
  },
  {
    image: Testimonial1,
    quote:
      "My computer was very slow because of viruses. They cleaned and repaired everything for free. Amazing service with no cost at all.",
    name: "Faduma Hassan",
    role: "Software Repair Client",
  },
  {
    image: Testimonial1,
    quote:
      "Caawiye helped us fix several computers at no cost. Fast, professional, and completely free service. Highly recommended.",
    name: "Abdirahman Noor",
    role: "Community Member",
  },
];


const TestimonialPage = () => {
  // const [index, setIndex] = useState(0);
  // const darkMode = useSelector((state) => state.theme.darkMode);

  // const goNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  // const goPrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // return (
  //   <div className={`${darkMode ? "bg-[#0F0F0F] text-white" : "bg-white text-black"} w-full flex flex-col items-center py-12 px-4 transition-colors duration-500`}>
      
  //     {/* Logo & Title */}
  //     <img src={icon1} alt="logo" className="w-16 h-16 mb-6 mt-4" />
  //     <h2 className="font-bold text-lg text-primary-btn">USER TESTIMONIALS</h2>
  //     <h1 className="text-[32px] sm:text-[46px] font-bold text-center leading-tight mt-2 text-text-color">
  //       What Users Are Saying <br /> About Caawiye
  //     </h1>

  //     {/* Slider Wrapper */}
  //     <div className="relative w-full max-w-5xl flex items-center justify-center mt-10">

  //       {/* Side Previous */}
  //       <div className="absolute left-0 hidden md:flex items-center justify-center w-1/4 h-72 opacity-50 scale-90 blur-sm transition-all duration-500">
  //         <div className={`bg-white dark:bg-[#222222] rounded-2xl w-full h-full flex flex-col items-center justify-center p-4`}>
  //           <img src={icon3} alt="quote" className="w-6 h-6 mb-2" />
  //           <p className="text-sm text-center">{testimonials[(index - 1 + testimonials.length) % testimonials.length].quote}</p>
  //         </div>
  //       </div>

  //       {/* Center Card with motion */}
  //       <AnimatePresence mode="wait">
  //         <motion.div
  //           key={index} // <-- important for AnimatePresence
  //           initial={{ opacity: 0, x: 100 }}
  //           animate={{ opacity: 1, x: 0 }}
  //           exit={{ opacity: 0, x: -100 }}
  //           transition={{ duration: 0.5 }}
  //           className={`bg-white dark:bg-[#222222] rounded-2xl w-80 md:w-96 p-6 flex flex-col items-center shadow-lg`}
  //         >
  //           <img src={testimonials[index].image} alt="testimonial" className="w-32 h-32 rounded-full mb-4 border-2 border-primary-btn" />
  //           <img src={icon3} alt="quote icon" className="mb-4 w-6 h-6" />
  //           <p className="text-center font-semibold mb-4 transition-colors duration-300">{testimonials[index].quote}</p>
  //           <div className="flex items-center gap-2 text-sm text-gray-400">
  //             <span className="font-bold">{testimonials[index].name}</span>
  //             <img src={icon4} alt="icon" className="h-4 w-4" />
  //             <span>{testimonials[index].role}</span>
  //           </div>
  //         </motion.div>
  //       </AnimatePresence>

  //       {/* Side Next */}
  //       <div className="absolute right-0 hidden md:flex items-center justify-center w-1/4 h-72 opacity-50 scale-90 blur-sm transition-all duration-500">
  //         <div className={`bg-white dark:bg-[#222222] rounded-2xl w-full h-full flex flex-col items-center justify-center p-4`}>
  //           <img src={icon3} alt="quote" className="w-6 h-6 mb-2" />
  //           <p className="text-sm text-center">{testimonials[(index + 1) % testimonials.length].quote}</p>
  //         </div>
  //       </div>

  //     </div>

  //     {/* Navigation Buttons */}
  //     <div className="flex items-center justify-center gap-6 mt-8">
  //       <button 
  //         onClick={goPrev} 
  //         className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-300 transform hover:scale-110 cursor-pointer"
  //       >
  //         <FaChevronLeft className="w-5 h-5" />
  //       </button>
  //       <button 
  //         onClick={goNext} 
  //         className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-300 transform hover:scale-110 cursor-pointer"
  //       >
  //         <FaChevronRight className="w-5 h-5" />
  //       </button>
  //     </div>

  //   </div>
  // );
};

export default TestimonialPage;
