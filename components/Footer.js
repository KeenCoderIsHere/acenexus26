import { MessageSquare, Linkedin, Instagram, Youtube } from 'lucide-react'

export const Footer = () => {
  return (
    <div className="flex flex-col py-5 border-t-1 border-slate-700">
        <div className="flex flex-row justify-between items-center w-[50%] mx-auto">
          <Linkedin className="w-5 h-5 cursor-pointer" color="#d3d3d3"/>
          <Instagram className="w-5 h-5 cursor-pointer" color="#d3d3d3"/>
          <MessageSquare className="w-5 h-5 cursor-pointer" color="#d3d3d3"/>
          <Youtube className="w-5 h-5 cursor-pointer" color="#d3d3d3"/>
        </div>
        <div className="text-center mt-5 text-gray-400">© {new Date().getFullYear()} developed by <span className="text-yellow-400">ace-Webd</span></div>
        <div className="text-center mt-2 text-gray-400 text-sm"><code>ASSOCIATION OF COMPUTING ENGINEERS</code></div>
    </div>
  )
}
