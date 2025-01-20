import React, { useState } from "react";
import toast from "react-hot-toast";
const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    contactNumber: "",
    professionalEmail: "",
    jobRole: "",
    designation: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Registration successful!");
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="flex justify-center items-center  gap-5 justify-items-center  min-h-screen bg-gray-100">

      <div className="bg-cyan-200  rounded-2xl p-6 items-center  w-[40vw] h-[40vh]">
          <p className=" font-serif text-center">Join us in the modern era of technology, where we are harnessing the power of technology to help you 
            with all the useful activities of your daily routine, work, and knowledge enhancement.
            Our platform will help you grow in many ways, enabling you to interact with people of similar interests 
            and find investors for your ideas. For those with the resources but not the time to find authentic and
            interesting ideas, our platform is the perfect solution. Explore the world of Thinkers and use your 
            own to create wealth and friendships.
        </p>
      </div>
      <form
        className="bg-gray-300  p-6 my-24 rounded-lg shadow-md w-[60vw] max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Registration Form</h2>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
            required
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>
        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* Contact Number */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="contactNumber"
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your contact number"
            required
          />
        </div>
        {/* Professional Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="professionalEmail"
          >
            Professional Email
          </label>
          <input
            type="email"
            id="professionalEmail"
            name="professionalEmail"
            value={formData.professionalEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your professional email"
            required
          />
        </div>
        {/* Job Role */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="jobRole"
          >
            Job Role
          </label>
          <input
            type="text"
            id="jobRole"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your job role"
            required
          />
        </div>
        {/* Designation */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="designation"
          >
            Designation
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your designation"
            required
          />
        </div>
        {/* Comments or Suggestions */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="comments"
          >
            Any Comments or Suggestions?
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your comments or suggestions"
            rows="3"
          ></textarea>
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;

