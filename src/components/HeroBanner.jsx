export default function HeroBanner() {
    return (
      <div className="relative h-[300px] w-full bg-cover bg-center bg-[url('/Cover-Photo.jpg')]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10" />
  
        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Immigration. With less complication.
          </h1>
        </div>
      </div>
    );
  }
  