import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <>
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="flex justify-center gap-4">
          <a href="#" className="text-xl hover:text-blue-400 transition-all duration-[0.3s]"><FaFacebook /></a>
          <a href="#" className="text-xl hover:text-blue-400 transition-all duration-[0.3s]"><FaXTwitter /></a>
          <a href="#" className="text-xl hover:text-blue-400 transition-all duration-[0.3s]"><FaLinkedin /></a>
          <a href="mailto:support@taskflow.com" className="text-xl hover:text-blue-400 transition-all duration-[0.3s]"><MdEmail /></a>
        </div>

        <p className="mt-4 text-gray-400">&copy; 2025 TaskFlow. All rights reserved.</p>
        </footer>
    </>
  )
}

export default Footer