'use client'
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'INDOVATION: Scavenger Hunt',
    dateText: 'January 25, 9:00 AM – 4:00 PM',
    location: 'LTC 104',
    start: '20260125T033000Z',
    end: '20260125T103000Z'
  },
  {
    id: 2,
    title: 'GreenCode (App Development)',
    dateText: 'January 25, 9:00 AM – 5:00 PM',
    location: 'SoC Lab 4',
    start: '20260125T033000Z',
    end: '20260125T113000Z'
  },
  {
    id: 3,
    title: 'NLP Unlocked: From Text To Transformers (AI/ML)',
    dateText: 'January 25, 9:00 AM – 5:00 PM',
    location: 'LTC 201',
    start: '20260125T033000Z',
    end: '20260125T113000Z'
  },
  {
    id: 4,
    title: 'Prompt2Protect (Cyber Security)',
    dateText: 'January 25, 9:30 AM – 4:30 PM',
    location: 'LTC 104',
    start: '20260125T040000Z',
    end: '20260125T110000Z'
  },
  {
    id: 5,
    title: 'CRUDXpress (Competitive Programming)',
    dateText: 'January 25, 9:30 AM – 4:00 PM',
    location: 'SoC Lab 1',
    start: '20260125T040000Z',
    end: '20260125T103000Z'
  },
  {
    id: 6,
    title: 'WebDev Workshop',
    dateText: 'January 25, 10:00 AM – 4:30 PM',
    location: 'SoC Lab 2',
    start: '20260125T043000Z',
    end: '20260125T110000Z'
  }
]

const Timeline = () => {
  const addToCalendar = (event) => {
    const url =
      'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      `&text=${encodeURIComponent(event.title)}` +
      `&dates=${event.start}/${event.end}` +
      `&details=${encodeURIComponent('ACE NEXUS 2025 Workshop')}` +
      `&location=${encodeURIComponent(event.location)}`
    window.open(url, '_blank')
  }

  return (
    <>
      <div className="flex flex-col py-5 mt-10 items-center gap-y-6 md:hidden" id='timeline-sm'>
        <div className="border-b-[1px] border-yellow-400 py-2 font-mono text-xl">
          EVENT TIMELINE
        </div>

        <div className="flex flex-col gap-y-5">
          {events.map(event => (
            <div key={event.id} className="flex flex-row gap-x-5 items-start">
              <div className="bg-yellow-400 rounded-full w-7 h-7 flex items-center justify-center text-black font-bold">
                {event.id}
              </div>

              <div className="flex flex-col border border-gray-400 p-3 rounded-xl w-[260px]">
                <div className="text-white text-sm font-semibold">
                  {event.title}
                </div>

                <div className="text-gray-400 text-xs flex items-center gap-x-2 mt-1">
                  <Calendar className="w-3 h-3" />
                  <div>{event.dateText}</div>
                </div>

                <div className="text-gray-400 text-xs flex items-center gap-x-2 mt-1">
                  <MapPin className="w-3 h-3" />
                  <div>{event.location}</div>
                </div>

                <div
                  className="text-yellow-300 text-xs mt-2 flex items-center justify-center gap-x-1 cursor-pointer"
                  onClick={() => addToCalendar(event)}
                >
                  <div>Add to Calendar</div>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex flex-col py-20 mt-20 items-center w-full max-w-6xl mx-auto" id='timeline-md'>
        <div className="border-b-[1px] border-yellow-400 text-3xl py-4 font-mono mb-16 px-8 text-white">
          EVENT TIMELINE
        </div>

        <div className="flex flex-col gap-y-10">
          {events.map(event => (
            <div key={event.id} className="flex flex-row items-center gap-x-8">
              <div className="bg-yellow-400 rounded-full min-w-[56px] h-[56px] flex items-center justify-center text-black font-bold text-2xl">
                {event.id}
              </div>

              <div className="flex flex-col border border-gray-400 p-6 rounded-2xl w-full hover:translate-y-1 hover:border-gray-300 duration-300">
                <div className="text-xl font-bold text-white mb-2">
                  {event.title}
                </div>

                <div className="text-gray-400 text-sm flex items-center gap-x-3">
                  <Calendar className="w-4 h-4" />
                  <div>{event.dateText}</div>
                </div>

                <div className="text-gray-400 text-sm flex items-center gap-x-3 mt-1">
                  <MapPin className="w-4 h-4" />
                  <div>{event.location}</div>
                </div>

                <div
                  className="text-yellow-300 text-sm mt-4 flex items-center gap-x-2 cursor-pointer mx-auto"
                  onClick={() => addToCalendar(event)}
                >
                  <div>Add to Calendar</div>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Timeline
