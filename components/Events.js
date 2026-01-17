import React from 'react'
import { EventCard } from './EventCard'

export const Events = () => {
  return (
    <div className="flex flex-col items-center mt-10">
        <div className="font-mono text-xl border-b-[1px] border-blue-400 text-xl py-2 mb-2">TECHNICAL EVENTS</div>
        <div className="text-gray-400 text-xs mt-1">Explore our curated sessions</div>
    </div>
  )
}
