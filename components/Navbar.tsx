"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex mb-4">
      <Image alt='my image' className='w-12 rounded-full lg:ml-6 mb-4 ' src={require("../public/images/good.png")}/>
      <div className='flex gap-1 md:gap-5 mt-2 ml-10 lg:ml-36'>
      <a className={`mr-4 ${pathname === "/" ? "text-white text-xl" : ""}`} href="/" > 
      <Image alt='my image' className='w-10 rounded-full lg:ml-1 mb-4 ' src={require("../public/images/chat.png")}/>
      
       </a>
      <a  className={`mr-4 ${pathname === "/" ? "text-white text-xl" : ""}`} href="https://github.com/abdullah0325" target="_blank" rel="noopener noreferrer" > 
      
      <Image alt='my image' className='w-10 rounded-full lg:ml-1 mb-4 ' src={require("../public/images/github.jpeg")}/>
      
       </a>
      <a className={`mr-4 ${pathname === "/" ? "text-white text-xl" : ""}`} href="https://www.youtube.com/@InzamamMalik"  target="_blank"  rel="noopener noreferrer">
        
      <Image alt='my image' className='w-10 h-9 rounded-full lg:ml-1 mb-4 ' src={require("../public/images/youtub1.png")}/>
        
         </a>
      <a className={`mr-4 ${pathname === "/" ? "text-white text-xl" : ""}`} href="https://www.linkedin.com/in/muhammad-abdullah-41b82028b/" target="_blank"  rel="noopener noreferrer" > 
      <Image alt='my image' className='w-10 rounded-full lg:ml-1 mb-4 ' src={require("../public/images/linkdein.png")}/>
      
       </a>
      </div>


      {/* <a className={`mr-4 ${pathname === "/structured_output" ? "text-white border-b" : ""}`} href="/structured_output">🧱 Structured Output</a>
      <a className={`mr-4 ${pathname === "/agents" ? "text-white border-b" : ""}`} href="/agents">🦜 Agents</a>
      <a className={`mr-4 ${pathname === "/retrieval" ? "text-white border-b" : ""}`} href="/retrieval">🐶 Retrieval</a>
      <a className={`mr-4 ${pathname === "/retrieval_agents" ? "text-white border-b" : ""}`} href="/retrieval_agents">🤖 Retrieval Agents</a> */}
    </nav>
  );
}