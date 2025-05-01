'use client';
import Marquee from 'react-fast-marquee';

export default function NewsMarquee() {
  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center overflow-hidden">
        {/* Label with Custom Clipping */}
        <div className="clip-label bg-[#16225c] text-white h-full text-xs sm:text-sm">
          <div className="flex items-center h-full px-2 sm:px-4 py-2 font-semibold whitespace-nowrap">
            Immigration News
            <span className="ml-1 sm:ml-2 relative w-2.5 h-2.5 -mt-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#1ac194] opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1ac194]"></span>
            </span>
          </div>
        </div>

        {/* Marquee Text */}
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          className="text-black font-medium text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4"
        >
          <>
            Next Step NIW — Full & Customized EB-2 NIW and EB-1A Packages Available Now. Check the latest U.S. immigrant visa interview wait times{' '}
            <a
              href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/iv-wait-times.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              here
            </a>
            .{' \u00A0\u00A0\u00A0'}
          </>
        </Marquee>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .clip-label {
          clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
          width: 122px; /* better fit on mobile */
        }

        @media (min-width: 640px) {
          .clip-label {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
}
