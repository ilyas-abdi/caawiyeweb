// import { Link } from "react-router-dom";
// import X from "../src/assets/Vector.png";
// import F from "../src/assets/Vector2.png";
// import I from "../src/assets/Vector3.png";
// import logoday from "../public/images/day.png";
// import logonigth from "../public/images/nigth.png";
// import { useSelector } from "react-redux";

// const Footer = () => {
//   const darkMode = useSelector((state) => state.theme.darkMode);

//   return (
//     <footer
//       className="py-12 sm:px-6 md:px-24 transition-colors duration-300"
//       style={{
//         backgroundColor: darkMode ? "#111111" : "#f7f7f7",
//       }}
//     >
//       {/* Top section */}
//       <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img
//             src={darkMode ? logonigth : logoday}
//             alt="Logo"
//             className="w-32 sm:w-40"
//           />
//         </div>

//         {/* Navigation links */}
//         <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium">
//           {[
//             { label: "Home", path: "/" },
//             { label: "Appointments", path: "/appointment" },
//             { label: "About", path: "/about" },
//             { label: "Blogs", path: "/blogs" },
//           ].map(({ label, path }, index) => (
//             <Link
//               key={index}
//               to={path}
//               className="hover:text-custom_button transition"
//               style={{ color: darkMode ? "#ccc" : "#333" }}
//             >
//               {label}
//             </Link>
//           ))}
//         </div>

//         {/* Social icons */}
//         <div className="flex justify-center md:justify-start gap-4 mt-4 md:mt-0">
//           {[X, F, I].map((icon, idx) => (
//             <div
//               key={idx}
//               className="p-2 rounded-full transition-colors duration-300"
//               style={{
//                 backgroundColor: darkMode ? "#222" : "#000",
//               }}
//             >
//               <img src={icon} alt={`Social icon ${idx}`} className="w-5 h-5" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Divider */}
//       <div
//         className="h-[2px] w-full rounded-full my-4 transition-colors duration-300"
//         style={{
//           backgroundColor: darkMode ? "#333" : "#ccc",
//         }}
//       />

//       <p
//         className="text-center mt-8 mb-8 transition-colors duration-300 text-sm sm:text-base"
//         style={{ color: darkMode ? "#999" : "#6C6F7D" }}
//       >
//         © 2024 Caawiye. All Rights Reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import X from "../src/assets/Vector.png";
import F from "../src/assets/Vector2.png";
import I from "../src/assets/Vector3.png";
import logoday from "../public/images/r33.png";
import logonigth from "../public/images/jutsa.png";
import { useSelector } from "react-redux";

const Footer = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <footer
      className={`relative pt-20 pb-10 px-6 md:px-24 transition-all duration-500 ${
        darkMode ? "bg-[#0a0a0a] text-gray-400" : "bg-[#f8f9fa] text-gray-600"
      }`}
    >
      {/* 1. Decorative Border */}
      <div className={`absolute top-0 left-0 w-full h-[1px] ${
        darkMode 
          ? "bg-gradient-to-r from-transparent via-green-500/40 to-transparent" 
          : "bg-gradient-to-r from-transparent via-gray-300 to-transparent"
      }`} />

      <div className="max-w-7xl mx-auto">
        {/* 2. Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-center">
          
          {/* Column 1: Brand Identity */}
          <div className="flex flex-col items-center lg:items-start space-y-5">
            <img
              src={darkMode ? logonigth : logoday}
              alt="Logo"
              className="w-40  transition-transform hover:scale-105"
            />
            <div className="flex gap-4">
              {[
                { img: X, name: "Twitter" },
                { img: F, name: "Facebook" },
                { img: I, name: "Instagram" }
              ].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`p-2.5 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    darkMode ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"
                  }`}
                >
                  <img 
                    src={icon.img} 
                    alt={icon.name} 
                    className={`w-4 h-4 ${darkMode ? "invert brightness-200" : "brightness-0"}`} 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation in ROW format */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] ${darkMode ? "text-white/50" : "text-black/40"}`}>
              Menu
            </h3>
            <nav className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-2 text-[14px] font-bold">
              {[
                { label: "Home", path: "/" },
                { label: "Appointments", path: "/appointment" },
                { label: "About", path: "/about" },
                { label: "Blogs", path: "/blogs" },
              ].map(({ label, path }, index) => (
                <Link
                  key={index}
                  to={path}
                  className={`relative group transition-colors duration-300 ${
                    darkMode ? "hover:text-green-400 text-white" : "hover:text-green-600 text-black"
                  }`}
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Mission Statement */}
          <div className="flex flex-col items-center lg:items-end">
            <div className={`p-5 rounded-2xl border max-w-[300px] ${
              darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-200 shadow-sm"
            }`}>
              <p className="text-[12px] leading-relaxed text-center lg:text-right italic">
                "Empowering students through excellence and professional support."
              </p>
            </div>
          </div>
        </div>

        {/* 3. Footer Bottom */}
        <div className={`h-[1px] w-full mb-8 ${darkMode ? "bg-white/10" : "bg-gray-200"}`} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold tracking-widest uppercase opacity-70">
            ©{new Date().getFullYear()} <span className="text-green-500">Caawiye</span>.All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest opacity-50">
            <a href="#" className="hover:text-green-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-green-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;