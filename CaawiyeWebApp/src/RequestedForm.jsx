import React, { useState } from "react";



function RequestedForm() {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    studentId: "",
    semester: "",
    email: "",
    department: "",
    description: "",
    selectedDate: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [loading, setLoading] = useState(false);

  function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 ml-2 text-white inline-block"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  );
}



  // const handleDateSelect = (date) => {
  //   setForm({ ...form, selectedDate: date });
  // };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName) newErrors.fullName = "Full Name is required";
    if (!form.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!form.studentId) newErrors.studentId = "Student ID is required";
    if (!form.semester) newErrors.semester = "Semester is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.department) newErrors.department = "Department is required";
    if (!form.description) newErrors.description = "Description is required";
    // if (!form.selectedDate) newErrors.selectedDate = "Please select a date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
      createAppointment({
        fullName: form.fullName,
        email: form.email,
        typeofIssue: form.description,
        status: "Requested",
        department: form.department,
        description: form.description,
        semester: form.semester,
        studentId: form.studentId,
        phone: form.phoneNumber,
      });
    }
  };

  const createAppointment = async ({
    fullName,
    email,
    typeofIssue,
    status,
    department,
    description,
    semester,
    studentId,
    phone,
  }) => {
    // Set loading state to true
    setLoading(true); 
    try {
      const req = await fetch("https://qaiysawf.citjust.so/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          email: email,
          type_of_issue: typeofIssue,
          department: department,
          description: description,
          semester: semester,
          student_id: studentId,
          phone: phone,
        }),
      });
      const res = await req.json();
      console.log(res);
      alert("Appointment Added");
      setForm(
        {
    fullName: "",
    phoneNumber: "",
    studentId: "",
    semester: "",
    email: "",
    department: "",
    description: "",
    selectedDate: "",
  }
      )
    } catch (error) {
      alert("Error creating appointment. Please try again.");
      console.error("Error creating appointment:", error);
    } finally {
      setLoading(false); 
    }
  };

  

  return (
    <div className="max-w-5xl mx-auto px-4 mb-20 py-10  text-[var(--text-color)] transition-colors duration-300 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/** Full Name */}
          <div>
            <label className="text-[18px]  font-semibold" htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 border-[var(--card-border)] py-3 px-4 mt-2 rounded-[12px] bg-[var(--bg-color)] text-[var(--text-color)] placeholder:text-[var(--text-secondary)]"
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          {/** Phone Number */}
          <div>
            <label className="text-[18px] font-semibold" htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 border-[var(--card-border)] py-3 px-4 mt-2 rounded-[12px] bg-[var(--bg-color)] text-[var(--text-color)] placeholder:text-[var(--text-secondary)]"
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>

          {/** Student ID */}
          <div>
            <label className="text-[18px] font-semibold" htmlFor="studentId">Student ID</label>
            <input
              type="text"
              name="studentId"
              value={form.studentId}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 border-[var(--card-border)] py-3 px-4 mt-2 rounded-[12px] bg-[var(--bg-color)] text-[var(--text-color)] placeholder:text-[var(--text-secondary)]"
              placeholder="Enter your student ID"
            />
            {errors.studentId && <p className="text-red-500 text-sm">{errors.studentId}</p>}
          </div>

          {/** Semester */}
              <div>
        <label className="text-[18px] font-semibold" htmlFor="semester">
          Semester
        </label>

        <select
          name="semester"
          value={form.semester}
          onChange={handleChange}
          className="w-full border-2 border-gray-300 border-[var(--card-border)] py-3 px-4 mt-2 rounded-[12px] bg-[var(--bg-color)] text-[var(--text-color)] placeholder:text-[var(--text-secondary)]"
        >
          <option value="">Select your semester</option>
          {[1,2,3,4,5,6,7,8].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>

        {errors.semester && (
          <p className="text-red-500 text-sm">{errors.semester}</p>
        )}
      </div>

          {/** Email */}
          <div>
            <label className="text-[18px] font-semibold" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full  border-2 border-gray-300 border-[var(--card-border)] py-3 px-4 mt-2 rounded-[12px] bg-[var(--bg-color)] text-[var(--text-color)] placeholder:text-[var(--text-secondary)]"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/** Department */}
          <div>
            <label className="text-[18px] font-semibold" htmlFor="department">Department</label>
            <select
              
              name="department"
              value={form.department}
              onChange={handleChange}
              className="w-full  border-2 border-gray-300 border-[var(--card-border)] py-3 px-4 mt-2 rounded-[12px] bg-[var(--bg-color)] text-[var(--text-color)] placeholder:text-[var(--text-secondary)]"
              placeholder="Enter your department"
            >
              <option  value="" >Select your Department </option>
              {
                ["Computer Science", "Medicine", "Bussiness"].map( dep=>(
                  <option key={dep} value={dep} >{dep}</option>
                ))
              }
              </select>
            {errors.department && <p className="text-red-500 text-sm">{errors.department}</p>}
          </div>

          {/** Description & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-2">
            {/** Description */}
            <div>
              <label className="text-[18px] font-semibold" htmlFor="description">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full  border-2 border-gray-300 border-[var(--card-border)] py-3 px-4 mt-2 rounded-[12px] h-[180px] bg-[var(--bg-color)] text-[var(--text-color)] placeholder:text-[var(--text-secondary)]"
                placeholder="Describe the problem"
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

            {/** Select Date */}
            {/* <div>
              <label className="text-[18px] font-semibold block mb-2">Select Date</label>
              <div className="flex flex-wrap gap-3">
                {Array.from({ length: 16 }, (_, idx) => {
                  const date = `Jul ${20 + idx}, 2025`;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleDateSelect(date)}
                      className={` border-2 border-gray-300 border-[var(--card-border)] rounded-lg w-[84px] h-[34px] text-[11px] p-[8px] text-center
                        ${form.selectedDate === date
                          ? "bg-[rgba(143,91,252,1)] text-white"
                          : "text-[var(--text-color)] hover:bg-[rgba(143,91,252,0.2)]"
                        }`}
                    >
                      {date}
                    </button>
                  );
                })}
              </div>
              {errors.selectedDate && <p className="text-red-500 text-sm mt-2">{errors.selectedDate}</p>}
            </div> */}
          </div>
        </div>

        {/** Submit */}
        <div className="mt-10">
          <button
            type="submit"
            disabled={loading}
            className={`w-full md:w-[448px] bg-[var(--primary-btn-bg)] text-[var(--primary-btn-text)] h-[60px] font-bold text-[20px] rounded-[12px] flex justify-center items-center ${
              loading ? "opacity-80 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                Submitting
                <Spinner />
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RequestedForm;