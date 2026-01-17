import React from 'react'
import Image from "next/image"
import { Clock } from 'lucide-react'

export const EventCard = ({ event }) => {
  const formatEventTime = (timeStr) => {
  return new Date(timeStr).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).replace(',', '')
}
return (  
          <div className="bg-[#161b28] border-1 border-gray-700 p-5 rounded-2xl items-center">
            <Image src={"/images.jpeg"} width={200} height={200} alt="Image" className="rounded-2xl mx-auto w-full"></Image>
            <div className="flex flex-row justify-between mt-2">
              <div className="font-semibold">{event.name}</div>
              <div className="bg-[#2b2a24] text-[#bd920e] font-mono px-2 py-[1px] rounded-xl text-sm flex items-center">{event.cluster}</div>
            </div>
            <div className="flex flex-row gap-x-1 items-center text-gray-400 mt-1">
              <Clock className="w-3 h-3"/>
              <div className="text-gray-400 text-xs">{formatEventTime(event.datefrom)} - {formatEventTime(event.dateto)}</div>
            </div>
            <div className="text-gray-400 text-sm text-center mt-2">Hands-on workshop introducing the fundamentals of backend development through practical application building</div>
            <div className="bg-[#1e293b] rounded-xl w-full mt-4 font-semibold py-3 text-center">Explore Event</div>
          </div>
  )
}
