import Image from 'next/image';

export default function DealOfTheDay() {
  const partners = [
  { src: 'https://eco.rafiinternational.com/assets/images/partner/1571289583p1.jpg', alt: 'Acer' },
  { src: 'https://eco.rafiinternational.com/assets/images/partner/1571289601p2.jpg', alt: 'Samsung' },
  { src: 'https://eco.rafiinternational.com/assets/images/partner/1571289608p3.jpg', alt: 'Nokia' },
  { src: 'https://eco.rafiinternational.com/assets/images/partner/1571289614p4.jpg', alt: 'Sony' },
  { src: 'https://eco.rafiinternational.com/assets/images/partner/1571289621p5.jpg', alt: 'Xiaomi' },
  { src: 'https://eco.rafiinternational.com/assets/images/partner/1571289627p6.jpg', alt: 'Ticwatch' },
  { src: 'https://eco.rafiinternational.com/assets/images/partner/1571289634p7.jpg', alt: 'Lemfo' },
  { src: 'https://eco.rafiinternational.com/assets/images/partner/1571289642p8.jpg', alt: 'Lenovo' },
  { src: 'https://eco.rafiinternational.com/assets/images/partner/1571289650p9.jpg', alt: 'Huawei' },
  { src: 'https://eco.rafiinternational.com/assets/images/partner/1571289657p10.jpg', alt: 'Adyce' },
  { src: 'https://eco.rafiinternational.com/assets/images/partner/1571289669p12.jpg', alt: 'Nike' },
  { src: 'https://eco.rafiinternational.com/assets/images/partner/1571289675p13.jpg', alt: 'Genius Ocean' },
];
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
            className="relative z-10 object-contain drop-shadow-xl cursor-pointer"
          />
        </div>
      </div>
    <section className=" px-4 sm:px-8 lg:px-20 text-center bg-gray-50 py-12 w-full transition-all duration-500">
      <h2 className="text-3xl font-bold mb-2 text-gray-900">Our Partners</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
        excepteur voluptate velit ipsum esse enim.
      </p>

      <div className=" w-[80%] lg:mx-[200px] md:mx-[200px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4  shadow hover:shadow-lg transition rounded"
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={120}
              height={60}
              className="object-contain h-12  w-full "
            />
          </div>
        ))}
      </div>
    </section>

      
    </section>

    
  );
}
