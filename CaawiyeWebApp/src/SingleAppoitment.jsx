import Nav from "./Nav";
import SVG from "./assets/SVG.png";
import { useEffect, useState } from "react";

import Footer from "./Footer";

import { CiLocationArrow1 } from "react-icons/ci";
import {
  FaRegPaperPlane,
  FaCheckCircle,
  FaClipboardCheck,
  FaTruck,
  FaClock,
} from "react-icons/fa";
import { useSelector } from "react-redux";

function SingleAppoitment({ appointment, onBack }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  
  const [activeIndex, setActiveIndex] = useState(0);

  console.log("appointment prop:", appointment);

  const handleOpen = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const list = [
    { status: "Requested", icon: <FaRegPaperPlane size={24} />, order: 1 },
    { status: "Accepted", icon: <FaCheckCircle size={24} />, order: 2 },
    { status: "In Progress", icon: <FaClock size={24} />, order: 3 },
    { status: "Completed", icon: <FaClipboardCheck size={24} />, order: 4 },
    { status: "Delivered", icon: <FaTruck size={24} />, order: 5 },
  ];

  const statusOrderMap = list.reduce((acc, item) => {
    acc[item.status] = item.order;
    return acc;
  }, {});

  if (!appointment) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h1 className="text-2xl font-bold mb-4">No Appointment Selected</h1>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-green-600 text-white rounded hover:opacity-80"
        >
          ← Back
        </button>
      </div>
    );
  }

  const currentStatusOrder = statusOrderMap[appointment.status] || 0;
  const isOpen = activeIndex === 0;

  return (
    <>
      <Nav />
      <div
        className={`min-h-screen pt-[200px] transition-colors ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-[1400px] mx-auto p-6">
          {/* Back Button */}
          <button
            onClick={onBack}
            className={`flex items-center text-[13px] py-[8px] px-[17px] mb-6 ${
              darkMode? "text-gray-300" : "text-custom_fill"
            }`}
          >
            <img src={SVG} alt="arrow" />
            <span className="ml-2">Back to Appointments</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT SECTION */}
            <div>
              <h1 className="text-[25px] font-bold mb-6">
                Appointment Details
              </h1>

              <div
                onClick={() => handleOpen(0)}
                style={{ backgroundColor: "rgba(70, 180, 83, 0.2)" }}
                className="flex justify-between items-center p-4 rounded-lg outline max-w-[400px] outline-green-500/50 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div>
                  <p className="font-medium text-lg">
                    Name: {appointment.full_name}
                  </p>
                  <p
                    className={`text-[14px] ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Appointment Code: #{appointment.code_generated}
                  </p>
                </div>
                <div
                  style={{ backgroundColor: "rgba(70, 180, 83, 0.6)" }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md"
                >
                  <CiLocationArrow1
                    className={`${
                      isOpen ? "rotate-90" : "rotate-45"
                    } transition-transform duration-500 w-6 h-6`}
                  />
                </div>
              </div>

              {isOpen && (
                <div className="pl-6 border-l-2 border-green-500/50 ml-4 pt-2 max-w-[400px]">
                  <div className="mt-2">
                    <p className="font-medium">
                      Student ID: {appointment.student_id}
                    </p>
                    <p
                      className={`text-[14px] ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Semester: {appointment.semester}
                    </p>
                  </div>

                  <div className="mt-2">
                    <p className="font-medium">
                      Date Created:{" "}
                      {new Date(appointment.created_at).toLocaleString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <p
                      className={`text-[14px] ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Service: {appointment.type_of_issue}
                    </p>
                  </div>

                  <div className="mt-2">
                    <p className="font-medium">Phone</p>
                    <p
                      className={`text-[14px] ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {appointment.phone}
                    </p>
                  </div>
                </div>
              )}

              <div className="max-w-[400px] mt-4 p-2 border border-gray-300 dark:border-gray-700 rounded-lg">
                <p className="font-medium">Current Appointment Status</p>
                <p
                  className={`text-[14px] font-bold ${
                    ["Accepted", "Completed", "Delivered"].includes(
                      appointment.status
                    )
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  Status: {appointment.status}
                </p>
              </div>
            </div>

            {/* RIGHT SECTION - STATUS TRACKER */}
            <div className="lg:ml-[100px]">
              <h1 className="font-bold text-[25px] mb-2">
                Appointment Status
              </h1>
              <p
                className={`text-[15px] mb-4 ${
                  darkMode ? "text-gray-400" : "text-custom_calender"
                }`}
              >
                Track the progress of your computer repair
              </p>

              {list.map((item, i) => {
                const itemOrder = item.order;
                const isCompleted = itemOrder < currentStatusOrder;
                const isCurrent = itemOrder === currentStatusOrder;

                const bgColor = isCurrent
                  ? "bg-yellow-400/20"
                  : isCompleted
                  ? "bg-green-400/20"
                  : "bg-gray-400/20";

                const outlineColor = isCurrent
                  ? "outline-yellow-500"
                  : isCompleted
                  ? "outline-green-500"
                  : "outline-gray-500";

                const iconBgColor = isCurrent
                  ? "bg-yellow-500"
                  : isCompleted
                  ? "bg-green-500"
                  : "bg-gray-500";

                return (
                  <div key={i}>
                    <div
                      className={`${bgColor} flex items-center justify-between rounded p-3 outline outline-1 ${outlineColor} mt-4 transition-all duration-300`}
                    >
                      <span className="font-medium">{item.status}</span>
                      <span
                        className={`${iconBgColor} p-2 rounded text-white flex items-center justify-center shadow-md`}
                      >
                        {item.icon}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        
        <Footer />
      </div>
    </>
  );
}

export default SingleAppoitment;
