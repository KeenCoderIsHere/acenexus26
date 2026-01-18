export const Hero = () => {
  return (
    <>
      <div className=" md:hidden">
      <div className="flex flex-col w-2/3 mx-auto items-center mt-20 border-b-[1px] border-gray-700 py-5">
        <div className="font-medium">ACE PRESENTS</div>
        <div className="font-bold text-yellow-300 text-5xl">NEXUS'26</div>
      </div>
      <div className="text-gray-300 text-xl mt-2 text-center"><code>JANUARY 25, 2026</code></div>
      <div className="text-yellow-400 border-1 border-yellow-400 text-center rounded-2xl w-2/3 mx-auto mt-10 py-1">Where Coders Converge</div>
      <div className="text-gray-500 mt-10 text-center w-2/3 mx-auto">
        Put on your techie outfit, pick the workshops that excite you as you form a Nexus of ideas, skills, and your profound passion.
      </div>
      </div>

      <div className="hidden md:flex flex-col items-center mt-32 w-full py-10">
    <div className="flex flex-col w-3/4 max-w-5xl items-center border-b-[1px] border-gray-700 pb-10">
      <div className="font-medium text-2xl tracking-[0.2em]">ACE PRESENTS</div>
      <div className="font-bold text-yellow-300 text-9xl mt-2 tracking-tighter">NEXUS'26</div>
    </div>

    <div className="text-gray-300 text-3xl mt-6 text-center tracking-widest">
      <code>JANUARY 25, 2026</code>
    </div>

    <div className="text-yellow-400 border-1 border-yellow-400 text-center rounded-2xl w-fit px-12 mt-12 py-3 text-2xl font-mono uppercase tracking-wider">
      Where Coders Converge
    </div>

    <div className="text-gray-500 mt-12 text-center w-1/2 max-w-3xl text-xl leading-relaxed">
      Put on your techie outfit, pick the workshops that excite you as you form a Nexus of ideas, skills, and your profound passion.
    </div>
      </div>
    </>
  )
}
