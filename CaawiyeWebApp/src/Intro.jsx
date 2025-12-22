function Intro() {
  return (
    <>
      <div
        style={{ background: "linear-gradient(to bottom, #fff 10%, #D5DBFF80 100%)" }}
        className="w-full py-16 mt-24 rounded-[30px] flex justify-center px-4 md:px-8"
      >
        <div className="text-center">
          {/* Main Title Line 1 */}
          <h1 className="text-[32px] md:text-[50px] lg:text-[70px] text-custom_intro font-semibold leading-tight">
            Solve your problems blog posts
          </h1>

          {/* Main Title Line 2 */}
          <h1 className="text-[32px] md:text-[50px] lg:text-[70px] text-custom_intro font-semibold mt-2">
            with{" "}
            <span className="bg-gradient-to-br from-[#788BFF] to-[#46B453] px-4 py-1 text-white rounded-[20px] mt-8">
                    Caawiye
                  </span>
          </h1>

          {/* Description Line 1 */}
          <p className="text-[14px] md:text-[16px] text-custom_intro mt-4 md:mt-6">
            Schedule booking now to help you easily and save time with us,
            <br className="hidden md:block" />
            as Caawiye team we
          </p>

          {/* Description Line 2 */}
          <p className="text-[14px] md:text-[16px] text-custom_intro">
            are Jamhuriya University of Science and Technology members
          </p>
        </div>
      </div>
    </>
  );
}

export default Intro;
