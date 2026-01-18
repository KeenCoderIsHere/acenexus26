'use client'
import { Link } from "react-scroll"

export const Navbar = () => {
  return (
    <>
     <div className="bg-[#0b0f1a] md:hidden flex flex-col w-full border-b-[1px] border-gray-700">
  <div className="flex flex-row py-5 px-6 justify-center items-center w-full">
    <div className="text-xl font-bold text-yellow-400 font-mono tracking-tighter">
      NEXUS'26
    </div>
  </div>

  <div className="flex flex-row justify-around pb-4 px-2 overflow-x-auto no-scrollbar">
    <div className="flex flex-col items-center gap-y-1 min-w-[70px]">
      <div className="text-xs font-semibold text-white uppercase cursor-pointer"><Link to="events-sm" smooth={true} duration={500}>Events</Link></div>
      <div className="h-[2px] w-4 bg-yellow-400 mt-1"></div>
    </div>
    
    <div className="flex flex-col items-center gap-y-1 min-w-[70px]">
      <div className="text-xs font-semibold text-gray-400 uppercase"><Link to="timeline-sm" smooth={true} duration={500}>Timeline</Link></div>
    </div>

    <div className="flex flex-col items-center gap-y-1 min-w-[70px]">
      <div className="text-xs font-semibold text-gray-400 uppercase"><Link to="gallery-sm" smooth={true} duration={500}>Gallery</Link></div>
    </div>

    <div className="flex flex-col items-center gap-y-1 min-w-[70px]">
      <div className="text-xs font-semibold text-gray-400 uppercase"><Link to="about-sm" smooth={true} duration={500}>About</Link></div>
    </div>
  </div>
    </div>

    <div className="hidden md:flex flex-row py-8 px-12 justify-between items-center w-full border-b-[1px] border-gray-700 bg-[#0b0f1a]">
  <div className="text-3xl font-bold text-yellow-400 font-mono tracking-tighter">NEXUS'26</div>
  
  <div className="flex flex-row gap-x-10 text-gray-300 font-mono text-sm uppercase tracking-widest">
    <div className="cursor-pointer hover:text-yellow-400 transition-colors"><Link to="events-md" smooth={true} duration={500}>Events</Link></div>
    <div className="cursor-pointer hover:text-yellow-400 transition-colors"><Link to="gallery-md" smooth={true} duration={500}>Gallery</Link></div>
    <div className="cursor-pointer hover:text-yellow-400 transition-colors"><Link to="about-md" smooth={true} duration={500}>About</Link></div>
    <div className="cursor-pointer hover:text-yellow-400 transition-colors"><Link to="timeline-md" smooth={true} duration={500}>Timeline</Link></div>
  </div>
    </div>
    </>
  )
}
