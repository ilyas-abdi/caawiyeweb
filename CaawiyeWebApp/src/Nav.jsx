// import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";
// import logo from "../public/images/nigth.png";      
// import logonigth from "../public/images/r33.png";  
// import { Moon, Sun } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../src/fetures/themeSlice";

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const dispatch = useDispatch();
//   const darkMode = useSelector((state) => state.theme.darkMode);

//   return (
//     <nav className="rounded w-full fixed z-50 transition-colors ">
//       <div
//         className={`${
//           darkMode ? "bg-[#222222] text-white" : "bg-white text-black"
//         } flex items-center h-20 justify-between shadow-md shadow-gray-400 md:px-6 px-4 mx-auto gap-6 transition-colors`}
//       >
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Link to="/">
//             <img
//               src={darkMode ? logo : logonigth}
//               alt="Logo"
//               className="w-40"
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center space-x-8">
//           {["/", "/appointment", "/about", "/blogs"].map((path, index) => {
//             const labels = ["Home", "Appointments", "About", "Blogs"];
//             return (
//               <NavLink
//                 key={index}
//                 to={path}
//                 className="relative group transition-colors"
//               >
//                 {labels[index]}
//                 <span className="absolute left-1/2 -bottom-1 w-0 group-hover:w-3/6 h-0.5 bg-white transition-all"></span>
//                 <span className="absolute right-1/2 -bottom-1 w-0 group-hover:w-3/6 h-0.5 bg-white transition-all"></span>
//               </NavLink>
//             );
//           })}
//         </div>

//         {/* Desktop Buttons */}
//         <div className="hidden lg:flex items-center gap-3">
//           <Link to="/appointment">
//             <button className="border text-white font-medium text-[14px] bg-[#3CB44A] px-[13px] py-[10px] rounded-full">
//               Book Now
//             </button>
//           </Link>

//           {/* Theme Toggle */}
//           <button
//             onClick={() => dispatch(toggleTheme())}
//             className="w-10 h-10 flex items-center justify-center rounded-full border transition-colors"
//           >
//             {darkMode ? <Sun /> : <Moon />}
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className={`hamburger ${isMenuOpen ? "open" : ""}`}
//           >
//             <span className="hamburger-top"></span>
//             <span className="hamburger-middle"></span>
//             <span className="hamburger-bottom"></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//   <div
//     className={`lg:hidden w-full max-w-md flex flex-col  items-start mt-4 space-y-3 font-bold shadow-lg rounded-lg transition-colors px-4 py-4 ${
//       darkMode ? "bg-[#222222] text-white" : "bg-white text-black"
//     }`}
//   >
//     {/* Links */}
//     <Link
//       to="/"
//       className={`w-full px-3 py-2 rounded text-left transition-colors ${
//         darkMode ? "hover:bg-[#333333]" : "hover:bg-white"
//       }`}
//     >
//       Home
//     </Link>

//     <Link
//       to="/appointment"
//       className={`w-full px-3 py-2 rounded text-left transition-colors ${
//         darkMode ? "hover:bg-[#333333]" : "hover:bg-white"
//       }`}
//     >
//       Appointments
//     </Link>

//     <Link
//       to="/about"
//       className={`w-full px-3 py-2 rounded text-left transition-colors ${
//         darkMode ? "hover:bg-[#333333]" : "hover:bg-white"
//       }`}
//     >
//       About
//     </Link>

//     <Link
//       to="/blogs"
//       className={`w-full px-3 py-2 rounded text-left transition-colors ${
//         darkMode ? "hover:bg-[#333333]" : "hover:bg-white"
//       }`}
//     >
//       Blog
//     </Link>

//     {/* Book Now button */}
//     <NavLink to="/appointment">
//       <button className="border text-white font-medium text-sm px-3 py-1 rounded-full bg-[#3CB44A] w-full">
//         Book Now
//       </button>
//     </NavLink>

//     {/* Theme Toggle */}
//     <button
//       onClick={() => dispatch(toggleTheme())}
//       className="w-10 h-10 flex items-center justify-center rounded-full border transition-colors"
//     >
//       {darkMode ? <Sun /> : <Moon />}
//     </button>
//   </div>
// )}

      
//     </nav>
//   );
// };

// export default Nav;


import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../public/images/jutsa.png";       
import logonigth from "../public/images/r33.png";  
import { Moon, Sun, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../src/fetures/themeSlice";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  // Saamaynta marka boga la rido (Scroll detection)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "py-2" : "py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`relative flex items-center h-20 justify-between px-6 rounded-2xl transition-all duration-500 shadow-xl ${
          darkMode 
            ? `bg-[#1a1a1a]/80 border border-white/5 backdrop-blur-md ${scrolled ? "shadow-green-500/5" : ""}` 
            : `bg-white/80 border border-gray-100 backdrop-blur-md ${scrolled ? "shadow-gray-200" : ""}`
        }`}>
          
          {/* Logo Section */}
          <div className="flex items-center ">
            <Link to="/" className="transition-transform hover:scale-105 duration-300">
              <img
                src={darkMode ? logo : logonigth}
                alt="Logo"
                className="w-36 md:w-30 h-auto"
              />
            </Link>
          </div>

          {/* Desktop Links (Modern Hover Effect) */}
          <div className="hidden lg:flex items-center gap-10">
            {["Home", "Appointments", "About", "Blogs"].map((label, index) => {
              const paths = ["/", "/appointment", "/about", "/blogs"];
              return (
                <NavLink
                  key={index}
                  to={paths[index]}
                  className={({ isActive }) => `relative text-[15px] font-bold tracking-wide transition-all duration-300 ${
                    isActive 
                      ? "text-[#3CB44A]" 
                      : darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
                  } group`}
                >
                  {label}
                  <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-[#3CB44A] transition-all duration-300 ${
                    "w-0 group-hover:w-full"
                  }`}></span>
                </NavLink>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-300 ${
                darkMode 
                  ? "bg-white/5 border-white/10 text-yellow-400 hover:bg-white/10" 
                  : "bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link to="/appointment">
              <button className="relative group overflow-hidden bg-[#3CB44A] text-white font-bold text-[14px] px-7 py-3 rounded-xl shadow-lg shadow-green-500/30 transition-all hover:shadow-green-500/50 active:scale-95">
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Mobile Toggle Bar */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`p-2 rounded-lg ${darkMode ? "text-yellow-400" : "text-gray-600"}`}
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-1.5"
            >
              <div className={`w-6 h-0.5 rounded-full bg-[#3CB44A] transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div className={`w-6 h-0.5 rounded-full bg-[#3CB44A] transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div className={`w-6 h-0.5 rounded-full bg-[#3CB44A] transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Attractive Slide-down) */}
        <div className={`lg:hidden absolute left-4 right-4 mt-2 transition-all duration-500 origin-top transform ${
          isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}>
          <div className={`rounded-2xl p-6 shadow-2xl border ${
            darkMode ? "bg-[#1a1a1a] border-white/5" : "bg-white border-gray-100"
          }`}>
            <div className="flex flex-col gap-4">
              {["Home", "Appointments", "About", "Blogs"].map((label, index) => {
                const paths = ["/", "/appointment", "/about", "/blogs"];
                return (
                  <Link
                    key={index}
                    to={paths[index]}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl font-bold transition-all ${
                      darkMode ? "hover:bg-white/5" : "hover:bg-gray-50"
                    }`}
                  >
                    {label}
                    <ChevronRight size={18} className="text-[#3CB44A]" />
                  </Link>
                );
              })}
              <hr className={darkMode ? "border-white/5" : "border-gray-100"} />
              <Link to="/appointment" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-[#3CB44A] text-white py-4 rounded-xl font-bold shadow-lg">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;