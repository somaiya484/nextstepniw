"use client";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const formRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    subject: "",
    profile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, country, subject, message } = formData;

    if (!name || !email || !country || !subject || !message) {
      setErrorMessage("❌ Please fill out all required fields.");
      return;
    }

    setErrorMessage("");

    emailjs
      .sendForm(
        "service_o4lkdpg",
        "template_d5fc8l1",
        formRef.current,
        "DDJS3_KVCpFg-J6Nm"
      )
      .then(() => {
        setShowPopup(true);
        setFormData({
          name: "",
          email: "",
          country: "",
          subject: "",
          profile: "",
          message: "",
        });
        formRef.current.reset();
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch(() => {
        alert("❌ Failed to send. Please try again!");
      });
  };

  return (
    <section className="relative py-16 px-1 lg:px-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-10 h-[60rem] rounded-xl blur-3xl bg-transparent"></div>
      </div>

      <div className="relative max-w-3xl mx-auto shadow-2xl rounded-lg p-10 md:p-16 border border-gray-100 w-full">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          📩 Submit Your Query
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          We’re happy to assist you. Please fill out the form below with your query, and our team will get back to you as soon as possible.
        </p>

        {errorMessage && (
          <div className="text-red-500 text-center mb-6 font-semibold">
            {errorMessage}
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="p-4 rounded-xl border border-gray-300 bg-gray-50 shadow-inner shadow-gray-300 focus:outline-none"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="p-4 rounded-xl border border-gray-300 bg-gray-50 shadow-inner shadow-gray-300 focus:outline-none"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="USA, India, etc."
              className="p-4 rounded-xl border border-gray-300 bg-gray-50 shadow-inner shadow-gray-300 focus:outline-none"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. NIW Eligibility"
              className="p-4 rounded-xl border border-gray-300 bg-gray-50 shadow-inner shadow-gray-300 focus:outline-none"
            />
          </div>

          {/* LinkedIn / Google Scholar Profile (Optional) */}
          <div className="flex flex-col sm:col-span-2">
            <label className="text-sm font-semibold text-gray-600 mb-2">
              LinkedIn / Google Scholar Profile <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="url"
              name="profile"
              value={formData.profile}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/username"
              className="p-4 rounded-xl border border-gray-300 bg-gray-50 shadow-inner shadow-gray-300 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col sm:col-span-2">
            <label className="text-sm font-semibold text-gray-600 mb-2">
              Your Message / Query <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Please describe your question or concern in detail."
              className="p-4 rounded-xl border border-gray-300 bg-gray-50 shadow-inner shadow-gray-300 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg font-semibold rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Submit Query
            </button>
          </div>
        </form>

        {/* Popup */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed top-6 right-6 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-50"
            >
              🎉 Your message was submitted successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactForm;
