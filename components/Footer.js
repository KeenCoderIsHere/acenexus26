import { MessageSquare, Linkedin, Instagram, Youtube } from 'lucide-react'

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col py-5 border-t-1 border-slate-700 md:hidden">
        <div className="flex flex-row justify-between items-center w-[50%] mx-auto">
          <a href='https://www.linkedin.com/in/ace-sastra/' target='_blank' rel='noopener noreferrer'><Linkedin className="w-5 h-5 cursor-pointer" color="#d3d3d3"/></a>
          <a href='https://www.instagram.com/ace.sastra/' target='_blank' rel='noopener noreferrer'><Instagram className="w-5 h-5 cursor-pointer" color="#d3d3d3"/></a>
          <a href='https://chat.whatsapp.com/HSN43WSqvXK8G47b0Uxad6?mode=ac_t' target='_blank' rel='noopener noreferrer'><MessageSquare className="w-5 h-5 cursor-pointer" color="#d3d3d3"/></a>
          <a href='https://youtube.com/@ace-sastra' target='_blank' rel='noopener noreferrer'><Youtube className="w-5 h-5 cursor-pointer" color="#d3d3d3"/></a>
        </div>
        <div className="text-center mt-5 text-gray-400">© {new Date().getFullYear()} developed by <span className="text-yellow-400">ace-Webd</span></div>
        <div className="text-center mt-2 text-gray-400 text-sm"><code>ASSOCIATION OF COMPUTING ENGINEERS</code></div>
    </div>

    <div className="hidden md:flex flex-col py-10 border-t-1 border-slate-700 w-full bg-[#0d1322]">
      <div className="flex flex-row justify-between items-center w-[30%] mx-auto">
        <a href='https://www.linkedin.com/in/ace-sastra/' target='_blank' rel='noopener noreferrer'><Linkedin className="w-6 h-6 cursor-pointer hover:opacity-80 duration-300 transition-all ease-in-out hover:scale-110 hover:translate-y-[1px]" color="#d3d3d3"/></a>
        <a href='https://www.instagram.com/ace.sastra/' target='_blank' rel='noopener noreferrer'><Instagram className="w-6 h-6 cursor-pointer hover:opacity-80 duration-300 transition-all ease-in-out hover:scale-110 hover:translate-y-[1px]" color="#d3d3d3"/></a>
        <a href='https://chat.whatsapp.com/HSN43WSqvXK8G47b0Uxad6?mode=ac_t' target='_blank' rel='noopener noreferrer'><MessageSquare className="w-6 h-6 cursor-pointer hover:opacity-80 duration-300 transition-all ease-in-out hover:scale-110 hover:translate-y-[1px]" color="#d3d3d3"/></a>
        <a href='https://youtube.com/@ace-sastra' target='_blank' rel='noopener noreferrer'><Youtube className="w-6 h-6 cursor-pointer hover:opacity-80 duration-300 transition-all ease-in-out hover:scale-110 hover:translate-y-[1px]" color="#d3d3d3"/></a>
      </div>
      <div className="text-center mt-8 text-gray-400 text-lg">
        © {new Date().getFullYear()} developed by <span className="text-yellow-400">ace-Webd</span>
      </div>
      <div className="text-center mt-3 text-gray-400 text-base tracking-widest">
        <code>ASSOCIATION OF COMPUTING ENGINEERS</code>
      </div>
    </div>
    </>
  )
}
