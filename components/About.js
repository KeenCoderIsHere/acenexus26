import Image from 'next/image'

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-10 bg-[#0d1322] py-10 md:hidden" id='about-sm'>
        <div className="border-b-[1px] border-yellow-400 text-xl py-2 font-mono text-xl">ABOUT NEXUS'25</div>
        <div className="text-gray-400 mt-5 text-center w-4/5">
          Nexus is <span className="text-yellow-400"><a href="https://ace-sastra.vercel.app/" target="_blank" rel="noopener noreferrer">ACE's (Association of Computer Engineers)</a></span> flagship technical event series that brings together students, ideas, and skills on one platform. Nexus'26 is back with a powerful lineup of hands-on technical workshops designed to ignite your interest, spark innovation, and enhance your skills. 
        </div>
        <div className="text-gray-400 mt-5 text-center w-4/5">
          Designed to encourage learning and build practical expertise, Nexus serves as a convergence point where learners explore their interests, collaborate, and grow—making it the space where ideas connect and coders converge.
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 bg-[#0d1322] py-4 hidden md:flex py-10" id='about-md'>
        <div className="border-b-[1px] border-yellow-400 text-xl py-2 font-mono text-xl">ABOUT NEXUS'25</div>
        <div className="text-gray-400 mt-5 text-center w-4/5">
          Nexus is <span className="text-yellow-400"><a href="https://ace-sastra.vercel.app/" target="_blank" rel="noopener noreferrer">ACE's (Association of Computer Engineers)</a></span> flagship technical event series that brings together students, ideas, and skills on one platform. Nexus'26 is back with a powerful lineup of hands-on technical workshops designed to ignite your interest, spark innovation, and enhance your skills. 
        </div>
        <div className="text-gray-400 mt-5 text-center w-4/5">
          Designed to encourage learning and build practical expertise, Nexus serves as a convergence point where learners explore their interests, collaborate, and grow—making it the space where ideas connect and coders converge.
        </div>
      </div>
    </>
    
  )
}

export default About