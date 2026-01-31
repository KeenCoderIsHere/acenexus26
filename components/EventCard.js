'use client'
import React from 'react'
import Image from "next/image"
import { Clock } from 'lucide-react'
import Link from 'next/link'

export const EventCard = ({ event, imageLink }) => {
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
      <div className="bg-[#161b28] border-1 border-gray-700 p-5 rounded-2xl items-center md:hidden fade-up hover-card">
        <div className="img-wrap">
          <Image
            src={`/${imageLink}`}
            width={200}
            height={200}
            alt="Image"
            className="rounded-2xl mx-auto w-full img-zoom"
          />
        </div>

        <div className="flex flex-row justify-between mt-2 fade-up delay-1">
          <div className="font-semibold">{event.name}</div>
          <div className="bg-[#2b2a24] text-[#bd920e] font-mono px-2 py-[1px] rounded-xl text-sm flex items-center">
            {event.cluster}
          </div>
        </div>

        <div className="flex flex-row gap-x-1 items-center text-gray-400 mt-1 fade-up delay-2">
          <Clock className="w-3 h-3"/>
          <div className="text-gray-400 text-xs">
            {formatEventTime(event.datefrom)} - {formatEventTime(event.dateto)}
          </div>
        </div>

        <div className="text-gray-400 text-sm text-center mt-2 fade-up delay-3">
          {event.description}
        </div>

        <Link 
          href={`/`} 
          className="block bg-[#1e293b] rounded-xl w-full mt-4 font-semibold py-3 text-center cursor-pointer fade-up delay-4"
        >
          Registrations Closed!
        </Link>
      </div>

      <div className="hidden md:flex bg-[#161b28] border-1 border-gray-700 p-8 rounded-2xl items-center gap-8 w-full max-w-4xl mx-auto fade-up hover:translate-y-1 hover:border-gray-600 duration-300 ease-in-out transition-all">
        <div className="img-wrap w-1/3">
          <Image
            src={`/${imageLink}`}
            width={400}
            height={400}
            alt="Image"
            className="rounded-2xl w-full object-cover img-zoom"
          />
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex flex-row justify-between items-start fade-up delay-1">
            <div className="font-semibold text-2xl">{event.name}</div>
            <div className="bg-[#2b2a24] text-[#bd920e] font-mono px-3 py-1 rounded-xl text-sm flex items-center">
              {event.cluster}
            </div>
          </div>

          <div className="flex flex-row gap-x-2 items-center text-gray-400 mt-2 fade-up delay-2">
            <Clock className="w-4 h-4"/>
            <div className="text-gray-400 text-sm">
              {formatEventTime(event.datefrom)} - {formatEventTime(event.dateto)}
            </div>
          </div>

          <div className="text-gray-400 text-base mt-4 fade-up delay-3">
            {event.description}
          </div>
            <Link href={`/`} className='bg-[#1e293b] rounded-xl w-fit px-10 mt-6 font-semibold py-3 text-center cursor-pointer fade-up delay-4'>Registrations Closed!</Link>
        </div>
      </div>

      <style jsx>{`
        /* ENTRY */
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* IMAGE ZOOM */
        .img-wrap {
          overflow: hidden;
          border-radius: 1rem;
        }

        .img-zoom {
          transition: transform 0.6s ease;
        }

        .hover-card:hover .img-zoom {
          transform: scale(1.05);
        }

        /* CARD HOVER */
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        @media (min-width: 768px) {
          .hover-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          }
        }
      `}</style>
    </>
  )
}
