import { useSelector } from "react-redux";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./LandingPage";
import TestimonialPage from "./TestimonialPage";
import Hero from "./Hero";
import About from "./About";
import Blogs from "./Blogs";
import SingleBlog from "./SingleBlog";
import Footer from "./Footer";
import Appointment from "./Appointment";
import SingleAppoitment from "./SingleAppoitment";
import SolutionPage from "./SolutionPage";
import ContactUs from "./ContactUs";
import NotFound from "./NotFound";
import Layout from "./Layout"; // <-- IMPORTANT

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // <-- Wrapper router
    children: [
      { index: true, element: <LandingPage /> },
      { path: "test", element: <TestimonialPage /> },
      { path: "hero", element: <Hero /> },
      { path: "about", element: <About /> },
      { path: "blogs", element: <Blogs /> },
      { path: "singleblog/:id", element: <SingleBlog /> },
      { path: "footer", element: <Footer /> },
      { path: "appointment", element: <Appointment /> },
      { path: "solution", element: <SolutionPage /> },
      { path: "singleApp/:id", element: <SingleAppoitment /> },
      { path: "contacts", element: <ContactUs /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return <RouterProvider router={router} />;
}

export default App;
