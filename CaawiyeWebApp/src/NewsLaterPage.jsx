import Icon11 from "./assets/Icon11.png";
import ArrowButton from "./assets/ArrowButton.png";
import { useSelector } from "react-redux";

const NewsLetterPage = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 w-full ">
      {/* Background Box */}
      <div
        style={{
          borderBottom: "2px solid var(--card-border)",
          borderLeft: "2px solid var(--card-border)",
          borderRight: "2px solid var(--card-border)",
        }}
        className="rounded-[20px] w-full max-w-[1140px] h-[350px] absolute top-[140px] -z-10 hidden md:block"
      ></div>

      {/* Main Content */}
      <div className="flex flex-col mt-10 items-center text-center z-10">
        <img src={Icon11} alt="logo" className="w-[50px] sm:w-[70px]" />

        <p
          className="font-bold mt-6 text-sm sm:text-base"
          style={{ color: "var(--primary-btn-bg)" }}
        >
          NEWS LETTER
        </p>

        <h1
          style={{ color: "var(--text-color)" }}
          className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl px-4"
        >
          Join our newsletter today
          <br />
          <span className="text-center">Get instant updates</span>
        </h1>
      </div>

      {/* Form */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 z-10 w-full max-w-md sm:max-w-xl">
        {/* Input */}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          className={`w-full sm:w-[320px] h-[45px] rounded-full px-4 text-sm focus:outline-none transition-all duration-300 ${
            darkMode
              ? "border border-white bg-transparent text-white placeholder-gray-300"
              : "border border-[var(--secondary-btn-border)] bg-transparent text-black placeholder-gray-500"
          }`}
        />

        {/* Button */}
        <button
          style={{
            border: "1.5px solid var(--primary-btn-bg)",
            background: "var(--primary-btn-bg)",
            color: "var(--primary-btn-text)",
          }}
          className="h-[45px] flex items-center gap-2 font-semibold text-xs px-6 rounded-full"
        >
          Subscribe
          <img src={ArrowButton} alt="arrow" className="w-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetterPage;
