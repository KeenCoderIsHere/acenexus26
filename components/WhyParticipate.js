import { Clock, Terminal, Globe, Users, Compass } from 'lucide-react'

export const WhyParticipate = () => {
  return (
    <>
      <div className="bg-[#0d1322] flex flex-col mt-10 py-5 items-center gap-y-6 md:hidden">
        <div className="font-mono text-xl py-2 text-center border-b-[1px] border-gray-400">Why Participate?</div>
        <div className="bg-[#161b28] flex flex-row gap-y-2 rounded-2xl w-[90%] p-3 items-center">
          <Terminal className="w-10" color="yellow" />
          <div className="ml-5">Take part in practical, guided sessions through hands-on workshops</div>
        </div>
        <div className="bg-[#161b28] flex flex-row gap-y-2 rounded-2xl w-[90%] p-3 items-center">
          <Compass className="w-10" color="yellow" />
          <div className="ml-5">Explore multiple technology domains</div>
        </div>
        <div className="bg-[#161b28] flex flex-row gap-y-2 rounded-2xl w-[90%] p-3 items-center">
          <Users className="w-10" color="yellow" />
          <div className="ml-5">Meet like-minded peers from the domains you're interested in</div>
        </div>
        <div className="bg-[#161b28] flex flex-row gap-y-2 rounded-2xl w-[90%] p-3 items-center">
          <Globe className="w-10" color="yellow" />
          <div className="ml-5">Gain real world technical exposure</div>
        </div>
      </div>

      <div className="hidden md:flex flex-col bg-[#0d1322] py-24 px-10 items-center w-full mt-10">
        <div className="font-mono text-4xl py-4 text-center border-b-[1px] border-gray-400 text-white mb-16 px-12 uppercase tracking-widest">
          Why Participate?
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">
          <div className="bg-[#161b28] flex flex-row rounded-3xl p-8 items-center border border-gray-800 hover:border-gray-700 transition-all duration-300 ease-in-out hover:translate-y-1 cursor-pointer hover:scale-101">
            <div className="bg-[#0d1322] p-4 rounded-2xl">
              <Terminal className="w-12 h-12" color="yellow" />
            </div>
            <div className="ml-8 text-xl text-gray-300 leading-relaxed font-medium">
              Take part in practical, guided sessions through hands-on workshops
            </div>
          </div>

          <div className="bg-[#161b28] flex flex-row rounded-3xl p-8 items-center border border-gray-800 hover:border-gray-700 transition-all duration-300 ease-in-out hover:translate-y-1 cursor-pointer hover:scale-101">
            <div className="bg-[#0d1322] p-4 rounded-2xl">
              <Compass className="w-12 h-12" color="yellow" />
            </div>
            <div className="ml-8 text-xl text-gray-300 leading-relaxed font-medium">
              Explore multiple technology domains
            </div>
          </div>

          <div className="bg-[#161b28] flex flex-row rounded-3xl p-8 items-center border border-gray-800 hover:border-gray-700 transition-all duration-300 ease-in-out hover:translate-y-1 cursor-pointer hover:scale-101">
            <div className="bg-[#0d1322] p-4 rounded-2xl">
              <Users className="w-12 h-12" color="yellow" />
            </div>
            <div className="ml-8 text-xl text-gray-300 leading-relaxed font-medium">
              Meet like-minded peers from the domains you're interested in
            </div>
          </div>

          <div className="bg-[#161b28] flex flex-row rounded-3xl p-8 items-center border border-gray-800 hover:border-gray-700 transition-all duration-300 ease-in-out hover:translate-y-1 cursor-pointer hover:scale-101">
            <div className="bg-[#0d1322] p-4 rounded-2xl">
              <Globe className="w-12 h-12" color="yellow" />
            </div>
            <div className="ml-8 text-xl text-gray-300 leading-relaxed font-medium">
              Gain real world technical exposure
            </div>
          </div>
        </div>
      </div>
    </>
  )
}