'use client';
import Marquee from 'react-fast-marquee';

export default function NewsMarquee() {
  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center overflow-hidden">
        {/* Label with Custom Clipping */}
        <div className="clip-label bg-[#16225c] text-white h-full">
          <div className="flex items-center h-full px-4 py-2 font-semibold whitespace-nowrap">
            Immigration News
            <span className="ml-2 relative w-3 h-3 -mt-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#1ac194] opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1ac194]"></span>
            </span>
          </div>
        </div>

        {/* Marquee Text */}
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          className="text-black font-medium text-sm whitespace-nowrap px-4"
        >
          According to the January 2025 US Visa Bulletin, the Date for Filing Chart shows...
        </Marquee>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .clip-label {
          clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
          width: 220px;
        }
      `}</style>
    </div>
  );
}
