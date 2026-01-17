import React from 'react'
import Image from "next/image"

export const Gallery = () => {
  return (
    <div className="flex flex-col items-center bg-[#0d1322] py-5">
        <div className="text-white border-b-[1px] border-gray-400 text-xl py-2"><code>Previous NEXUS Gallery</code></div>
        <div className="flex flex-col mt-5 gap-y-5">
          <Image src={"/Picture1.png"} alt="Photo" width={230} height={220} className="rounded-2xl"/>
          <Image src={"/Picture2.png"} alt="Photo" width={230} height={220} className="rounded-2xl"/>
        </div>
        <div className="bg-[#1e293b] rounded-xl w-[90%] mt-4 font-semibold py-3 text-center">View All Media</div>
      </div>
  )
}
