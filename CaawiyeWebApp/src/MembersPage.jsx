// import Icon7 from "./assets/Icon7.png";
// import Picture2 from "./assets/Picture2.png";
// import facebookIcon from "./assets/FaceIcon.png";
// import members from "./JSON/Members.json";
// import { useSelector } from "react-redux";

// const MembersPage = () => {
//   const darkMode = useSelector((state) => state.theme.darkMode);
//   return (
//     <div
//       className="flex flex-col items-center w-full px-6 py-12 gap-10"
//       style={{ background: "var(--bg-color)", color: "var(--text-color)" }}
//     >
//       {/* Header */}
//       <div
//         className={`  ${darkMode ? "bg-[#222222] text-white " : "bg-none text-black" } text-center flex flex-col items-center py-10 px-6 rounded-xl w-full max-w-4xl`}
        
//       >
//         <img src={Icon7} alt="logo" className="w-16 h-16" />

//         {/* <h2 className="text-lg font-bold mt-4"
//           style={{ color: "var(--primary-btn-bg)" }}
//         >
//           TEAM MEMBERS
//         </h2> */}

//         <h1
//           className="text-3xl md:text-5xl font-bold leading-tight mt-2"
//           style={{ color: "var(--text-color)" }}
//         >
//           Let’s meet <span style={{ color: "var(--primary-btn-bg)" }}>Caawiye</span> <br />
//           <span style={{ color: "var(--primary-btn-bg)" }}>Team </span>members
//         </h1>
//       </div>

//       {/* Members Grid */}
//       {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl ">
//         {members.map((member, index) => (
//           <div
//             key={member.id || index}
//             className={`  relative rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105  ${darkMode ? "bg-[#222222] text-white " : "bg-none text-black" }`}
            
//           >
//             <div className="p-4 w-full h-full">
//               <img
//               src={member.image}
//               alt={member.name}
//               className="w-full h-full object-cover rounded-t-3xl "
//             />
//             </div>
            

//             <div className="p-5 flex justify-between items-center absolute bottom-10 z-10 bg-[var(--secondary-btn-border)]  ">
//               <div>
//                 <h2
//                   className="text-lg font-bold"
//                   style={{ color: "var(--text-color)" }}
//                 >
//                   <span className="text-white">{member.name}</span>
//                 </h2>
//                 <p style={{ color: "var(--text-secondary)" }}>
//                   {member.title}
//                 </p>
//               </div>

             
//             </div>
//           </div>
//         ))}
//       </div> */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-4">
//   {members.map((member, index) => (
//     <div
//       key={member.id || index}
//       className="group relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl"
//     >
//       {/* Background Image */}
//       <img
//         src={member.image}
//         alt={member.name}
//         className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//       />

//       {/* Modern Overlay (Reveals on Hover) */}
//       <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-green-900/90 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        
//         {/* Content Animation (Slide Up) */}
//         <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
//           <h2 className="text-xl font-bold text-white">
//             {member.name}
//           </h2>
//           <p className="text-gray-300 mb-4">
//             {member.title}
//           </p>

//           <div className="flex items-center gap-4">
//             {/* Action Button */}
//             {/* <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-gray-200">
//               View Profile
//             </button> */}
            
//             {/* Social Link Example */}
//             {/* <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40">
//               <span className="sr-only">Facebook</span>
//               <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
//             </a> */}
//           </div>
//         </div>
//       </div>

//       {/* Static Label (Visible before hover) - Optional */}
//       <div className="absolute bottom-4 left-4 rounded-lg bg-black/50 px-3 py-1 backdrop-blur-md group-hover:hidden transition-all">
//          <p className="text-sm font-medium text-white">{member.name}</p>
//       </div>
//     </div>
//   ))}
// </div>
//     </div>
//   );
// };

// export default MembersPage;



import Icon7 from "./assets/Icon7.png";
import members from "./JSON/Members.json";
import { useSelector } from "react-redux";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const MembersPage = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`w-full py-20 px-6 transition-all duration-500 ${
      darkMode ? "bg-[#0a0a0a]" : "bg-[#f8fafc]"
    }`}>
      
      {/* 1. Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-20 flex flex-col items-center">
       <div className="p-4 rounded-3xl bg-green-500/10 border border-green-500/20">
                 <img src={Icon7} alt="logo" className="w-12 h-12 animate-pulse" />
               </div>
        
        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-green-500 mb-4">
          The Minds Behind Caawiye
        </h2>
        
        <h1 className={`text-4xl md:text-4xl font-black leading-tight ${
          darkMode ? "text-white" : "text-gray-900"
        }`}>
          Let’s meet our <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Expert Team members
          </span>
        </h1>
      </div>

      {/* 2. Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto px-4">
        {members.map((member, index) => (
          <div
            key={member.id || index}
            className="group relative h-[450px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Background Image with Zoom Effect */}
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Subtle Gradient Overlay (Always there for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />

            {/* Modern Interactive Overlay (Glassmorphism) */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-500 group-hover:opacity-100 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent">
              
              <div className="translate-y-8 transition-transform duration-500 group-hover:translate-y-0 text-center">
                <h2 className="text-2xl font-black text-white mb-1">
                  {member.name}
                </h2>
                <p className="text-green-300 font-medium mb-6 uppercase tracking-widest text-[10px]">
                  {member.title}
                </p>

        

                
              </div>
            </div>

            {/* Static Floating Label (Visible before hover) */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 group-hover:opacity-0 transition-opacity duration-300">
              <p className="text-white font-black text-lg truncate leading-none">{member.name}</p>
              <p className="text-green-400 text-[10px] font-bold uppercase tracking-widest mt-1">{member.title}</p>
            </div>

            {/* Glowing Border on Hover */}
            <div className="absolute inset-0 rounded-[2.5rem] border-2 border-green-500/0 group-hover:border-green-500/50 transition-all duration-500 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* 3. Join Team CTA (Optional - Adds more attraction) */}
      <div className="mt-24 text-center">
        <p className={`text-sm font-medium ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
          Want to work with us? <span className="text-green-500 font-bold cursor-pointer hover:underline">Join the Caawiye Team</span>
        </p>
      </div>
    </div>
  );
};

export default MembersPage;