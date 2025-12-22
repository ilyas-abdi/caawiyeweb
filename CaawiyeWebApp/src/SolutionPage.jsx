import { useEffect, useState } from "react";
import Icon6 from "./assets/Icon6.png";
import Icon5 from "./assets/icon5.png";
import { useSelector } from "react-redux";
// import { useTheme } from "./context/ThemeContext";

const SolutionPage = () => {
  
  // const darkMode = useSelector((state) => state.theme.darkMode);
  // const [solutions, setSolutions] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://qaiysawf.citjust.so/api/solution");
  //       const data = await response.json();
  //       console.log("Fetched solutions:", data);
  //       setSolutions(data);
  //     } catch (error) {
  //       console.error("Error fetching solutions:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // return (
  //   <div
  //     className="w-full py-16 px-6 md:px-10 flex flex-col items-center justify-center transition-colors duration-300"
  //     style={{
  //       background: darkMode
  //         ? "#111111"
  //         : "linear-gradient(to bottom, #fff 10%, #D5DBFF80 100%)",
  //       color: darkMode ? "#f0f0f0" : "#111111",
  //     }}
  //   >
  //     {/* Header */}
  //     <div className="flex flex-col items-center text-center max-w-3xl mt-20">
  //       <img src={Icon6} alt="logo" className="w-16 h-16 mb-4" />
  //       <h2
  //         className="text-lg font-bold"
  //         style={{ color: darkMode ? "#3CB44A" : "#4F46E5" }}
  //       >
  //         CAAWIYE PROBLEM SOLVING SERVICES
  //       </h2>
  //       <h1
  //         className="text-3xl md:text-[46px] font-bold leading-tight mt-2 text-center"
  //         style={{ color: darkMode ? "#f0f0f0" : "#111111" }}
  //       >
  //         All-in-one solution for <br />
  //         <span>Caawiye team</span>
  //       </h1>
  //     </div>

  //     {/* Cards Grid */}
  //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 w-full max-w-6xl">
  //       {solutions.map((solution) => (
  //         <div
  //           key={solution.id}
  //           className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md transition-colors duration-300"
  //           style={{
  //             backgroundColor: darkMode ? "#1e1e1e" : "#fff",
  //             border: darkMode ? "1px solid #333" : "1px solid #ddd",
  //             height: "100%", // ensures equal height
  //           }}
  //         >
  //           <div
  //             className="flex items-center justify-center w-12 h-12 rounded-full mb-4"
  //             style={{
  //               backgroundColor: darkMode ? "#222" : "#E0E0F7",
  //             }}
  //           >
  //             <img
  //               src={Icon5}
  //               alt="icon"
  //               className="w-6 h-6"
  //               style={{ filter: darkMode ? "invert(1)" : "none" }}
  //             />
  //           </div>

  //           <h2
  //             className="font-bold text-lg pb-2"
  //             style={{ color: darkMode ? "#f0f0f0" : "#1E3A8A" }}
  //           >
  //             {solution.title}
  //           </h2>

  //           <p
  //             className="text-sm leading-relaxed flex-grow"
  //             style={{ color: isDark ? "#ccc" : "#9CA3AF" }}
  //           >
  //             {solution.description}
  //           </p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  
};

export default SolutionPage;
