
import Image from 'next/image';
import { TfiLayoutLineSolid } from "react-icons/tfi";

export default function LatestPost() {
  return (
    <section className="w-full bg-white py-16 flex flex-col items-center">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-[36px] font-bold text-[#141926] mb-4">Latest Post</h2>
        <p className="text-[#767678] text-[17px] font-medium">
          Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
          excepteur voluptate velit ipsum esse enim.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-30 max-w-7xl w-4/5">
        {/* Card 1 */}
        <div className="w-[500px] group cursor-pointer">
          <div className="overflow-hidden">
            <Image
              src="https://eco.rafiinternational.com/assets/images/blogs/164543402825png.png"
              alt="Post 1"
              width={500}
              height={300}
              className="rounded-sm group-hover:scale-105 transition-transform duration-500 object-cover"
            />
          </div>
          <div className="text-center mt-6">
            <h3 className=" font-bold text-[30px] text-gray-900 mb-2">
              How to design effective arts?
            </h3>
            <p className="text-sm text-gray-500 mb-4">03 JAN, 2019</p>
            <div className="flex items-left justify-left gap-3 text-xs font-medium tracking-widest text-gray-900">
              <TfiLayoutLineSolid className="w- mt-[3px]" />
              <span>READ MORE</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[500px] group cursor-pointer">
          <div className="overflow-hidden">
            <Image
              src="https://eco.rafiinternational.com/assets/images/blogs/16454339504png.png"
              alt="Post 2"
              width={500}
              height={300}
              className="rounded-sm group-hover:scale-105 transition-transform duration-500 object-cover"
            />
          </div>
          <div className="text-center mt-6">
            <h3 className="text-[30px] font-bold text-gray-900 mb-2">
              How to design effective arts?
            </h3>
            <p className="text-sm text-gray-500 mb-6">03 JAN, 2019</p>
            <div className="flex items-left justify-left gap-3 text-xs font-medium tracking-widest text-gray-900">
              <TfiLayoutLineSolid className="w- mt-[3px]" />
              <span className='text-[15px] text-[rgb(27, 27, 30)]'>READ MORE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
