import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0bbt6n9", "template_k8e6vmc", form.current, {
        publicKey: "iC72jmdx8Q4tmV7tE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="bg-gradient-to-b from-black via-red-700 to-black text-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-10 uppercase">
        Contact Me
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Contact Form Section */}
        <div className="bg-black/60 p-8 rounded-lg shadow-lg flex-1">
          <h3 className="text-2xl font-semibold mb-6 underline">
            Send Me a Message
          </h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-lg">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-lg">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-lg">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                rows="5"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-bold transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="bg-black/60 p-6 rounded-lg shadow-lg flex-1">
          <h3 className="sm:text-2xl font-semibold mb-6 underline">
            Contact Information
          </h3>
          <p className="text-lg mb-4">
            <span className="font-bold text-red-500">Location:</span> Rongpur,
            Bangladesh
          </p>
          <p className="text-lg break-words mb-4">
            <span className="font-bold sm:text-sm break-words text-red-500">
              Email:
            </span>{" "}
            munnaislammunna49@gmail.com
          </p>
          <p className="text-lg break-words mb-4">
            <span className="font-bold text-red-500">Phone:</span>{" "}
            +8801722813183
          </p>
          <p className="text-lg break-words mb-4">
            <span className="font-bold text-red-500">WhatsApp:</span>{" "}
            +8801602935655
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
