import React from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare, FaDiscord } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-white p-8 flex flex-col">
      <div className="flex flex-col lg:flex-row lg:justify-between mb-4">
        <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
          <h1 className="text-3xl font-semibold mb-2">Briefify</h1>
          <p className="text-center lg:text-left max-w-2xl">
            Briefify is your go-to solution for effortless text summarization. Our application leverages the power of AI to provide concise and accurate summaries, helping you save time and understand the core ideas of any lengthy text.
          </p>
        </div>
        <div className="flex flex-col lg:flex-col items-center lg:items-start mt-10">
          <div className="flex flex-row lg:flex-row items-start space-x-4  lg:space-y-0 lg:space-x-6 mb-4 lg:mb-5">
            <a href="https://github.com/aryyan0701" className="text-white text-3xl hover:text-blue-400">
              <FaGithubSquare />
            </a>
            <a href="https://twitter.com/aaryyan_" className="text-white text-3xl hover:text-blue-400">
              <FaTwitterSquare />
            </a>
            <a href="https://linkedin.com/in/aryan-kadam-568083204" className="text-white text-3xl hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/_aaaryaan__" className="text-white text-3xl hover:text-blue-400">
              <FaInstagramSquare />
            </a>
            <a href="https://discord.com" className="text-white text-3xl hover:text-blue-400">
              <FaDiscord />
            </a>
          </div>
          <div className="flex flex-col lg:flex-col items-center lg:items-center space-y-0 lg:space-y-2 lg:space-x-2 mt-4">
            <span className='text-xl' >Source code available on</span>
            <a href="https://github.com/aryyan0701/text-summarization" className="text-white text-xl hover:text-blue-400 inline">ayyan_0701
              <FaGithubSquare className='inline align-text-center ml-1 text-2xl'/>
            </a>
          </div>
        </div>
        <div className="hidden md:flex flex-col lg:flex-col items-center lg:items-start"></div>
      </div>
      <div className="flex justify-center mt-4">
        <p>© 2024 Briefify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
