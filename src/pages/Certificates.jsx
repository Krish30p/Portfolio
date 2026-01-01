import { ExternalLink, Github } from 'lucide-react'
import React from 'react'

const Certificates = () => {
  return (
    <div className="bg-black text-white px-4 sm:px-22 py-6 border-t border-[#2a2a2a]">
      {/* what? */}
        <div className="text-lg sm:text-xl">
          <span className="text-[#4a4a4a]">//</span>
          <span>certificates</span>
        </div>

        <div className='py-4'>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-2xl sm:text-3xl lg:text-4xl py-2">
            <span className="text-[#4a4a4a]">SQL Basics</span>
            <span>– HackerRank</span>

            {/* Icons */}
            <div className="flex gap-3 sm:gap-0 space-x-1">
              <a
                href="https://www.hackerrank.com/certificates/3abb6fb4a612"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4a4a4a] text-[#8a8a8a] transition"
              >
                <ExternalLink size={26} />
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-2xl sm:text-3xl lg:text-4xl py-2">
            <span className="text-[#4a4a4a]">AWS Cloud Practitioner Essentials</span>
            <span>– AWS Skill Builder</span>

            {/* Icons */}
            <div className="flex gap-3 sm:gap-0 space-x-1">
              <a
                href="https://drive.google.com/file/d/1YAK_A_ogye8D1dg5mXUU0nHGEUnU7vZP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4a4a4a] text-[#8a8a8a] transition"
              >
                <ExternalLink size={26} />
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Certificates
