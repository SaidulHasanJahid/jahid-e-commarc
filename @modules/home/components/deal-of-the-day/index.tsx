import Image from 'next/image';

export default function DealOfTheDay() {
  return (
    <section className="bg-gray-50 py-12 w-full transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            DEAL <br /> OF THE DAY
          </h2>
          <div className="w-20 h-0.5 bg-black" />

          <p className="font-semibold text-gray-800 text-md md:text-lg">
            CLICK SHOP NOW FOR ALL DEAL OF THE PRODUCT
          </p>

          <span className="inline-block bg-gray-800 text-white px-2 py-1 text-sm font-semibold rounded">
            50% off
          </span>

          <p className="text-gray-600 text-sm md:text-base">
            Donec condimentum Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras cursus pretium sapien, in pulvinar ipsum molestie id. Aliquam erat volutpat.
            Duis quam tellus, ullamcorper.....
          </p>

          {/* Countdown */}
          <div className="flex gap-4 mt-4">
            {["DAY", "HOUR", "MIN", "SEC"].map((label) => (
              <div
                key={label}
                className="w-20 h-20 border border-gray-300 flex flex-col items-center justify-center"
              >
                <span className="text-xl font-bold">00</span>
                <span className="text-xs text-gray-600">{label}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-all">
            SHOP NOW
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full flex justify-center items-center">
          {/* Background geometric pattern (optional enhancement) */}
          <div className="absolute w-[400px] h-[400px] border-4 border-white border-opacity-20 rotate-45 z-0"></div>

          <Image
          src="https://eco.rafiinternational.com/assets/images/164743040383png.png"
            alt="Shoe"
            width={500}
            height={500}
            className="relative z-10 object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
