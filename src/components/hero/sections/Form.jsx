import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const templateParams = {
        from_name: data.name, // Sender's name
        to_name: "Asset Advisors Bangladesh", // Recipient's name
        email: data.email, // Sender's email
        subject: data.subject, // Subject
        message: data.message, // Message
        phone: data.phone, // Phone (if needed)
      };

      const response = await emailjs.send(
        "service_k7u2pvo", // Your EmailJS service ID
        "template_sgsc5sg", // Your EmailJS template ID
        templateParams, // Data to be sent
        "6Na3IjMksVn9oDDaO" // Your EmailJS user ID
      );

      console.log("Form submitted successfully", response);
      toast.success("Your response has been submitted successfully!"); // Success message
      reset(); // Reset form fields after submission
    } catch (error) {
      console.error("Error in form submission", error);
      toast.error("There was an error submitting the form. Please try again."); // Error message
    }
  };

  return (
    <div className="text-black flex justify-center items-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-black">Contact</h2>
          <h3 className="text-4xl font-semibold text-black">
            We Want to Hear from You
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <p className="text-black">
                House X, Road Y, Dhaka-1212, Bangladesh
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <i className="fas fa-envelope"></i>
              </div>
              <p className="text-black">info@assetadvbd.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <i className="fas fa-phone-alt"></i>
              </div>
              <p className="text-black">+88000000000</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white text-black p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-3 border border-gray-300 rounded"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-3 border border-gray-300 rounded"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Phone"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "Invalid phone number",
                  },
                })}
                className="w-full p-3 border border-gray-300 rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
                className="w-full p-3 border border-gray-300 rounded"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                placeholder="Write your message here"
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 border border-gray-300 rounded"
                rows="4"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer */}
    </div>
  );
};

export default Contact;
