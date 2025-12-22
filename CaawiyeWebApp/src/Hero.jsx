// import unplash from "./assets/Ellipse 12.png";
// import whiteBorder from "./assets/whiteborder.png";
// import Cup from "./assets/Cup.png";
// import Chart from "./assets/Chart.png";
// import cl from "./assets/cl.png";
// import p from "./assets/p.png";
// import { CiCalendarDate } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Hero = () => {

//   const darkMode = useSelector((state) => state.theme.darkMode);

//   return (
//     <div
//       id="home"
//       className="w-full py-10 px-4 md:px-10 rounded-[30px]"
//       style={{
//         background: darkMode
//           ? "#0f0f0f "
//           : "linear-gradient(to bottom, var(--hero-bg) 10%, var(--hero-bg2) 100%)",
//         color: "var(--text-color)",
//       }}
//     >
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">

//         {/* Text Section */}
//         <div className="flex-1 pt-12">
//           <h1 className="text-[28px] md:text-[38px] font-semibold font-sans leading-tight">
//             Lets Tell Your Problems With <br />
//             <span className="text-[green]">Caawiye Team</span> So They Will <br />
//             Solve The Problem
//           </h1>

//           <p
//             className="text-[14px] md:text-[16px] pt-4 leading-relaxed"
//             style={{ color: "var(--text-secondary)" }}
//           >
//             Schedule booking now to help you easy and save time with us. As <br />
//             Caawiye team, we are Jamhuriya University of Science and <br />
//             Technology students helping with computer problems. We also <br />
//             install premium software and fix any technical issues you have.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-wrap gap-4 mt-6">
//             <button
//               className="font-bold text-[15px] px-6 py-3 rounded-[10px]"
//               style={{
//                 background: "var(--primary-btn-bg)",
//                 color: "var(--primary-btn-text)",
//               }}
//             >
//               See How it Works
//             </button>

//             <Link
//               to="/contacts"
//               className="font-bold text-[15px] px-6 py-3 border-2 rounded-[10px]"
//               style={{
//                 borderColor: "var(--secondary-btn-border)",
//                 color: "var(--secondary-btn-text)",
//               }}
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* Avatars */}
//           <div className="flex items-center mt-8 flex-wrap">
//             {[unplash, unplash, unplash, unplash].map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt="user"
//                 className={`w-10 h-10 rounded-full border-2 ${idx > 0 ? "-ml-4" : ""}`}
//                 style={{ borderColor: "var(--avatar-border)" }}
//               />
//             ))}
//             <p className="text-[14px] ml-4">
//               <span className="font-bold">8,000+ </span>Happy Students. <br />
//               Zero Scheduling Stress
//             </p>
//           </div>
//         </div>

//         {/* Image Cards Section */}
//         <div className="flex-1 grid grid-cols-2 gap-6 ">

//           {/* 1 */}
//      <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border-4 border-white">
//   <img
//     src="../images/hero1.jpg"
//     alt="white border"
//     className="w-full h-full object-cover object-center"
//   />
// </div>
//   {/* 2 */}
//           <div
//             className={`rounded-[20px] p-4 ${darkMode ? "bg-[#222222] text-white " : "bg-none text-black" }`}
            
//           >
//             <h2 className={` ${darkMode ? "text-white " : " text-black" } text-[18px] font-semibold }`}>Leaderboard</h2>
//             <p className="text-[16px] mt-2" >
//               Caawiye most workers team.
//             </p>
//             <img src={Chart} alt="chart" className="w-full mt-4" />
//           </div>

//           {/* 3 */}
//           <div
//             className={`  ${darkMode ? "bg-[#222222] text-white " : "bg-none text-black" } rounded-[20px] p-4`}
            
//           >
//             <div className="flex items-center gap-2">
//               <CiCalendarDate className="text-3xl" />
//               <h2 className="text-[18px] font-semibold">Time Opening</h2>
//             </div>
//             <p className="text-[16px] mt-2" >
//               Caawiye time opening monthly.
//             </p>
//             <p className="text-[12px] mt-2" >
//               April 2026
//             </p>
//             <img src={cl} alt="calendar" className="w-full mt-4" />
//           </div>

//           {/* 4 */}
//           <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border-4 border-white">
//   <img
//     src="../images/hero2.jpg"
//     alt="white border"
//     className="w-full h-full object-top-right
//  object-cover "
//   />
// </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import unplash from "./assets/Ellipse 12.png";
import Chart from "./assets/Chart.png";
import cl from "./assets/cl.png";
import { CiCalendarDate } from "react-icons/ci";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      id="home"
      className={`w-full py-16 px-6 md:px-12 transition-all duration-500 ${
        darkMode ? "bg-[#0a0a0a]" : "bg-[#f4f7f4]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* --- Left Content: Text Section --- */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">Expert Technical Support</span>
          </div>

          <h1 className={`text-4xl md:text-5xl font-black leading-[1.1] ${darkMode ? "text-white" : "text-gray-900"}`}>
            Tell Your Problems to <br />
            <span className="text-green-500">Caawiye Team</span> <br />
            We Solve Everything.
          </h1>

          <p className={`text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            We are Jamhuriya University students dedicated to solving your technical hurdles. 
            From computer repairs to premium software installations, we save you time and stress.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-green-500/30 transition-all hover:scale-105 active:scale-95">
              <FiPlay className="fill-current" />
              How it Works
            </button>
            <Link
              to="/contacts"
              className={`flex items-center gap-2 border-2 font-bold px-8 py-4 rounded-2xl transition-all hover:bg-gray-500/5 ${
                darkMode ? "border-white/10 text-white" : "border-gray-200 text-gray-900"
              }`}
            >
              Contact Us
              <FiArrowRight />
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
            <div className="flex -space-x-4">
              {[unplash, unplash, unplash, unplash].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Student"
                  className="w-12 h-12 rounded-full border-4 border-[#0a0a0a] object-cover ring-2 ring-green-500/20"
                />
              ))}
            </div>
            <div className="text-left">
              <p className={`text-sm font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>8,000+ Students</p>
              <p className="text-xs text-gray-500 italic">Zero Scheduling Stress</p>
            </div>
          </div>
        </div>

        {/* --- Right Content: Modern Bento Grid Images --- */}
        <div className="flex-1 w-full max-w-2xl grid grid-cols-12 grid-rows-12 gap-4 h-[500px] md:h-[600px]">
          
          {/* Main Large Image */}
          <div className="col-span-7 row-span-8 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            <img src="../images/hero1.jpg" alt="Support 1" className="w-full h-full object-cover" />
          </div>

          {/* Leaderboard Card */}
          <div className={`col-span-5 row-span-5 rounded-[2rem] p-6 shadow-xl flex flex-col justify-between transition-all hover:rotate-2 ${
            darkMode ? "bg-white/5 border border-white/10 backdrop-blur-md" : "bg-white border border-gray-100"
          }`}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-green-500">Leaderboard</h3>
            <img src={Chart} alt="Analytics" className="w-full opacity-80" />
            <p className="text-[10px] opacity-60">Caawiye Top Performance</p>
          </div>

          {/* Opening Time Card */}
          <div className={`col-span-5 row-span-7 rounded-[2rem] p-6 shadow-xl flex flex-col gap-4 ${
            darkMode ? "bg-green-500/10 border border-green-500/20" : "bg-green-50 border border-green-100"
          }`}>
            <div className="p-3 bg-green-500 rounded-xl w-fit text-white shadow-lg">
              <CiCalendarDate size={24} />
            </div>
            <div>
              <h3 className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Opening Hours</h3>
              <p className="text-xs opacity-70">April 2026 Session</p>
            </div>
            <img src={cl} alt="Schedule" className="w-full rounded-lg" />
          </div>

          {/* Bottom Small Image */}
          <div className="col-span-7 row-span-4 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl transition-transform hover:-scale-x-105 duration-500">
            <img src="../images/hero2.jpg" alt="Support 2" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;