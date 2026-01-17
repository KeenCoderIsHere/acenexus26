import { Clock, Terminal, Globe, Users, Compass } from 'lucide-react'

export const WhyParticipate = () => {
  return (
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
  )
}
