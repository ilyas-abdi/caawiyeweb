// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Nav from "./Nav";
// import RequestedForm from "./RequestedForm";
// import Footer from "./Footer";
// import Check from "./assets/Check.png";
// import Home from "./assets/Home.png";
// import imgre from "./assets/Imgre.png";
// import GreaterThan from "./assets/GreaterThan.png";
// import B from "./assets/Bo.png";
// import SingleAppoitment from "./SingleAppoitment";
// import { useSelector } from "react-redux";

// const Appointment = () => {
//   const darkMode = useSelector((state) => state.theme.darkMode);

//   const [GenCode, setGenCode] = useState("");
//   const [cardData, setCardData] = useState([]);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);

//   // Toggle dark mode

//   // Fetch appointment by code
//   const listAppointment = async () => {
//     try {
//       const req = await fetch(
//         `https://qaiysawf.citjust.so/api/appointment/${GenCode}`
//       );
//       if (!req.ok) return console.log("Appointment not found");

//       const res = await req.json();

//       // Map data into your cardData state
//       setCardData(
//         res.map((item) => ({
//           full_name: item.full_name,
//           student_id: item.student_id,
//           code_generated: item.code_generated,
//           id: item.id,
//           created_at: new Date(item.created_at).toLocaleString("en-US", {
//             year: "numeric",
//             month: "short",
//             day: "numeric",
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//           department: item.department,
//           description: item.description,
//           email: item.email,
//           phone: item.phone,
//           semester: item.semester,
//           status: item.status,
//           type_of_issue: item.type_of_issue,
//         }))
//       );
//     } catch (error) {
//       console.error("Error fetching appointment:", error);
//     }
//   };

//   useEffect(() => {
//     console.log("card data is ...", cardData);
//   }, [cardData]);


//   return (
//     <>
//       <Nav />

//       {selectedAppointment ? (
//         <SingleAppoitment
//           appointment={selectedAppointment}
//           onBack={() => setSelectedAppointment(null)} // for back button
//         />
//       ) : (
//         <div className="bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300 pt-32">
//           {/* Dark Mode Toggle */}
//           {/* <div className="flex justify-end p-4">
//         <button
//           onClick={toggleDarkMode}
//           className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
//         >
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </div> */}

//           {/* Hero Section */}
          
//           <div
//   className={`${
//     darkMode
//       ? "bg-[#222222]"
//       : "bg-gradient-to-b from-[var(--hero-bg)] from-10% to-[var(--hero-bg2)] to-100%"
//   } w-full rounded-[40px] shadow-xl sm:p-6 md:p-12`}
// >
//   <section className="container mx-auto px-4 sm:px-6 md:px-12 sm:py-12 md:py-20 text-center">
//     <div className="max-w-full sm:max-w-2xl md:max-w-4xl mx-auto">
//       <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-[var(--text-color)] mb-4 sm:mb-6 md:mb-8">
//         Learn more about our team
//       </h1>

//       <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 md:mb-6 flex-wrap">
//         <span className="text-sm sm:text-base md:text-3xl">
//           with
//         </span>
//         <span className="bg-gradient-to-br from-[#788BFF] to-[#46B453] px-3 py-2 sm:px-4 sm:py-2 text-white rounded-[20px] text-xs sm:text-sm md:text-3xl whitespace-nowrap">
//           Caawiye
//         </span>
//       </div>

//       <p className="text-[var(--text-secondary)] text-xs sm:text-sm md:text-lg max-w-full sm:max-w-xl md:max-w-2xl mx-auto leading-snug">
//         Schedule booking now to help you easily and save time with us.
//         As Caawiye team, we are members of the University of Systems
//         and Technology.
//       </p>
//     </div>
//   </section>
// </div>


//           {/* Checking Section */}
//           <div className="flex flex-col mt-16 items-center justify-center gap-1 px-4 md:px-7">
//             <img src={Check} alt="logo" />
//             <div className="font-bold text-[17px] mt-1 text-[var(--text-color)]">
//               checking
//             </div>
//             <div className="w-fit mt-2 text-center text-[36px] md:text-[46px] font-bold">
//               <div className="ml-[40px] md:ml-[20px]">Check</div>
//               <div>Repair status</div>
//             </div>

//             {/* Input & Button */}
//             <div className="flex flex-col mt-[70px] items-center justify-center px-4">
//               <div className="flex flex-col md:flex-row gap-4 items-center">
//                 <input
//                   type="text"
//                   value={GenCode}
//                   onChange={(e) => setGenCode(e.target.value)}
                  
//                   className = {`${darkMode ? 'bg-black': 'bg-white'} ${darkMode ? 'text-white' : 'text-black'} w-full md:w-[400px] border-2 border-custom py-[16.5px] px-[15px] rounded-[12px]  text-[var(--text-color)]`}
//                   placeholder="Enter Student Unique Code"
//                 />
//                 <button
//                   onClick={listAppointment}
//                   className={`font-bold bg-[var(--primary-btn-bg)] text-[var(--primary-btn-text)] text-[20px] py-[19.5px] px-[46.5px] rounded-[12px]`}

//                  >
//                   Check Status
//                 </button>
//               </div>
//               <div className="mt-[20px] text-center px-4 text-[var(--text-secondary)]">
//                 <span className="font-semibold">Note:</span> Please enter the
//                 unique code provided by the student to view the repair status of
//                 their computer.
//               </div>
//             </div>

//             {/* Cards */}
//             <div className="w-full flex items-center justify-center">
//               <div className="flex flex-col mt-[60px] items-center px-4 w-full max-w-[900px]">
//                 <div className="flex items-center mb-[30px]">
//                   <img src={Home} alt="home" />
//                   <h1 className="text-[25px] font-medium ml-[16px] text-[var(--text-color)]">
//                     Total Repaired Works
//                   </h1>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {cardData.map((card, index) => (
//                     <div
//                       key={index}
//                         className={`flex flex-col sm:flex-row items-start sm:items-center justify-between w-full h-auto sm:h-[100px] p-4 sm:px-6 border border-[var(--card-border)] rounded-xl shadow-md hover:shadow-lg transition-all duration-300
//                           ${darkMode ? "bg-black" : "bg-white"}`}                      
//                     >
//                       {/* Left content */}
//                       <div className="flex-1 w-full mb-3 sm:mb-0 sm:mr-4">
//                         <h2 className="font-bold text-[var(--text-color)] pb-1 text-lg break-words">
//                           {card.full_name}
//                         </h2>
//                         <h3 className="text-[var(--text-secondary)] text-sm break-words">
//                           {card.created_at}
//                         </h3>
//                       </div>

//                       {/* View Details Button */}
//                       <button
//                         className="bg-[var(--primary-btn-bg)] text-white px-4 py-2 rounded-lg font-semibold text-sm md:text-base shadow-sm hover:opacity-90 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
//                         onClick={() => setSelectedAppointment(card)}
//                       >
//                         View Details →
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Booking Section */}
//           <div className="flex flex-col mt-16 items-center justify-center gap-1 px-7">
//             <img src={B} alt="logo" />
//             <div
//               className="font-bold text-[17px] mt-1"
//               style={{ color: "var(--text-color)" }}
//             >
//               appointment
//             </div>
//             <div className="w-fit mt-2 mx-auto text-gray-900 font-sans text-[46px] font-bold leading-tight text-[var(--text-color)]">
//               <div className="ml-[46px]" style={{ color: "var(--text-color)" }}>
//                 Book an
//               </div>
//               <div
//                 className="text-center mb-8"
//                 style={{ color: "var(--text-color)" }}
//               >
//                 appointment
//               </div>
//             </div>
//           </div>

//           <RequestedForm />

          
//           <Footer />
//         </div>
//       )}
//     </>
//   );
// };

// export default Appointment;


import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import RequestedForm from "./RequestedForm";
import Footer from "./Footer";
import Check from "./assets/Check.png";
import Home from "./assets/Home.png";
import B from "./assets/Bo.png";
import SingleAppoitment from "./SingleAppoitment";
import { useSelector } from "react-redux";
import { FiSearch, FiCalendar, FiArrowRight, FiInfo } from "react-icons/fi";

const Appointment = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [GenCode, setGenCode] = useState("");
  const [cardData, setCardData] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [loading, setLoading] = useState(false);

  const listAppointment = async () => {
    if (!GenCode) return;
    setLoading(true);
    try {
      const req = await fetch(`https://qaiysawf.citjust.so/api/appointment/${GenCode}`);
      if (!req.ok) {
        setCardData([]);
        return;
      }
      const res = await req.json();
      setCardData(
        res.map((item) => ({
          ...item,
          created_at: new Date(item.created_at).toLocaleString("en-US", {
            year: "numeric", month: "short", day: "numeric",
            hour: "2-digit", minute: "2-digit",
          })
        }))
      );
    } catch (error) {
      console.error("Error fetching appointment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      {selectedAppointment ? (
        <SingleAppoitment
          appointment={selectedAppointment}
          onBack={() => setSelectedAppointment(null)}
        />
      ) : (
        <div className={`transition-all duration-500 pt-32 ${darkMode ? "bg-[#0a0a0a]" : "bg-[#f8fafc]"}`}>
          
 

          {/* 2. Checking Section (Status Search) */}
          <section className="container mx-auto px-6 py-24">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center mb-12">
                <div className="p-4 rounded-2xl bg-green-500/10 mb-4 text-green-500">
                   <FiSearch size={32} />
                </div>
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-green-500 mb-2">Tracking System</h2>
                <h1 className={`text-4xl md:text-5xl font-black ${darkMode ? "text-white" : "text-gray-900"}`}>Check Repair Status</h1>
              </div>

              {/* Modern Input Group */}
              <div className={`w-full max-w-2xl p-2 rounded-[2rem] flex flex-col md:flex-row gap-2 transition-all ${
                darkMode ? "bg-white/5 border border-white/10" : "bg-white shadow-xl shadow-gray-200"
              }`}>
                <input
                  type="text"
                  value={GenCode}
                  onChange={(e) => setGenCode(e.target.value)}
                  placeholder="Enter Student Unique Code (e.g. CAW-123)"
                  className={`flex-1 bg-transparent px-6 py-4 outline-none font-medium ${darkMode ? "text-white" : "text-gray-900"}`}
                />
                <button
                  onClick={listAppointment}
                  disabled={loading}
                  className="bg-green-500 hover:bg-green-600 text-white font-black px-10 py-4 rounded-[1.5rem] transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  {loading ? "Searching..." : "Check Status"}
                </button>
              </div>

              <div className={`mt-6 flex items-center gap-2 text-sm ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                <FiInfo className="text-green-500" />
                <span>Note: Use the unique code provided during registration.</span>
              </div>

              {/* 3. Results / Cards Section */}
              {cardData.length > 0 && (
                <div className="w-full max-w-5xl mt-20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <FiCalendar size={24} />
                    </div>
                    <h3 className={`text-2xl font-black ${darkMode ? "text-white" : "text-gray-900"}`}>Recent Appointments</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cardData.map((card, index) => (
                      <div
                        key={index}
                        className={`group p-6 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 ${
                          darkMode 
                          ? "bg-white/5 border-white/10 hover:bg-white/10" 
                          : "bg-white border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h2 className={`font-black text-xl mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                              {card.full_name}
                            </h2>
                            <p className="text-green-500 text-sm font-bold tracking-widest uppercase mb-4">
                              {card.status || "Pending"}
                            </p>
                            <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                              {card.created_at}
                            </div>
                          </div>
                          <button
                            onClick={() => setSelectedAppointment(card)}
                            className="h-12 w-12 rounded-2xl bg-green-500 text-white flex items-center justify-center group-hover:rotate-45 transition-transform"
                          >
                            <FiArrowRight size={20} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 4. Booking Section Header */}
          <section className="py-24 border-t border-gray-500/10">
            <div className="container mx-auto px-6 text-center">
              <div className="flex justify-center mb-6">
                 <div className="p-4 rounded-2xl bg-green-500/10 text-green-500">
                    <FiCalendar size={32} />
                 </div>
              </div>
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-green-500 mb-2">New Request</h2>
              <h1 className={`text-4xl md:text-5xl font-black mb-12 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Book an Appointment
              </h1>
              
              <div className="max-w-4xl mx-auto">
                <RequestedForm />
              </div>
            </div>
          </section>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Appointment;