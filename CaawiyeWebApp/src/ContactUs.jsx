// import React, { useState } from 'react';
// import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
// import SocialIcons from './SocialIcons';
// import { Link } from 'react-router-dom';
// import Nav from './Nav';
// import Footer from './Footer';



// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [isSending, setIsSending] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSending(true);

    
    
//     setTimeout(() => {
//       setIsSending(false);
//       alert('Fariintaada waa la diray!');
//       setFormData({ name: '', email: '', message: '' }); // Foomka nadiifi
//     }, 2000);
//   };

//   return (
//     <>
//     <Nav className="" />
//     <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6 ">
//       <div className="w-full max-w-5xl bg-white shadow-2xl rounded-xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
        
//         {/* Header-ka Foomka */}
//         <div className="bg-[var(--primary-btn-bg)] p-4 hidden md:block">
//           <div className="flex space-x-2">
//             <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//             <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//           </div>
//         </div>

//         {/* Qaybta Weyn ee Foomka */}
//         <div className="grid md:grid-cols-2 p-10 md:p-16 gap-10">
          
//           {/* Qaybta Foomka (Bidix) */}
//           <div className="space-y-8">
//             <h1 className="text-4xl font-bold text-[var(--primary-btn-bg)]">Contact us</h1>

//             <form onSubmit={handleSubmit} className="space-y-6">
              
//               {/* Name Input */}
//               <div className="relative">
//                 <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                   required
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
//                 />
//               </div>

//               {/* Email Input */}
//               <div className="relative">
//                 <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   required
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
//                 />
//               </div>

//               {/* Message Input */}
//               <div>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Message"
//                   rows="4"
//                   required
//                   className="w-full p-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={isSending}
//                 className="w-full flex items-center justify-center bg-[var(--primary-btn-bg)] hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSending ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     <FaPaperPlane className="mr-2" /> Send Message
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>

//           {/* Qaybta Sawirka iyo Social Media (Midig) */}
//           <div className="flex flex-col items-center justify-center p-4">
//             {/* Sawirka/Illustration-ka */}
//             <div  className="w-full max-w-sm">
//               <Link to="/" >
//               <img 
//                     src="../r33.png" 
//                     alt="Illustration of a person sending a message" 
//                     className="w-full h-auto object-contain animate-float"
//                 />
//               </Link>
                
//             </div>

//             {/* Astaamaha Social Media iyo WhatsApp */}
//             <div className="mt-8">
//                 <SocialIcons />
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default ContactUs;


// import React, { useState } from 'react';
// import { FaUser, FaEnvelope, FaPaperPlane, FaCommentDots } from 'react-icons/fa';
// import SocialIcons from './SocialIcons';
// import { Link } from 'react-router-dom';
// import Nav from './Nav';
// import Footer from './Footer';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isSending, setIsSending] = useState(false);
//   const [focused, setFocused] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSending(true);
//     setTimeout(() => {
//       setIsSending(false);
//       alert('Fariintaada waa la diray!');
//       setFormData({ name: '', email: '', message: '' });
//     }, 2000);
//   };

//   return (
//     <>
//       <Nav />
//       {/* Waxaan yareeyay padding-ka sare iyo hoose (pt-24 pb-12) */}
//       <div className="min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4 md:pt-28 md:pb-16">
        
//         {/* Main Card Container - Max-width-ka ayaan ka dhigay 5xl (halkii uu ka ahaa 6xl) */}
//         <div className="w-full max-w-5xl bg-white/80 backdrop-blur-lg shadow-xl rounded-[2rem] overflow-hidden border border-white/20 flex flex-col md:flex-row transition-all duration-500">
          
//           {/* Left Side: Contact Form - Padding-ka ayaan ka dhigay p-8 (halkii uu ka ahaa p-16) */}
//           <div className="w-full md:w-1/2 p-6 md:p-10 space-y-6">
//             <div className="space-y-1">
//               <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
//                 Get in <span className="text-green-500">touch</span>
//               </h1>
//               <p className="text-slate-500 text-sm font-medium">We'd love to hear from you!</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Name Input - py-3 ayaan ka dhigay dhererka */}
//               <div className="group relative">
//                 <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${focused === 'name' ? 'text-cyan-500' : 'text-slate-400'}`}>
//                   <FaUser size={14} />
//                 </div>
//                 <input
//                   type="text"
//                   name="name"
//                   onFocus={() => setFocused('name')}
//                   onBlur={() => setFocused(null)}
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   required
//                   className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 outline-none transition-all duration-300 text-sm"
//                 />
//               </div>

//               {/* Email Input */}
//               <div className="group relative">
//                 <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${focused === 'email' ? 'text-cyan-500' : 'text-slate-400'}`}>
//                   <FaEnvelope size={14} />
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   onFocus={() => setFocused('email')}
//                   onBlur={() => setFocused(null)}
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email Address"
//                   required
//                   className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 outline-none transition-all duration-300 text-sm"
//                 />
//               </div>

//               {/* Message Input - Rows-ka ayaan ka dhigay 4 */}
//               <div className="group relative">
//                 <div className={`absolute top-3.5 left-0 pl-4 pointer-events-none transition-colors duration-300 ${focused === 'message' ? 'text-cyan-500' : 'text-slate-400'}`}>
//                   <FaCommentDots size={14} />
//                 </div>
//                 <textarea
//                   name="message"
//                   onFocus={() => setFocused('message')}
//                   onBlur={() => setFocused(null)}
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="How can we help?"
//                   rows="4"
//                   required
//                   className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 outline-none transition-all duration-300 resize-none text-sm"
//                 ></textarea>
//               </div>

//               {/* Submit Button - py-3 ayaan ka dhigay */}
//               {/* <button
//                 type="submit"
//                 disabled={isSending}
//                 className="w-full group relative overflow-hidden bg-slate-900 hover:bg-white text-white font-bold py-3 rounded-xl transition-all duration-300 transform active:scale-[0.98] disabled:opacity-70 shadow-md"
//               >
//                 <div className="flex items-center justify-center gap-2 relative z-10 text-sm">
//                   {isSending ? (
//                     <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                   ) : (
//                     <FaPaperPlane size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                   )}
//                   <span>{isSending ? 'Sending...' : 'Send Message'}</span>
//                 </div>
//               </button> */}
//               <button
//   type="submit"
//   disabled={isSending}
//   className="w-full group relative overflow-hidden bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-3 rounded-xl transition-all duration-300 transform active:scale-[0.98] disabled:opacity-70 shadow-lg shadow-green-500/20"
// >
//   <div className="flex items-center justify-center gap-2 relative z-10 text-sm">
//     {isSending ? (
//       <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
//         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
//         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//       </svg>
//     ) : (
//       <FaPaperPlane size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//     )}
//     <span>{isSending ? 'Sending...' : 'Send Message'}</span>
//   </div>
// </button>
//             </form>
//           </div>

//           {/* Right Side: Visuals - P-12 ayaan ka dhigay p-8 */}
//           <div className="w-full md:w-1/2 bg-slate-50/50 p-8 flex flex-col items-center justify-center relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-100 rounded-full blur-3xl -mr-24 -mt-24 opacity-50"></div>
            
//             <div className="relative z-10 w-full max-w-[280px] text-center space-y-6">
//               <Link to="/" className="inline-block transition-transform hover:scale-105">
//                 <img 
//                   src="../r33.png" 
//                   alt="Contact" 
//                   className="w-full h-auto drop-shadow-xl animate-float"
//                 />
//               </Link>
              
//               <div className="space-y-3">
//                 <h3 className="text-lg font-bold text-slate-800">Connect with us</h3>
//                 <div className="flex justify-center scale-90">
//                   <SocialIcons />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//       `}</style>
//     </>
//   );
// };

// export default ContactUs;


import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaCommentDots } from 'react-icons/fa';
import SocialIcons from './SocialIcons';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const ContactUs = ({ darkMode }) => { // darkMode halkan ku dar si uu Nav iyo Footer ula xiriiro
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      alert('Fariintaada waa la diray!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    // 'dark' class-ka halkan ayaa laga maamulayaa si uu page-ka dhan u saameeyo
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-500 bg-slate-50 dark:bg-[#0a0a0a]">
        <Nav darkMode={darkMode} />
        
        <div className="flex items-center justify-center p-4 pt-32 pb-16 md:pt-40">
          
          {/* Main Card Container */}
          <div className="w-full max-w-5xl bg-white/90 dark:bg-[#161616] backdrop-blur-lg shadow-2xl dark:shadow-none rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 flex flex-col md:flex-row transition-all duration-500">
            
            {/* Left Side: Contact Form */}
            <div className="w-full md:w-1/2 p-6 md:p-12 space-y-6">
              <div className="space-y-1">
                <h1 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white tracking-tight">
                  Get in <span className="text-[#22c55e]">touch</span>
                </h1>
                <p className="text-slate-500 dark:text-gray-400 text-sm font-medium">
                  We'd love to hear from you! Fill out the form below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div className="group relative">
                  <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${focused === 'name' ? 'text-[#22c55e]' : 'text-slate-400'}`}>
                    <FaUser size={14} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-10 pr-4 py-3.5 bg-slate-50 dark:bg-[#1d1d1d] border border-slate-100 dark:border-white/5 rounded-2xl focus:bg-white dark:focus:bg-[#222] focus:ring-4 focus:ring-[#22c55e]/10 focus:border-[#22c55e] outline-none transition-all duration-300 text-sm dark:text-white"
                  />
                </div>

                {/* Email Input */}
                <div className="group relative">
                  <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${focused === 'email' ? 'text-[#22c55e]' : 'text-slate-400'}`}>
                    <FaEnvelope size={14} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full pl-10 pr-4 py-3.5 bg-slate-50 dark:bg-[#1d1d1d] border border-slate-100 dark:border-white/5 rounded-2xl focus:bg-white dark:focus:bg-[#222] focus:ring-4 focus:ring-[#22c55e]/10 focus:border-[#22c55e] outline-none transition-all duration-300 text-sm dark:text-white"
                  />
                </div>

                {/* Message Input */}
                <div className="group relative">
                  <div className={`absolute top-4 left-0 pl-4 pointer-events-none transition-colors duration-300 ${focused === 'message' ? 'text-[#22c55e]' : 'text-slate-400'}`}>
                    <FaCommentDots size={14} />
                  </div>
                  <textarea
                    name="message"
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    rows="4"
                    required
                    className="w-full pl-10 pr-4 py-3.5 bg-slate-50 dark:bg-[#1d1d1d] border border-slate-100 dark:border-white/5 rounded-2xl focus:bg-white dark:focus:bg-[#222] focus:ring-4 focus:ring-[#22c55e]/10 focus:border-[#22c55e] outline-none transition-all duration-300 resize-none text-sm dark:text-white"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full group relative overflow-hidden bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-4 rounded-2xl transition-all duration-300 transform active:scale-[0.98] disabled:opacity-70 shadow-lg shadow-green-500/20"
                >
                  <div className="flex items-center justify-center gap-2 relative z-10 text-sm tracking-wide">
                    {isSending ? (
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <FaPaperPlane size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    )}
                    <span>{isSending ? 'Sending Message...' : 'Send Message'}</span>
                  </div>
                </button>
              </form>
            </div>

            {/* Right Side: Info & Socials */}
            <div className="w-full md:w-1/2 bg-slate-50/50 dark:bg-[#1d1d1d]/40 p-8 flex flex-col items-center justify-center relative border-t md:border-t-0 md:border-l border-slate-100 dark:border-white/5">
              
              {/* Decorative Blur Effect for Dark Mode */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 rounded-full blur-[80px] -mr-24 -mt-24 opacity-0 dark:opacity-100"></div>

              <div className="relative z-10 w-full max-w-[280px] text-center space-y-8">
                <Link to="/" className="inline-block transition-transform duration-500 hover:scale-110">
                  <img 
                    src="../r33.png" 
                    alt="Contact Illustration" 
                    className="w-full h-auto drop-shadow-2xl animate-float dark:brightness-90"
                  />
                </Link>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">Follow Our Socials</h3>
                  <div className="flex justify-center scale-110">
                    <SocialIcons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer darkMode={darkMode} />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;