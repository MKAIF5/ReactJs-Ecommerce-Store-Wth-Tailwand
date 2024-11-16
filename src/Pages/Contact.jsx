import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import contact from "./img/contact1.jpg"

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
      <>
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-start space-x-8">
        <div className="w-1/2 bg-white p-6 shadow-xl rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">We'd love to hear from you! Please reach out with any questions or feedback.</p>

          <div className="mt-6 flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-400">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-600">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        <div className="w-1/2">
          <img src={contact} alt="Contact" className="w-full rounded-lg shadow-xl mb-6" />
          <form onSubmit={handleSubmit} className="bg-white p-6 shadow-xl rounded-lg">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full p-3 bg-[#db4444] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;