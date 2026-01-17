import Image from "next/image";
import { Clock, Terminal, Globe, Users, Compass, MessageSquare, Linkedin, Instagram, Youtube } from 'lucide-react'
export default function Home() {
  return (
    <div className="min-h-screen text-white bg-[#0b0f1a] h-full">
      <div className="bg-[#0b0f1a] md:hidden flex flex-row py-5 px-3 justify-between w-full border-b-[1px] border-gray-700 flex-1 items-center">
        <div className="text-sm font-bold">NEXUS'26</div>
        <div className="text-xs">Events & Registration</div>
        <div className="text-xs">Gallery</div>
        <div className="text-xs">Timeline</div>
      </div>
      <div className="flex flex-col w-2/3 mx-auto items-center mt-20 border-b-[1px] border-gray-700 py-5">
        <div className="font-medium">ACE PRESENTS</div>
        <div className="font-bold text-yellow-300 text-5xl">NEXUS'26</div>
      </div>
      <div className="text-gray-300 text-xl mt-2 text-center"><code>JANUARY 25, 2026</code></div>
      <div className="text-yellow-400 border-1 border-yellow-400 text-center rounded-2xl w-2/3 mx-auto mt-10 py-1">Where Coders Converge</div>
      <div className="text-gray-500 mt-10 text-center w-2/3 mx-auto">
        Put on your techie outfit, pick the workshops that excite you as you form a Nexus of ideas, skills, and your profound passion.
      </div>
      <div className="flex flex-col items-center mt-10 bg-[#0d1322] py-4">
        <div className="border-b-[1px] border-yellow-400 text-xl py-2 font-mono text-xl">ABOUT NEXUS'26</div>
        <div className="text-gray-400 mt-5 text-center w-4/5">
          Nexus is <span className="text-yellow-400">ACE's (Association of Computer Engineers)</span> flagship technical event series that brings together students, ideas, and skills on one platform. Nexus'26 is back with a powerful lineup of hands-on technical workshops designed to ignite your interest, spark innovation, and enhance your skills. 
        </div>
        <div className="text-gray-400 mt-5 text-center w-4/5">
          Designed to encourage learning and build practical expertise, Nexus serves as a convergence point where learners explore their interests, collaborate, and grow—making it the space where ideas connect and coders converge.
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="font-mono text-xl border-b-[1px] border-blue-400 text-xl py-2 mb-2">TECHNICAL EVENTS</div>
        <div className="text-gray-400 text-xs mt-1">Explore our curated sessions</div>
        <div className="flex flex-col mt-10 w-[90%]">
          <div className="bg-[#161b28] border-1 border-gray-700 p-5 rounded-2xl items-center">
            <Image src={"/images.jpeg"} width={200} height={200} alt="Image" className="rounded-2xl mx-auto w-full"></Image>
            <div className="flex flex-row justify-between mt-2">
              <div className="font-semibold">CRUDXpress</div>
              <div className="bg-[#2b2a24] text-[#bd920e] font-mono px-2 py-[1px] rounded-xl text-sm">Web Dev</div>
            </div>
            <div className="flex flex-row gap-x-1 items-center text-gray-400 mt-1">
              <Clock className="w-3"/>
              <div className="text-gray-400 text-xs">10:00 AM</div>
            </div>
            <div className="text-gray-400 text-sm text-center mt-2">Hands-on workshop introducing the fundamentals of backend development through practical application building</div>
            <div className="bg-[#1e293b] rounded-xl w-full mt-4 font-semibold py-3 text-center">Explore Event</div>
          </div>
        </div>
      </div>
      <div className="bg-[#0d1322] flex flex-col mt-10 py-5 items-center gap-y-6">
        <div className="font-mono text-xl py-2 text-center border-b-[1px] border-gray-400">Why Participate?</div>
        <div className="bg-[#161b28] flex flex-row gap-y-2 rounded-2xl w-[90%] p-3 items-center">
          <Terminal className="w-10" color="yellow"/>
          <div className="ml-5">Take part in practical, guided sessions through hands-on workshops</div>
        </div>
        <div className="bg-[#161b28] flex flex-row gap-y-2 rounded-2xl w-[90%] p-3 items-center">
          <Compass className="w-10" color="yellow"/>
          <div className="ml-5">Explore multiple technology domains</div>
        </div>
        <div className="bg-[#161b28] flex flex-row gap-y-2 rounded-2xl w-[90%] p-3 items-center">
          <Users className="w-10" color="yellow"/>
          <div className="ml-5">Meet like-minded peers from the domains you're interested in</div>
        </div>
        <div className="bg-[#161b28] flex flex-row gap-y-2 rounded-2xl w-[90%] p-3 items-center">
          <Globe className="w-10" color="yellow"/>
          <div className="ml-5">Gain real world technical exposure</div>
        </div>
      </div>
      <div className="flex flex-col py-5 mt-10 items-center gap-y-6">
        <div className="border-b-[1px] border-yellow-400 text-xl py-2 font-mono text-xl">TECHNICAL EVENTS</div>
        <div className="flex flex-col gap-y-5 items-start justify-start">
          <div className="flex flex-row justify-center items-center gap-x-5">
            <div className="bg-yellow-400 rounded-full w-7 h-7 text-center flex items-center justify-center text-black font-bold text-xl">1</div>
            <div className="flex flex-col">
              <div>Strategy Showdown</div>
              <div className="text-gray-400 text-xs">2 PM, Jan 26</div>
            </div>
          </div>
           <div className="flex flex-row justify-center items-center gap-x-5">
            <div className="bg-yellow-400 rounded-full w-7 h-7 text-center flex items-center justify-center text-black font-bold text-xl">2</div>
            <div className="flex flex-col">
              <div>GameATron</div>
              <div className="text-gray-400 text-xs">3 PM, Jan 26</div>
            </div>
          </div>
           <div className="flex flex-row justify-center items-center gap-x-5">
            <div className="bg-yellow-400 rounded-full w-7 h-7 text-center flex items-center justify-center text-black font-bold text-xl">3</div>
            <div className="flex flex-col">
              <div>Defend and Protest</div>
              <div className="text-gray-400 text-xs">4 PM, Jan 26</div>
            </div>
          </div>
           <div className="flex flex-row justify-center items-center gap-x-5">
            <div className="bg-yellow-400 rounded-full w-7 h-7 text-center flex items-center justify-center text-black font-bold text-xl">4</div>
            <div className="flex flex-col">
              <div>Triathlon</div>
              <div className="text-gray-400 text-xs">5 PM, Jan 26</div>
            </div>
          </div>
           <div className="flex flex-row justify-center items-center gap-x-5">
            <div className="bg-yellow-400 rounded-full w-7 h-7 text-center flex items-center justify-center text-black font-bold text-xl">5</div>
            <div className="flex flex-col">
              <div>Formula ACE</div>
              <div className="text-gray-400 text-xs">6 PM, Jan 26</div>
            </div>
          </div>
           <div className="flex flex-row justify-center items-center gap-x-5">
            <div className="bg-yellow-400 rounded-full w-7 h-7 text-center flex items-center justify-center text-black font-bold text-xl">6</div>
            <div className="flex flex-col">
              <div>Ted Talk</div>
              <div className="text-gray-400 text-xs">7 PM, Jan 26</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#0d1322] py-5">
        <div className="text-white border-b-[1px] border-gray-400 text-xl py-2"><code>Previous NEXUS Gallery</code></div>
        <div className="flex flex-col mt-5 gap-y-5">
          <Image src={"/Picture1.png"} alt="Photo" width={230} height={220} className="rounded-2xl"/>
          <Image src={"/Picture2.png"} alt="Photo" width={230} height={220} className="rounded-2xl"/>
        </div>
      </div>
      <div className="flex flex-col py-5">
        <div className="flex flex-row justify-between items-center w-[50%] mx-auto">
          <Linkedin className="w-5 h-5 cursor-pointer" color="white"/>
          <Instagram className="w-5 h-5 cursor-pointer" color="white"/>
          <MessageSquare className="w-5 h-5 cursor-pointer" color="white"/>
          <Youtube className="w-5 h-5 cursor-pointer" color="white"/>
        </div>
        <div className="text-center mt-5">© {new Date().getFullYear()} developed by <span className="text-yellow-400">ace-Webd</span></div>
         <div className="text-center mt-5">ASSOCIATION OF COMPUTING ENGINEERS</div>
      </div>
    </div>
  );
}
