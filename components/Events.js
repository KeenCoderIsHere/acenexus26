import React from 'react'
import { EventCard } from './EventCard'

export const Events = () => {
  return (
    <>
    <div className="flex flex-col items-center mt-10 md:hidden" id='events-sm'>
        <div className="font-mono text-xl border-b-[1px] border-blue-400 text-xl py-2 mb-2">TECHNICAL EVENTS</div>
        <div className="text-gray-400 text-xs mt-1">Explore our curated sessions</div>
    </div>
      <div className="hidden md:flex flex-col items-center mt-20" id='events-md'>
        <div className="font-mono text-4xl border-b-[1px] border-blue-400 py-4 mb-4">TECHNICAL EVENTS</div>
        <div className="text-gray-400 text-lg mt-2">Explore our curated sessions</div>
      </div>
    </>
  )
}
