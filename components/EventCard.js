import React from 'react'
import Image from "next/image"
import { Clock } from 'lucide-react'
import Link from 'next/link'

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
  <>
    <div className="bg-[#161b28] border-1 border-gray-700 p-5 rounded-2xl items-center md:hidden">
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
            <Link href={`/events/${event.id}`}> <div className="bg-[#1e293b] rounded-xl w-full mt-4 font-semibold py-3 text-center cursor-pointer">Explore Event</div></Link>
    </div>

    <div className="hidden md:flex bg-[#161b28] border-1 border-gray-700 p-8 rounded-2xl items-center gap-8 w-full max-w-4xl mx-auto">
  <Image 
    src={"/images.jpeg"} 
    width={400} 
    height={400} 
    alt="Image" 
    className="rounded-2xl w-1/3 object-cover"
  />
  <div className="flex flex-col flex-1">
    <div className="flex flex-row justify-between items-start">
      <div className="font-semibold text-2xl">{event.name}</div>
      <div className="bg-[#2b2a24] text-[#bd920e] font-mono px-3 py-1 rounded-xl text-sm flex items-center">
        {event.cluster}
      </div>
    </div>
    
    <div className="flex flex-row gap-x-2 items-center text-gray-400 mt-2">
      <Clock className="w-4 h-4"/>
      <div className="text-gray-400 text-sm">
        {formatEventTime(event.datefrom)} - {formatEventTime(event.dateto)}
      </div>
    </div>
    
    <div className="text-gray-400 text-base mt-4">
      Hands-on workshop introducing the fundamentals of backend development through practical application building
    </div>
    
    <div className="bg-[#1e293b] rounded-xl w-fit px-10 mt-6 font-semibold py-3 text-center cursor-pointer">
      <Link href={`/events/${event.id}`}>Explore Event</Link>
    </div>
  </div>
    </div>

  </>
  )
}
