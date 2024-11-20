import React from "react";

const ContactUs = () => {
  return (
    <section className="py-16 px-6 sm:px-8 md:px-16 bg-gray-100">
      <div className="max-w-screen-md mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* Title */}
        <div className="text-center mb-8 animate__animated animate__fadeInUp">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Fill out the form below, and we'll get
            back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-800 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
