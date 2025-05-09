import React from "react";
import { createPortal } from "react-dom";

const SearchModal = ({isModalOpen,setIsModalOpen}) => {
  if(!isModalOpen) return null; // If modal is not open, return null

return createPortal(
    <div className="min-h-screen fixed z-[9999] inset-0 flex items-center justify-center bg-primary overflow-hidden px-4">
      {/* main  Card  created using blur effect*/}
      <div className="relative bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl px-2 sm:px-10 py-12 max-w-xl w-full transition-all duration-300">
        {/* Header */}
        <h2 className="text-3xl w-full text-center sm:text-left font-bold text-white mb-6 tracking-wide">
          Search <span className="text-yellow-300">—</span>
        </h2>

        {/* Search Input */} 
        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-inner">
          <input
            type="text"
            placeholder="Type to search..."
            className="flex-grow pl-3 sm:px-4 text-gray-800 text-base outline-none rounded-l-full"
          />
          <button className="bg-yellow-300 px-3 cursor-pointer  text-[#2f4f4f] sm:px-6 py-3 font-semibold hover:bg-yellow-400 transition duration-300">
            Go
          </button>
        </div>

        {/* Close Button */}
        <div onClick={()=>setIsModalOpen(false)} className="mt-6 text-center">
          <button className="text-white cursor-pointer text-sm tracking-wide px-4 py-2 rounded-full bg-[#264040] hover:bg-[#1e3232] transition">
            ✕ Close
          </button>
        </div>
      </div>

      {/* certain design effect */}
      <div className="absolute w-80 h-80 bg-yellow-300 opacity-20 rounded-full -bottom-20 -right-20 blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute w-60 h-60 bg-white opacity-10 rounded-full -bottom-10 -left-10 blur-2xl pointer-events-none animate-spin-slow"></div>
    </div>
  ,document.getElementById("portal"));
};

export default SearchModal;
