'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log("hey");
      
      const response = await fetch('/api/contact.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again');
    }
  };

  return (
    <div className="mt-8 relative flex items-center justify-center bg-transparent z-50">
      <div className="bg-gray-900 bg-opacity-20 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Me</h2>
        <form className="space-y-6" >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={4}
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/shubham-kumar-58680a215" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl hover:text-blue-500" />
              </Link>
              <Link href="https://github.com/Shubhamcypher" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-white text-3xl hover:text-green-500" />
              </Link>
              <Link href="mailto:shubhamdevu023@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-3xl hover:text-red-500" />
              </Link>
            </div>
          </div>
        </form>
        {status && <p className="mt-4 text-center text-red-600 font-semibold text-xl">{status}</p>}
      </div>
    </div>
  );
};

export default ContactMe;
