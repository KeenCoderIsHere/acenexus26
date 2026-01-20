'use client'
import Image from "next/image"
import { useEffect, useRef } from 'react'

const images = [
  "/images.jpeg",
  "/images.jpeg",
  "/images.jpeg",
  "/images.jpeg",
  "/images.jpeg",
]

export default function InfiniteSlider() {
  const scrollerRef = useRef(null)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    el.style.animation = 'none'
    void el.offsetWidth
    el.style.animation = 'scroll 30s linear infinite'
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollerRef}
        className="flex gap-6 w-max"
        style={{
          animation: 'scroll 30s linear infinite',
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="w-[280px] flex-shrink-0">
            <Image
              src={src}
              alt="slide"
              width={280}
              height={180}
              className="rounded-xl object-cover w-full hover:scale-102 cursor-pointer duration-300 ease-in-out transition-all"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}