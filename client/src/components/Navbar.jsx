import React, { useState } from "react";
import Modal from "react-modal";
import { FaQuestion } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="w-full h-[4rem] bg-zinc-900 text-white flex p-3 justify-between">
        <h1 className="flex items-center text-3xl font-semibold text-white">
          Briefify
        </h1>
        <h2
          className="flex items-center text-3xl font-semibold text-white mr-2 cursor-pointer"
          onClick={openModal}
        >
          <span className="hidden md:inline">About</span> <FaQuestion className="text-2xl ml-1" />
        </h2>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="About Modal"
        className={`modal ${modalIsOpen ? 'modal-open' : 'modal-close'}`}
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="absolute top-2 right-4 text-3xl text-white">&times;</button>
        <div className="flex flex-col text-start justify-center bg-zinc-900 text-neutral-400 p-6">
          <h1 className="text-4xl font-bold text-white  mb-6">About Briefify</h1>
          
          <p className="text-xl mb-4 text-white text-start">
            Welcome to Briefify, your go-to solution for effortless text summarization. Our application leverages the power of AI to provide concise and accurate summaries, helping you save time and understand the core ideas of any lengthy text.
          </p>
          
          <h2 className="text-3xl font-semibold text-white mb-4">Features</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>AI-Powered Summarization: Our application uses advanced AI technology to generate precise summaries.</li>
            <li>Bullet Point Summaries: Get your summaries in easy-to-read bullet points.</li>
            <li>Responsive Design: Accessible on any device, whether you’re using a desktop, tablet, or smartphone.</li>
            <li>User-Friendly Interface: Simple and intuitive design for a seamless user experience.</li>
            <li>Fast and Efficient: Get your summaries in seconds, no matter the length of the text.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-white mb-4">How to Use</h2>
          <ol className="list-decimal pl-6 mb-6">
            <li>Enter Your Text: Paste or type the text you want to summarize into the input box.</li>
            <li>Click Summarize: Press the "Summarize" button to generate the summary. If it's a lengthy text, please be patient as our AI works on summarizing it for you.</li>
            <li>View Your Summary: The summarized text will be displayed below the input box in bullet point format. If you clear the input text, the summary will disappear to keep your workspace clean.</li>
            <li>Enjoy: Use the summary for your studies, work, or personal use. Repeat the process as needed with different texts.</li>
          </ol>

          <h2 className="text-3xl font-semibold text-white mb-4">Connect with Me</h2>
          <div className="flex flex-row">
            <span className="text-3xl mr-1"><a href="https://github.com/aryyan0701" className="text-blue-400 hover:underline"><FaGithubSquare /></a></span>
            <span className="text-3xl mr-1"><a href="https://twitter.com/aaryyan_" className="text-blue-400 hover:underline"><FaSquareXTwitter /></a></span>
            <span className="text-3xl mr-1"><a href="https://linkedin.com/in/aryan-kadam-568083204x`" className="text-blue-400 hover:underline"><FaLinkedin /></a></span>
            <span className="text-3xl mr-1"><a href="https://instagram.com/_aaaryaan__" className="text-blue-400 hover:underline"><FaInstagramSquare /></a></span>
            <span className="text-3xl"><a href="https://facebook.com/TextSummarizer" className="text-blue-400 hover:underline"><IoLogoDiscord /></a></span>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
