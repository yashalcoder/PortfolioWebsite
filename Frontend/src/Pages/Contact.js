import React, { useState } from "react";
import Info from "../Components/Info";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          budget: ""
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred");
    }
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 mb-10 mx-4 md:mx-12 lg:mx-24'>
      <div className='col-span-1 h-fit lg:sticky top-0 rounded-xl bg-white text-black dark:bg-black pb-4 dark:text-white '>
        <Info />
      </div>
      <div className='lg:col-span-2 rounded-lg p-8 h-full overflow-y-auto bg-white text-black dark:bg-black dark:text-white'>
        <h1 className="text-3xl font-bold">
          Let's 👋 <span className="text-blue-900">Work</span> Together
        </h1>
        <div className="bg-gray-200  dark:bg-gray-900 p-14 mt-6 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col  md:flex-row gap-4">
              <input name="name" onChange={handleChange} value={formData.name} placeholder="Name" className="w-full p-2 rounded dark:bg-black text-white border" />
              <input name="email" onChange={handleChange} value={formData.email} placeholder="Email" className="w-full p-2 rounded dark:bg-black text-white border" />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input name="subject" onChange={handleChange} value={formData.subject} placeholder="Subject" className="w-full p-2 rounded dark:bg-black text-white border" />
              <select name="budget" onChange={handleChange} value={formData.budget} className="w-full p-2 rounded dark:bg-black text-gray-600  border">
                <option value="">Select budget...</option>
                <option>$100 - $500</option>
                <option>$500 - $1000</option>
              </select>
            </div>
            <textarea name="message" onChange={handleChange} value={formData.message} placeholder="Type details about your inquiry" rows="5" className="w-full p-2 rounded dark:bg-black text-white border" />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Send Message ↘
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
