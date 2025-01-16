import React, { useState } from "react";

const QaPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    knowAbout: "",
    expertise: "",
    difficulties: "",
    publishResearch: "",
    needHelp: "",
    secureData: "",
    collaborate: "",
    importantTools: "",
    socializingPreference: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex p-6 items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-400 mt-20 p-8 rounded-2xl shadow-md w-full max-w-2xl"
      >
        <h1 className="text-2xl font-bold mb-6">Questions & Answers</h1>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border bg-cyan-50 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border bg-cyan-50 rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* How do you know about us? */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="knowAbout">
            How do you know about online research-related websites?
          </label>
          <textarea
            id="knowAbout"
            name="knowAbout"
            value={formData.knowAbout}
            onChange={handleChange}
            className="w-full p-2 border bg-cyan-50 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Areas of Expertise */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="expertise">
            What are your areas of expertise?
          </label>
          <textarea
            id="expertise"
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            className="w-full p-2 border bg-cyan-50 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Difficulties */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="difficulties">
            What difficulty have you faced so far?
          </label>
          <select
            id="difficulties"
            name="difficulties"
            value={formData.difficulties}
            onChange={handleChange}
            className="w-full p-2 border bg-cyan-50 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Select an option</option>
            <option value="Publication Problem">
              Problem leading to Publication the Research paper
            </option>
            <option value="Institute Approach Problem">
              Problem leading to approach the right institute
            </option>
            <option value="Financial Problems">Financial Problems</option>
            <option value="Legal Problems">Legal Problems</option>
            <option value="NA">NA</option>
          </select>
        </div>

        {/* Would you like to publish? */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Would you like to publish/share your research on an online platform?
          </label>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                name="publishResearch"
                value="Yes"
                checked={formData.publishResearch === "Yes"}
                onChange={handleChange}
                className="mr-2 bg-cyan-50"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="publishResearch"
                value="No"
                checked={formData.publishResearch === "No"}
                onChange={handleChange}
                className="mr-2 bg-cyan-50"
              />
              No
            </label>
          </div>
        </div>

        {/* Need Help */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Would you like, if someone helps you?
          </label>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                name="needHelp"
                value="Yes"
                checked={formData.needHelp === "Yes"}
                onChange={handleChange}
                className="mr-2 bg-cyan-50"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="needHelp"
                value="No"
                checked={formData.needHelp === "No"}
                onChange={handleChange}
                className="mr-2 bg-cyan-50"
              />
              No
            </label>
          </div>
        </div>

        {/* Data Security */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            How would you like to secure your data?
          </label>
          <select
            name="secureData"
            value={formData.secureData}
            onChange={handleChange}
            className="w-full p-2 border bg-cyan-50 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Select an option</option>
            <option value="Digi Locker">On Digi Locker</option>
            <option value="Platform Server">On Platform Server</option>
            <option value="Third Party Server">On Third Party Server</option>
            <option value="Secured SSD Server">
              Our SECURED SSD SERVER (under development)
            </option>
          </select>
        </div>

        {/* Collaborate */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Would you like to discuss/share/collaborate over similar issues/works with fellow Researchers?
          </label>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                name="collaborate"
                value="Yes"
                checked={formData.collaborate === "Yes"}
                onChange={handleChange}
                className="mr-2 bg-cyan-50"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="collaborate"
                value="No"
                checked={formData.collaborate === "No"}
                onChange={handleChange}
                className="mr-2 bg-cyan-50"
              />
              No
            </label>
          </div>
        </div>

        {/* Important Tools */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="importantTools">
            Which tools are most important for you on a Research Platform?
          </label>
          <textarea
            id="importantTools"
            name="importantTools"
            value={formData.importantTools}
            onChange={handleChange}
            className="w-full p-2  bg-cyan-50 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Socializing Tools */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Would you like to have Socializing tools on Research Platform or should it be independent?
          </label>
          <textarea
            name="socializingPreference"
            value={formData.socializingPreference}
            onChange={handleChange}
            className="w-full p-2 bg-cyan-50 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QaPage;
