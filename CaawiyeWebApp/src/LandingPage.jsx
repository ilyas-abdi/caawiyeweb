// import {  Link } from "react-router-dom";
// import Nav from "./Nav";
// import Hero from "./Hero";
// import SolutionPage from "./SolutionPage";
// import FeaturesPage from "./FeaturesPage";
// import MembersPage from "./MembersPage";
// import TestimonialPage from "./TestimonialPage";

// import Footer from "./Footer";

// import icon2 from "./assets/Icon2.png";
// import image1 from "./assets/IMage1.png";
// import image2 from "./assets/Image2.png";
// import image3 from "./assets/Image3.png";

// import '@fontsource/inter';
// import '@fontsource/inter/400.css';
// import '@fontsource/inter/500.css';
// import '@fontsource/inter/700.css';
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// const LandingPage =() => {
//   const [blogs , setBlogs]= useState([])
//   useEffect(()=>{
//  try {
//   const fetchBlogs = async () => {
//   const blogs =  await fetch('https://qaiysawf.citjust.so/api/blog');
//   const data = await blogs.json();
//   setBlogs(data)
//   console.log("Fetched blogs data:", data);
  
//   };
//   fetchBlogs();
//  } catch (error) {
//     console.error("Error in LandingPage useEffect:", error);
//  }
//   },[])
//   const darkMode = useSelector((state) => state.theme.darkMode);
//   return (
//     <div >  <Nav />
//     <div className="pt-28"></div>
    
//       <Hero />
//       <SolutionPage />
//       <FeaturesPage />
//       <MembersPage />
//       <TestimonialPage />
      

//       {/* Blog Section */}
//       <div className="flex flex-col items-center justify-center px-4 py-8"
//            style={{ background: "var(--bg-color)", color: "var(--text-color)" }}
//       >
//         {/* Logo */}
//         <div className="mt-8">
//           <img src={icon2} alt="logo" />
//         </div>

//         {/* Title */}
//         <div className="font-bold font-sans mt-5">
//           BLOG ARTICLES
//         </div>

//         {/* Description */}
//         <div className="text-center font-sans text-[36px] sm:text-[46px] font-bold leading-tight mt-2">
//           <div>Discover IT Problems</div>
//           <div>Tips and Tricks</div>
//         </div>

//         {/* Blog Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
//           {blogs.slice(0, 5).map((blog, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col border border-custom_blockBorder rounded-[10px] overflow-hidden"
//               style={{ background: "var(--bg-color)", color: "var(--text-color)" }}
//             >
//               <img src={blog.image_url} alt={`blog${idx}`} className="w-full h-auto object-cover" />
//               <div className="p-5">
//                 <h2 className="text-sm opacity-75">  {new Date(blog.create_time).toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric'
//   })}
// </h2>
//                 <h1 className="text-lg font-semibold mt-2 leading-snug">
//                  {blog.title}
//                 </h1>
//                 <h2 className="text-sm mt-4 font-semibold opacity-80">
//                   {blog.author}
//                 </h2>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         <div className="mt-12">
//           <Link to="/blogs">
//             <button
//               className="border-2 px-6 py-3 rounded-full font-sans"
//               style={{
//                 borderColor: "var(--text-color)",
//                 color: "var(--text-color)"
//               }}
//             >
//               Load More Blog Posts
//             </button>
//           </Link>
//         </div>
//       </div>

      
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;



import { Link } from "react-router-dom";
import Nav from "./Nav";
import Hero from "./Hero";
import SolutionPage from "./SolutionPage";
import FeaturesPage from "./FeaturesPage";
import MembersPage from "./MembersPage";
import TestimonialPage from "./TestimonialPage";
import Footer from "./Footer";
import icon2 from "./assets/Icon2.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FiArrowRight, FiCalendar, FiUser } from "react-icons/fi";

const LandingPage = () => {
  const [blogs, setBlogs] = useState([]);
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://qaiysawf.citjust.so/api/blog');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className={`transition-all duration-500 ${darkMode ? "bg-[#0a0a0a]" : "bg-white"}`}>
      <Nav />
      <div className="pt-28"></div>

      <Hero />
      <SolutionPage />
      <FeaturesPage />
      <MembersPage />
      <TestimonialPage />

      {/* --- Blog Section --- */}
      <section className={`py-24 px-6 md:px-12 transition-all duration-500 ${
        darkMode ? "bg-[#0f0f0f]" : "bg-[#fcfdfc]"
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
                 <div
                        className = { `${darkMode ? "bg-black": null } w-14 h-18 rounded-full bg-[var(--card-bg)] shadow flex items-center justify-center mb-3`}
                       
                         >
                          <img src={icon2} alt="B" className="w-15 h-18 animate-pulse"  />
                        </div>
            </div>
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-green-500 mb-4">
              Blog Articles
            </h2>
            <h1 className={`text-4xl md:text-4xl font-black leading-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
              Discover IT Problems <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Tips and Tricks
              </span>
            </h1>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {blogs.slice(0, 3).map((blog, idx) => (
              <div
                key={idx}
                className={`group flex flex-col rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-3 ${
                  darkMode 
                    ? "bg-white/5 border border-white/10 hover:bg-white/10" 
                    : "bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl"
                }`}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={blog.image_url} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    IT Support
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4 text-[12px] font-medium opacity-60">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="text-green-500" />
                      {new Date(blog.create_time).toLocaleDateString('en-US', {
                        month: 'short', day: 'numeric', year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiUser className="text-green-500" />
                      {blog.author}
                    </span>
                  </div>

                  <h1 className={`text-xl font-black mb-4 leading-snug group-hover:text-green-500 transition-colors ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {blog.title}
                  </h1>
                  
                  <div className="mt-auto pt-6 border-t border-gray-500/10">
                    <Link 
                      to={`/blog/${blog.id}`} 
                      className="inline-flex items-center gap-2 text-sm font-bold text-green-500 group-hover:gap-4 transition-all"
                    >
                      Read Full Article <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-20">
            <Link to="/blogs">
              <button className={`group relative flex items-center gap-3 px-10 py-4 rounded-full font-black text-sm tracking-widest uppercase overflow-hidden transition-all ${
                darkMode 
                  ? "bg-white/5 border border-white/20 text-white hover:bg-white hover:text-black" 
                  : "bg-gray-900 text-white hover:bg-green-500"
              }`}>
                Load More Blog Posts
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;