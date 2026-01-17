'use client'
import Image from "next/image"
import { Clock, MapPin, CheckCircle, CheckCircle2 } from "lucide-react"
import { Footer } from "./Footer"
export const Form = () => {
  return (
    <div className="flex flex-col bg-[#0b0f1a] md:hidden min-h-screen">
      <div className="flex flex-col mb-10">
        <div className="relative">
          <Image src={"/images.jpeg"} width={20} height={20} alt="Photo" className="w-full mx-auto mt-7"/>
          <div className="flex flex-col bottom-1 absolute ml-2">
            <div className="rounded-2xl bg-yellow-300 text-black font-bold text-[10px] text-center w-fit px-2 ">APPDEV WORKSHOP</div>
            <div className="text-3xl font-bold text-white">GreenCode</div>
            <div className="flex flex-row mt-1 gap-x-4">
              <div className="flex flex-row items-center text-white gap-x-1">
                <div><Clock className="w-4 h-4" color="white"/></div>
                <div>10:00 AM</div>
              </div>
              <div className="flex flex-row items-center text-white gap-x-1">
                <div><MapPin className="w-4 h-4" color="white"/></div>
                <div>LTC101</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-1 mx-auto mt-10">
          <div className="text-white text-2xl border-b-[1px] py-2 font-semibold border-yellow-400">Description</div>
        </div>
        <div className="text-sm text-gray-400 text-center w-[90%] mx-auto mt-5">This event was an interactive, team-based hardware hackathon blended with an engaging scavenger hunt experience. Participants worked collaboratively to uncover hidden clues and resources, solving challenges that tested their problem-solving, strategic thinking, and technical creativity. The activity combined hands-on building with interactive gameplay elements, fostering teamwork, innovation, and an immersive learning environment.</div>
        <div className="border-slate-700 border-1 rounded-2xl text-white mt-10 w-[90%] mx-auto px-3 py-5 bg-[#0f172a]">
          <div className="text-center text-2xl font-bold mb-3">Event Rules</div>
          <div className="flex flex-col items-center justify-center gap-y-5">
            <div className="flex flex-row items-center justify-center gap-x-2">
              <CheckCircle className="w-5 h-5" color="yellow"/>
              <div className="text-xs">The participants could be solo or a team of two or three.</div>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-2">
              <CheckCircle className="w-10 h-10" color="yellow"/>
              <div className="text-xs">Participant must submit abstract of their paper during the resgistration process on or before 20th January 2026.</div>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-2">
              <CheckCircle className="w-7 h-7" color="yellow"/>
              <div className="text-xs">Papers will be shortlisted based on the quality, relevance and originality of the abstract.</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div className="text-white text-2xl border-b-[1px] py-2 font-semibold border-yellow-400 w-fit text-center mx-auto">Register Now</div>
          <div className="flex flex-col w-[90%] mx-auto mt-5">
            <div className="flex flex-col gap-y-2">
              <p className="text-gray-400 text-xs">FULL NAME</p>
              <input placeholder="John Doe" className="px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white"/>
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">REG. NO</p>
              <input placeholder="124003191" className="px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white"/>
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">PHONE NUMBER</p>
              <input placeholder="+91 72597 58743" className="px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white"/>
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">SASTRA EMAIL ID</p>
              <input placeholder="124003191@sastra.ac.in" className="px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white"/>
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">DEPARTMENT</p>
              <input placeholder="CSE" className="px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white"/>
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <p className="text-gray-400 text-xs">YEAR</p>
              <input placeholder="3" className="px-3 py-2 bg-[#0f172a] rounded-xl border-1 border-slate-700 placeholder:text-gray-500 text-xs text-white"/>
            </div>
          </div>
        </div>
        <div className="bg-yellow-300 rounded-lg text-black text-xs px-6 py-2 w-[60%] mx-auto mt-10 text-center font-bold">Register Now</div>
      </div>
      <Footer/>
    </div>
  )
}
