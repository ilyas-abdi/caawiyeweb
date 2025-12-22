import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import icon2 from "./assets/Icon2.png";

import { useSelector } from "react-redux";

const Blogs = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://qaiysawf.citjust.so/api/blog");
        const data = await res.json();
        setBlogs(data);
        console.log("Fetched blogs data:", data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  if (!blogs || blogs.length === 0) return <Nav />;

  const featured = blogs[0];
  const topReads = blogs.slice(0, 4);
  

  return (
    <>
      <div><Nav /></div>
     
      {/* Hero Section */}
    
      <div className={`transition-all duration-500 pt-20 pb-10 px-6 ${darkMode ? "bg-[#0a0a0a]" : "bg-[#fcfdfd]"}`}>
  {/* Card-ka cad ee weyn ee sawirka ka muuqda */}
  <div className={`max-w-6xl mx-auto rounded-[3.5rem] overflow-hidden relative transition-all duration-500 ${
    darkMode ? "bg-[#161616] border border-white/5 shadow-none" : "bg-white shadow-2xl shadow-gray-200/40 border border-gray-50"
  }`}>
    
    <div className="relative z-10 py-20 px-8 text-center">
      {/* Cinwaanka oo u qoran sida sawirka */}
      <h1 className={`text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight ${darkMode ? "text-white" : "text-[#0f172a]"}`}>
        Solve your problems blog posts <br />
        <span className="text-[#22c55e] block mt-1">
          Team Caawiye
        </span>
      </h1>

      {/* Qoraalka hoose (Description) */}
      <p className={`max-w-xl mx-auto text-sm md:text-base mb-10 leading-relaxed opacity-70 font-medium ${
        darkMode ? "text-gray-400" : "text-gray-500"
      }`}>
        Schedule booking now to help you easy and save time with us, as Caawiye team we are particular university of systems and technology members.
      </p>

   
    </div>
  </div>
</div>

      <div className="container mx-auto px-6 lg:px-20 text-[var(--text-color)] transition-colors duration-300">

        {/* Featured + Top Reads */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12 items-start">

          {/* Featured */}
          <div className="lg:w-7/12  rounded-2xl shadow-sm p-6 border border-[var(--card-border)]">
            <p className="text-4xl font-bold mb-8">The latest</p>
            <img src={featured.image_url} alt={featured.title} className="w-full h-64 object-cover rounded-xl mb-4" />
            <h3 className="text-sm text-[var(--text-secondary)]">{featured.createTime}</h3>
            <h2 className="text-2xl lg:text-3xl font-bold mt-2">{featured.title}</h2>
            <p className="text-[var(--text-secondary)] mt-3 line-clamp-3">{featured.content}</p>

            <Link to={`/singleblog/${featured.id}`} className="inline-block mt-4 text-sm font-bold text-[var(--primary-btn-bg)]">
              Read more
            </Link>

            <div className="text-sm text-[var(--text-secondary)] mt-2">
              Posted by {featured.auther || featured.author}
            </div>
          </div>

          {/* Top Reads */}
          <aside className="lg:w-5/12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-[var(--primary-btn-bg)] font-bold">Top Reads</h3>
            </div>
            <div className="space-y-4">
              {topReads.map((r) => (
                <Link key={r.id} to={`/singleblog/${r.id}`} className="flex gap-3 items-start">
                  <img src={r.image_url} alt={r.title} className="w-80 h-32 object-cover rounded" />
                  <div className="text-sm">
                    <div className="font-medium line-clamp-2">{r.title}</div>
                    <div className="text-xs text-[var(--text-secondary)] mt-1">{r.createTime} • Read more</div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>

        {/* Center Title */}
        <div className="flex flex-col items-center mt-12">
          <div
          className = { `${darkMode ? "bg-black": null } w-14 h-18 rounded-full bg-[var(--card-bg)] shadow flex items-center justify-center mb-3`}
         
           >
            <img src={icon2} alt="B" className="w-8 h-18" />
          </div>
          <div className="text-xs text-[var(--primary-btn-bg)] font-semibold mb-3">BLOG ARTICLES</div>
          <h1 className="text-3xl md:text-4xl font-bold text-center">Discover IT Problems<br />Tips and Tricks</h1>
        </div>

        {/* Grid of Blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {blogs.map((post) => (
            <Link key={post.id} to={`/singleblog/${post.id}`} className="group">
              <div className="   rounded-xl border border-[var(--card-border)] overflow-hidden shadow-sm hover:shadow-lg transition">
                <img src={post.image_url} alt={post.title} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <div className="text-xs text-[var(--text-secondary)]">{post.createTime}</div>
                  <h3 className="mt-2 font-semibold text-lg line-clamp-2">{post.title}</h3>
                  <div className="mt-3 text-sm text-[var(--text-secondary)] line-clamp-2">{post.content}</div>
                  <div className="mt-4 text-sm text-[var(--primary-btn-bg)]">Post by {post.auther || post.author}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

       
      </div>

      <Footer />
    </>
  );
};

export default Blogs;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Nav from "./Nav";
// import Footer from "./Footer";
// import icon2 from "./assets/Icon2.png";
// import { useSelector } from "react-redux";
// import { FiClock, FiUser, FiArrowRight, FiBookOpen } from "react-icons/fi";

// const Blogs = () => {
//   const darkMode = useSelector((state) => state.theme.darkMode);
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await fetch("https://qaiysawf.citjust.so/api/blog");
//         const data = await res.json();
//         setBlogs(data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };
//     fetchBlogs();
//   }, []);

//   if (!blogs || blogs.length === 0) return <Nav />;

//   const featured = blogs[0];
//   const topReads = blogs.slice(1, 5);

//   return (
//     <div className={`transition-all duration-500 ${darkMode ? "bg-[#0a0a0a]" : "bg-[#fcfdfd]"}`}>
//       <Nav />
      
//       {/* --- Hero Header (Sized Down) --- */}
//       <section className="pt-28 pb-8 px-6">
//         <div className={`max-w-6xl mx-auto rounded-[2rem] relative overflow-hidden ${
//           darkMode ? "bg-[#161616] border border-white/5" : "bg-white shadow-xl shadow-gray-200/30"
//         }`}>
//           <div className="relative z-10 py-10 px-8 text-center">
//              <div className="inline-block p-2 rounded-xl bg-green-500/10 mb-4">
//                 <img src={icon2} alt="logo" className="w-6 h-6" />
//              </div>
//             <h1 className={`text-3xl md:text-5xl font-black mb-4 leading-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
//               Tech <span className="text-green-500">Insights</span>
//             </h1>
//             <p className={`max-w-xl mx-auto text-sm opacity-80 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//               Professional IT tricks and solutions designed to keep your systems running smoothly.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="container mx-auto px-6 max-w-6xl">
        
//         {/* --- Featured & Sidebar (Compact) --- */}
//         <div className="grid lg:grid-cols-12 gap-8 mt-8">
          
//           {/* Main Featured Post */}
//           <div className="lg:col-span-8">
//             <h3 className={`text-lg font-black mb-6 flex items-center gap-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
//               <span className="w-6 h-1 bg-green-500 rounded-full"></span>
//               Latest
//             </h3>
//             <Link to={`/singleblog/${featured.id}`} className="group block">
//               <div className={`rounded-3xl overflow-hidden transition-all duration-500 ${
//                 darkMode ? "bg-white/5 border border-white/10" : "bg-white shadow-md border border-gray-100"
//               }`}>
//                 <div className="relative overflow-hidden h-[300px]">
//                   <img src={featured.image_url} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center gap-4 mb-3 text-[10px] font-bold uppercase tracking-widest text-green-500">
//                     <span className="flex items-center gap-1"><FiClock /> {featured.createTime}</span>
//                     <span className="flex items-center gap-1"><FiUser /> {featured.auther || featured.author}</span>
//                   </div>
//                   <h2 className={`text-xl md:text-2xl font-black mb-3 group-hover:text-green-500 transition-colors ${darkMode ? "text-white" : "text-gray-900"}`}>
//                     {featured.title}
//                   </h2>
//                   <p className={`text-sm mb-6 line-clamp-2 opacity-70 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//                     {featured.content}
//                   </p>
//                   <div className="flex items-center gap-2 text-green-500 font-black text-[11px] uppercase tracking-widest">
//                     Read More <FiArrowRight />
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>

//           {/* Top Reads Sidebar */}
//           <aside className="lg:col-span-4">
//             <h3 className={`text-lg font-black mb-6 flex items-center gap-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
//                <FiBookOpen className="text-green-500" />
//                Top Reads
//             </h3>
//             <div className="space-y-4">
//               {topReads.map((r) => (
//                 <Link key={r.id} to={`/singleblog/${r.id}`} className="group flex gap-3 items-center">
//                   <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden">
//                     <img src={r.image_url} alt={r.title} className="w-full h-full object-cover" />
//                   </div>
//                   <div>
//                     <h4 className={`font-bold text-[13px] line-clamp-2 leading-tight group-hover:text-green-500 ${darkMode ? "text-white" : "text-gray-900"}`}>
//                       {r.title}
//                     </h4>
//                     <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mt-1 block">
//                       {r.createTime}
//                     </span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </aside>
//         </div>

//         {/* --- All Articles Title --- */}
//         <div className="mt-20 mb-10 border-b border-gray-500/10 pb-4">
//           <h2 className={`text-xl font-black ${darkMode ? "text-white" : "text-gray-900"}`}>
//             Browse All Articles
//           </h2>
//         </div>

//         {/* --- Blog Grid (Compact Cards) --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
//           {blogs.map((post) => (
//             <Link key={post.id} to={`/singleblog/${post.id}`} className="group">
//               <div className={`h-full rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg ${
//                 darkMode ? "bg-white/5 border border-white/10" : "bg-white border border-gray-100 shadow-sm"
//               }`}>
//                 <div className="h-44 overflow-hidden">
//                   <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                 </div>
//                 <div className="p-5">
//                   <span className="text-[9px] font-black text-green-500 uppercase tracking-widest mb-2 block">{post.createTime}</span>
//                   <h3 className={`text-sm font-bold mb-3 line-clamp-2 group-hover:text-green-500 ${darkMode ? "text-white" : "text-gray-900"}`}>
//                     {post.title}
//                   </h3>
//                   <div className={`pt-4 border-t border-gray-500/10 text-[10px] font-bold uppercase tracking-widest text-gray-500`}>
//                     By <span className="text-green-500">{post.auther || post.author}</span>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Blogs;