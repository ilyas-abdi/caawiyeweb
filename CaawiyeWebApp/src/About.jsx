// import React from 'react';
// import Nav from './Nav';
// import image1 from "../public/images/img1.jpg"
// import image2 from "../public/images/image.png"
// import Footer from './Footer';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const About = () => {
  
//   const darkMode = useSelector((state) => state.theme.darkMode);
//   return (
//     <div>
//       <div > <Nav />/</div>
       
//         <div
//   className="h-[58vh] rounded-3xl mt-20 shadow-xl p-8 md:p-12 transition-colors "
//  style={{
//     background: "var(--section-bg)",
//     boxShadow: `0px 4px 24px var(--section-shadow)`
//   }}
// >
//   {/* Hero Section */}
//   <section className={` ${darkMode ? "":"bg-gradient-to-b from-[var(--hero-bg)] from-10% to-[var(--hero-bg2)] to-100%  rounded-3xl"} container mx-auto px-4 py-16 md:py-24 `} >
//     <div>
//       <div className="max-w-4xl mx-auto text-center">
//         <h1
//           className="text-3xl md:text-5xl font-bold mb-9"
//           style={{ color: "var(--text-color)" }}
//         >
//           Learn more about our team
//           <div className="flex items-center justify-center gap-2 mt-2">
//             <span style={{ color: "var(--text-color)" }}>with</span>
//             <span className="bg-gradient-to-br from-[#788BFF] to-[#46B453] px-4 py-2 text-white rounded-[20px]">
//               Caawiye
//             </span>
//           </div>
//         </h1>

//         <p
//           className="text-sm md:text-base max-w-2xl mx-auto"
//           style={{ color: "var(--text-secondary)" }}
//         >
//           Schedule booking now to help you easy and save time with us,
//           as Caawiye team we are particular university of systems and technology members
//         </p>
//       </div>
//     </div>
//   </section>
// </div>


                 

//       {/* About Team Section */}
//       <section className="container mx-auto px-4 py-16  space-x-10">
//         <div className="flex flex-col items-center mb-16">
//           <div className="w-16 h-16 bg-gradient-to-br from-[#4d4df9] to-[#E4D5FE] rounded-full flex items-center justify-center mb-4">
//             <svg className="w-8 h-8 text-[#293372]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//             </svg>
//           </div>
//           <h2 className="text-center">
//             <span className="text-xs uppercase tracking-wider font-bold text-[#3CB44A]" style={{ color: 'var(--text-color)' }}>ABOUT CAAWIYE TEAM</span>
//             <div className="text-2xl md:text-3xl font-bold text-[#293372] mt-2" style={{ color: 'var(--text-color)' }}>
//               Learn our story and target
//               <div className="text-[#6C6F7D]" style={{ color: 'var(--text-color)' }}>with caawiye</div>
//             </div>
//           </h2>
//         </div>

//         {/* Existing code remains the same until the grid section */}
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12">
//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold text-[#293372]" style={{ color: 'var(--text-color)' }}>Our story</h3>
//             <p className="text-[#6C6F7D] leading-relaxed" style={{ color: 'var(--text-color)' }}>
//               Schedule booking now to help you easy and save time with as, <br /> as caawiye team we are jamhuriya university of science and technology members that students help their computer problems <br /> and if they need premium software we will install and solve any problems they have. <br /> Schedule booking now to help you easy and save time with as, as caawiye team we are jamhuriya university of science and technology <br />
//                members that students help their computer problems and if they need premium software we will install and solve any problems they have. <br />
// Schedule booking now to help you easy and save time with as, as caawiye team we are jamhuriya university.
//             </p>
//           </div>
//           <div className="relative -z-10">
//             <img 
//               src="../images/about.jpg"
//               alt="Team collaboration" 
//               className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
//             />
//           </div>
//         </div>

//         {/* Our Target Section */}
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-48">
//           <div className="relative order-2 md:order-1 -z-10">
//             <img 
//               src="../images/about1.jpg"
//               alt="Team planning" 
//               className="w-full h-[400px] object-cover rounded-2xl shadow-lg mr-10"
//             />
//           </div>
//           <div className="space-y-6 order-1 md:order-2">
//             <h3 className="text-2xl font-bold text-[#293372]" style={{ color: 'var(--text-color)' }}>Our target</h3>
//             <p className="text-[#6C6F7D] leading-relaxed" style={{ color: 'var(--text-color)' }}>
//               Schedule booking now to help you easy and save time with us, as caawiye team we are particular university of technology members that students help their computer problems and if they need premium software we will install and solve any problems they have.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Team Features Section */}
//       <section className="container mx-auto px-4 py-16">
//         <div className="flex flex-col items-center mb-16">
//           <div className="w-16 h-16 bg-[#DED3F9] rounded-full flex items-center justify-center mb-4">
//             <svg className="w-8 h-8 text-[#293372]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//           </div>
//           <span className="text-xs uppercase tracking-wider text-[#3CB44A] mb-2" style={{ color: 'var(--text-color)' }}>TEAM TAB FEATURES</span>
//           <h2 className="text-2xl md:text-3xl font-bold text-[#293372] text-center" style={{ color: 'var(--text-color)' }}>
//             Effortless Collaboration
//             <br />
//             Supercharge Workdays
//           </h2>
//         </div>

//         {/* Feature Cards */}
// <div className="grid gap-6 mb-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
//   {/* Card 1 */}
//   <div className={`border-2 p-6 rounded-xl shadow-md w-full max-w-xs ${darkMode ? 'bg-black text-white' : 'bg-white text-[#6C6F7D]'}`}>
//     <div className="flex items-center gap-3 mb-2">
//       <div className="w-10 h-10 bg-[#DED3F9] rounded-lg flex items-center justify-center">
//         <svg className="w-6 h-6 text-[#293372]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
//         </svg>
//       </div>
//       <h3 className="font-semibold text-[#293372]">Assign Tasks</h3>
//     </div>
//     <p className="text-sm">Single task and group tasks</p>
//   </div>

//   {/* Card 2 */}
//   <div className={`border-2 p-6 rounded-xl shadow-md w-full max-w-xs ${darkMode ? 'bg-black text-white' : 'bg-white text-[#6C6F7D]'}`}>
//     <div className="flex items-center gap-3 mb-2">
//       <div className="w-10 h-10 bg-[#DED3F9] rounded-lg flex items-center justify-center">
//         <svg className="w-6 h-6 text-[#293372]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       </div>
//       <h3 className="font-semibold text-[#293372]">Team Collaboration</h3>
//     </div>
//     <p className="text-sm">Teamwork in challenging dreams</p>
//   </div>

//   {/* Card 3 */}
//   <div className={`border-2 p-6 rounded-xl shadow-md w-full max-w-xs ${darkMode ? 'bg-black text-white' : 'bg-white text-[#6C6F7D]'}`}>
//     <div className="flex items-center gap-3 mb-2">
//       <div className="w-10 h-10 bg-[#DED3F9] rounded-lg flex items-center justify-center">
//         <svg className="w-6 h-6 text-[#293372]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//         </svg>
//       </div>
//       <h3 className="font-semibold text-[#293372]">Team Progress</h3>
//     </div>
//     <p className="text-sm">Report target team progress</p>
//   </div>
// </div>



//         {/* Progress Section */}
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <div className="space-y-6 ml-20">
//             <h3 className="text-2xl font-bold text-[#293372]" style={{ color: 'var(--text-color)' }}>
//               Accelerating Together
//               <br />
//               Unveiling Our Team's Progress
//             </h3>
//             <p className="text-[#6C6F7D]" style={{ color: 'var(--text-color)' }}>
//              Our team has been working tirelessly toward shared goals, <br /> and
// we’re excited to unveil the progress we’ve made. In this update, <br />
// we’ll dive into key milestones achieved, exciting challenges <br />
// overcome, and the innovative solutions we’ve developed along <br />
// the way. Join us as we celebrate our collective achievements <br />tr
// and explore what’s next on our exciting journey.
//             </p>
       
//        <NavLink to={"/appointment"}>   <button className="bg-[#3CB44A] text-white px-6 py-3 rounded-full mt-5" >
//               View booking now
//             </button></NavLink>  
//           </div>
//           <div className="relative -z-10">
//             <img 
//               src="../images/hero3.jpg"
//               alt="Team progress" 
//               className="w-[600px] h-[400px] object-cover rounded-2xl shadow-lg "
//             />
//           </div>
//         </div>
//       </section>
//               {/* Journey Statistics Section */}
//         <section className="container mx-auto px-4 py-16">
//           <div className="flex flex-col items-center mb-16">
//             <div className="w-16 h-16 bg-gradient-to-br from-[#4d4df9] to-[#E4D5FE] rounded-full flex items-center justify-center mb-4">
//               <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//             </div>
//             <span className="text-xs uppercase tracking-wider font-bold text-[#3CB44A] mb-2" style={{ color: 'var(--text-color' }}>CAAWIYE IMPACT</span>
//             <h2 className="text-2xl md:text-3xl font-bold text-[#293372] text-center" style={{ color: 'var(--text-color)' }}>
//               Our repair journey at
//               <br />
//               a glance
//             </h2>
//           </div>

//          <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 transition-colors">

//   {/* Card 1 */}
//   <div
//     className="w-full md:w-[30vh] h-auto md:h-[45vh] p-6 rounded-xl border md:ml-52 transition-colors"
    
//   >
//     <h3 className="text-4xl font-bold mb-5 transition-colors"
//       style={{ color: 'var(--text-color)' }}>
//       500+
//     </h3>
//     <p className="text-sm text-[#3CB44A]">
//       Computers repaired
//     </p>
//   </div>

//   {/* Right Section */}
//   <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 gap-4 place-items-center p-6 md:mr-20 transition-colors">

//     {/* Image */}
//     <div className="relative w-full md:w-auto -z-10">
//       <img src="../images/about1.jpg" alt="Team working"
//         className="w-full md:w-[300px] h-auto md:h-full object-cover rounded-xl" />
//     </div>

//     {/* Card 2 */}
//     <div
//       className="w-full md:w-auto p-6 rounded-xl border transition-colors"
      
//     >
//       <h3 className="text-4xl font-bold mb-2 transition-colors"
//         style={{ color: 'var(--text-color)' }}>
//         4+
//       </h3>
//       <p className="text-sm text-[#3CB44A]">Awards received</p>
//     </div>

//     {/* Card 3 */}
//     <div
//       className="w-full md:w-auto p-6 rounded-xl border transition-colors"
      
//     >
//       <h3 className="text-4xl font-bold transition-colors"
//         style={{ color: 'var(--text-color)' }}>
//         9+
//       </h3>
//       <p className="text-sm text-[#3CB44A]">Team members</p>
//     </div>

//     {/* Image */}
//     <div className="relative w-full md:w-auto -z-10">
//       <img src="../images/about.jpg" alt="Team working"
//         className="w-full md:w-[300px] h-auto md:h-full object-cover rounded-xl" />
//     </div>

//   </div>
// </div>

//         </section>

        

//         {/* Footer */}
//        <Footer></Footer>
//     </div>
    
  

    
    
//   );
// };

// export default About;


import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiUsers, FiTarget, FiActivity, FiArrowUpRight, FiAward, FiCheckCircle } from 'react-icons/fi';

const About = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`transition-all duration-500 ${darkMode ? "bg-[#0a0a0a]" : "bg-[#fcfdfd]"}`}>
      <Nav />
      
      {/* --- Hero Section (Sized Down) --- */}
      <section className="pt-28 pb-12 px-6">
        <div className={`max-w-6xl mx-auto rounded-[2rem] overflow-hidden relative ${
          darkMode ? "bg-[#161616] border border-white/5" : "bg-white shadow-xl shadow-gray-200/40"
        }`}>
          <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 py-14 px-6 text-center">
            <h1 className={`text-3xl md:text-5xl font-black mb-5 leading-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
              Learn more about <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
                Team Caawiye
              </span>
            </h1>
            <p className={`max-w-xl mx-auto text-base mb-8 opacity-80 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Dedicated members of the University of Systems and Technology, making tech support effortless for every student.
            </p>
            <NavLink to="/appointment">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/20 flex items-center gap-2 mx-auto text-sm">
                Get Started <FiArrowUpRight />
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* --- Our Story & Target (Compact Layout) --- */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 mb-4">
              <FiUsers className="text-green-500" size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Our History</span>
            </div>
            <h2 className={`text-2xl font-black mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Our Story</h2>
            <p className={`text-sm leading-relaxed mb-6 opacity-80 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Started at Jamhuriya University, we noticed students struggling with IT issues. We stepped in to provide expert support, from hardware repairs to premium software installations.
            </p>
            <div className="flex gap-4 text-[12px] font-bold text-green-600">
               <span className="flex items-center gap-1"><FiCheckCircle size={14}/> Repairs</span>
               <span className="flex items-center gap-1"><FiCheckCircle size={14}/> Installs</span>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <img src="../images/about.jpg" alt="Story" className="rounded-2xl shadow-lg h-44 w-full object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-green-500 p-4 rounded-[2rem] hidden md:block">
               <h4 className="text-white text-xl font-black">100%</h4>
               <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Student Support</p>
            </div>
          </div>

        </div>

        {/* Target */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img src="../images/about1.jpg" alt="Target" className="rounded-2xl shadow-lg h-64 w-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FiTarget className="text-blue-500" size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">Our Mission</span>
            </div>
            <h2 className={`text-2xl font-black mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Our Target</h2>
            <p className={`text-sm leading-relaxed opacity-80 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Our mission is simple: Save student time. We aim to be the go-to tech hub, ensuring technical barriers never hinder academic success.
            </p>
          </div>
        </div>
      </section>

      {/* --- Stats Section (Small & Clean) --- */}
      <section className={`py-16 ${darkMode ? "bg-white/5" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-8 rounded-2xl text-center border ${darkMode ? "bg-black border-white/5" : "bg-white border-gray-100 shadow-sm"}`}>
              <FiActivity className="mx-auto mb-4 text-green-500" size={28} />
              <h3 className={`text-3xl font-black mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>500+</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Repairs Done</p>
            </div>
            <div className={`p-8 rounded-2xl text-center border ${darkMode ? "bg-black border-white/5" : "bg-white border-gray-100 shadow-sm"}`}>
              <FiAward className="mx-auto mb-4 text-blue-500" size={28} />
              <h3 className={`text-3xl font-black mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>4+</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Awards</p>
            </div>
            <div className={`p-8 rounded-2xl text-center border ${darkMode ? "bg-black border-white/5" : "bg-white border-gray-100 shadow-sm"}`}>
              <FiUsers className="mx-auto mb-4 text-orange-500" size={28} />
              <h3 className={`text-3xl font-black mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>9+</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Members</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;