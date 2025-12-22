import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "./Nav";
import image2 from "./assets/Image2.png";
import Footer from "./Footer";
import { ImSpinner9 } from "react-icons/im";
import { useSelector } from "react-redux";




const dummyBlogs = [
  {
    id: 1,
    title: "Level Up Your Leadership: 5 Essential Habits for Building High Performing Teams",
    auther: "Johnson Doe",
    createTime: "21 OCT 2025",
    content:
      "This is the featured article content. Our team has been working tirelessly toward shared goals. Full article text goes here — you can store long content and show it using whitespace-pre-line to preserve line breaks.",
    image: image2,
  },
  {
    id: 2,
    title: "Master Tech Challenges: Smart Solutions for Everyday Problems",
    auther: "Johnson Doe",
    createTime: "21 OCT 2025",
    content: "Content for blog 2...",
    image: image2,
  },
  {
    id: 3,
    title: "Fixing Computers: Tools Every Developer Should Use",
    auther: "Johnson Doe",
    createTime: "21 OCT 2025",
    content: "Content for blog 3...",
    image: image2,
  },
];

const SingleBlog = () => {
  const { id } = useParams();
  
  const darkMode = useSelector((state) => state.theme.darkMode);

  const [blog, setBlog] = useState();
   
  // useEffect(() => {
  //   const selected = dummyBlogs.find((b) => b.id === +id || b.id === id);
  //   setBlog(selected || dummyBlogs[0]);
  // }, [id]);
 
  useEffect(()=>{
 try {
  const fetchBlogs = async () => {
  const blogs =  await fetch(`https://qaiysawf.citjust.so/api/blog`);
  const data = await blogs.json();
  const foundBlog = Array.isArray(data)
        ? data.find((b) => String(b.id) === String(id))
        : data;
console.log( foundBlog);

      setBlog(foundBlog);
       console.log('image url is',blog);
  
  };
  fetchBlogs();
 
 } catch (error) {
    console.error("Error in LandingPage useEffect:", error);
 }
  },[id])
  if (!blog) {
    return (
      <><Nav />
        
        <div className={`text-center flex items-center justify-center pt-28 ${darkMode ? "text-gray-300" : "text-[#293372]"}`}>
          <ImSpinner9
          className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"
          
          />
        </div>
      </>
    );
  }

  return (
    <div className={darkMode ? "dark" : ""} style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}>
      <Nav />
      <div className="container mx-auto px-6 lg:px-20 mb-20">
        <div className="pt-48 mb-8">
          <Link
            to="/blogs"
            className="text-sm py-2 px-4 rounded-2xl font-bold"
            style={{
              backgroundColor: darkMode ? "#3CB44A" : "#3CB44A",
              color: "#fff",
            }}
          >
            ← Back to blogs
          </Link>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold" style={{ color: "var(--text-color)" }}>
          {blog.title}
        </h1>

        <div className="mt-4 flex items-center gap-3 text-sm">
          <span className={darkMode ? "text-gray-400" : "text-gray-500"}>{blog.createTime}</span>
          <div className="w-1 h-1 rounded-full bg-gray-300"></div>
          <span style={{ color: darkMode ? "var(--primary-btn-bg)" : "var(--text-color)" }}>
            Posted by {blog.author}
          </span>
        </div>

        <div className="mt-8">
          <img
            src={blog.image_url}
            alt={blog.title}
            className="w-full max-h-[650px] object-cover rounded-2xl"
            style={{ borderColor: darkMode ? "var(--card-border)" : "transparent" }}
          />
        </div>

        <div className="mt-8 text-lg leading-relaxed whitespace-pre-line" style={{ color: "var(--text-color)" }}>
          {blog.content}
        </div>

        
       
       
      </div>
         <Footer />
    </div>
  );
};

export default SingleBlog;
