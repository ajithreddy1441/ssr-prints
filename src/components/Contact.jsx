import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { ref, set } from "firebase/database";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactRef = ref(db, 'contacts/' + new Date().getTime());

    try {
      await set(contactRef, formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (e) {
      console.error("Error adding data: ", e);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 underline">Contact Us</h1>
          <p className="text-gray-400 text-xl">We'd love to hear from you! Send us a message using the form below.</p>
        </div>
        <form className="bg-gray-200 p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full p-3 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-gray-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
