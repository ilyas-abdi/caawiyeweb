// import Icon7 from "./assets/Icon7.png";
// import Icon8 from "./assets/Icon8.png";
// import Icon9 from "./assets/Icon9.png";
// import Icon10 from "./assets/Icon10.png";
// import Tick from "./assets/Tick.png";
// import Picture from "./assets/Picture.png";
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";

// const features = [
//   { icon: Icon8, title: "Assign Tasks", desc: "Single task and group tasks" },
//   { icon: Icon9, title: "Team Collaboration", desc: "Teamwork turbocharging dreams" },
//   { icon: Icon10, title: "Team Progress", desc: "Supercharge team progress" },
// ];


// const progressPoints = [
//   "Our team has been working tirelessly toward shared goals, and we’re excited to unveil the progress we’ve made.",
//   "We’ve overcome key challenges and developed innovative solutions along the way.",
// ];

// const FeaturesPage = () => {
//   const darkMode = useSelector((state) => state.theme.darkMode);
//   return (
//     <div
//       className="w-full py-16 px-6 md:px-10 flex flex-col items-center justify-center mt-32"
//       style={{ background: "var(--bg-color)", color: "var(--text-color)" }}
//     >
//       {/* Intro */}
//       <div
//         className={`  ${darkMode ? "bg-[#222222] text-white " : "bg-none text-black" } text-center flex flex-col items-center py-12 px-6 rounded-xl w-full`}
       
//       >
//         <img src={Icon7} alt="logo" className="w-16 h-16" />
//         <h2
//           className="text-lg font-bold mt-4"
//           style={{ color: "var(--primary-btn-bg)" }}
//         >
//           TEAM TAB FEATURES
//         </h2>
//         <h1
//           className="text-3xl md:text-[46px] font-bold leading-tight mt-2"
//           style={{ color: "var(--text-color)" }}
//         >
//           Effortless Collaboration <br /> <span>Supercharge Workdays</span>
//         </h1>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 w-full max-w-6xl">
//         {features.map((item, idx) => (
//           <div
//             key={idx}
//             className={`  ${darkMode ? "bg-[#33334480]    text-white border-none " : "bg-none text-black" } flex flex-col border shadow-md px-6 py-4 rounded-2xl`}
            
//           >
//             <div className="flex gap-4 items-start">
//               <div
//                 className="w-12 h-12 rounded-full flex justify-center items-center"
//                 style={{ background: "var( --card-bg)" }}
//               >
//                 <img src={item.icon} alt="icon" className="w-6 h-6" />
//               </div>
//               <div>
//                 <h3
//                   className="font-bold text-lg"
                 
//                 >
//                   {item.title}
//                 </h3>
//                 <p >{item.desc}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Section Below Cards */}
//       <div className="flex flex-col md:flex-row justify-between items-start mt-20 w-full max-w-6xl gap-10">
//         {/* Left Text */}
//         <div className="flex-1 mt-10">
//           <h2
//             className="font-bold text-2xl md:text-3xl mb-4"
//             style={{ color: "var(--text-color)" }}
//           >
//             Accelerating Together <br /> Unveiling Our Team’s Progress
//           </h2>
//           <p
//             className="leading-relaxed mb-6"
//             style={{ color: "var(--text-secondary)" }}
//           >
//             Our team has been working tirelessly toward shared goals. In this update, we’ll dive into milestones
//             achieved, challenges overcome, and solutions built. Join us as we celebrate and plan forward.
//           </p>

//           {progressPoints.map((point, index) => (
//             <div key={index} className="flex gap-3 items-start mt-10">
//               <img src={Tick} alt="tick" className="w-6 h-6 pt-1" />
//               <p style={{ color: "var(--text-secondary)" }}>{point}</p>
//             </div>
//           ))}

//         <NavLink to={"/appointment"}>  <button
//             className="mt-8 px-6 py-3 rounded-full font-semibold text-sm"
//             style={{
//               background: "var(--primary-btn-bg)",
//               color: "var(--primary-btn-text)",
//             }}
//           >
//             Make booking now
//           </button></NavLink>
//         </div>

//         {/* Right Image */}
//        <div className="flex-1 flex justify-center items-center  rounded overflow-hidden">
//   <img
//     src="../images/hero3.jpg"
//     alt="team progress"
//     className="w-full max-w-md h-auto rounded border-4 border-white object-cover"
//   />
// </div>

//       </div>
//     </div>
//   );
// };

// export default FeaturesPage;


import Icon7 from "./assets/Icon7.png";
import Icon8 from "./assets/Icon8.png";
import Icon9 from "./assets/Icon9.png";
import Icon10 from "./assets/Icon10.png";
import Tick from "./assets/Tick.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiArrowRight } from "react-icons/fi";

const features = [
  { icon: Icon8, title: "Assign Tasks", desc: "Seamlessly manage single and group tasks with precision." },
  { icon: Icon9, title: "Team Collaboration", desc: "Turbocharge your dreams through unified teamwork." },
  { icon: Icon10, title: "Team Progress", desc: "Supercharge and track your team's daily milestones." },
];

const progressPoints = [
  "Working tirelessly toward shared goals with measurable impact.",
  "Overcoming key challenges with innovative, technical solutions.",
];

const FeaturesPage = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`w-full py-24 px-6 md:px-12 transition-all duration-500 ${
      darkMode ? "bg-[#0a0a0a] text-white" : "bg-[#f9fafb] text-gray-900"
    }`}>
      
      {/* 1. Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-3xl bg-green-500/10 border border-green-500/20">
            <img src={Icon7} alt="logo" className="w-12 h-12 animate-pulse" />
          </div>
        </div>
        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-green-500 mb-4">
          Team Tab Features
        </h2>
        <h1 className="text-4xl md:text-4xl font-black leading-tight mb-6">
          Effortless Collaboration <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Supercharge Workdays
          </span>
        </h1>
        <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
          Experience the next level of productivity with tools designed for high-performing teams.
        </p>
      </div>

      {/* 2. Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className={`group relative p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 ${
              darkMode 
                ? "bg-white/5 border border-white/10 hover:bg-white/10" 
                : "bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl"
            }`}
          >
            <div className={`w-16 h-16 rounded-2xl flex justify-center items-center mb-6 transition-transform group-hover:scale-110 duration-500 ${
              darkMode ? "bg-green-500/20" : "bg-green-50"
            }`}>
              <img src={item.icon} alt="icon" className="w-8 h-8" />
            </div>
            <h3 className="font-black text-xl mb-3">{item.title}</h3>
            <p className={`leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              {item.desc}
            </p>
            {/* Decorative element */}
            <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* <FiArrowRight className="text-green-500 text-2xl" /> */}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Progress Section */}
      <div className="flex flex-col lg:flex-row items-center mt-32 w-full max-w-7xl mx-auto gap-16">
        
        {/* Left: Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              Accelerating Together <br /> 
              <span className="text-green-500 ">Unveiling Progress</span>
            </h2>
            <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              Our team has been working tirelessly toward shared goals. We celebrate 
              milestones achieved and challenges overcome with technical excellence.
            </p>
          </div>

          <div className="space-y-6">
            {progressPoints.map((point, index) => (
              <div key={index} className={`flex gap-4 p-5 rounded-2xl transition-colors ${
                darkMode ? "bg-white/5" : "bg-white shadow-sm"
              }`}>
                <div className="bg-green-500 rounded-full p-1 h-fit mt-1">
                   <img src={Tick} alt="tick" className="w-4 h-4 brightness-200" />
                </div>
                <p className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start">
            <NavLink to="/appointment">
              <button className="group relative flex items-center gap-3 bg-green-500 text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest uppercase overflow-hidden shadow-lg shadow-green-500/30 transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10">Make Booking Now</span>
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <FiArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </button>
            </NavLink>
          </div>
        </div>

        {/* Right: Modern Image Frame */}
        <div className="flex-1 relative group">
          <div className="absolute -inset-4 bg-green-500/20 rounded-[3rem] blur-2xl group-hover:bg-green-500/30 transition-all"></div>
          <div className={`relative rounded-[2.5rem] overflow-hidden border-8 ${
            darkMode ? "border-white/5" : "border-white shadow-2xl"
          }`}>
            <img
              src="../images/hero3.jpg"
              alt="team progress"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
              <div className="flex justify-between items-center text-white">
                <div>
                  <p className="text-xs font-bold uppercase opacity-70">Team Efficiency</p>
                  <p className="text-2xl font-black">98.4%</p>
                </div>
                <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">↑</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturesPage;