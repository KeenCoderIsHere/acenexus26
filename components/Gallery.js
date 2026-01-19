import React from 'react'
import Image from "next/image"
import InfiniteSlider from './InfiniteSlider'

export const Gallery = () => {
  return (
      <>
        <div className="flex flex-col items-center bg-[#0d1322] py-5 md:hidden" id='gallery-sm'>
        <div className="text-white border-b-[1px] border-gray-400 text-xl py-2 mb-8"><code>Previous NEXUS Gallery</code></div>
        <InfiniteSlider />
      </div>

      <div className="hidden md:flex flex-col items-center bg-[#0d1322] py-20 w-full" id='gallery-md'>
        <div className="text-white border-b-[1px] border-gray-400 text-3xl py-4 px-10 mb-8">
          <code>Previous NEXUS Gallery</code>
        </div>
        <InfiniteSlider />
      </div>
      </>
  )
}
