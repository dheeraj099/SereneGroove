"use client";

import Footer from "@/app/common/Footer";
import Header from "@/app/common/Header";
import villasData from "@/app/villa_description.json";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLayoutEffect } from "react";
const dummyImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661962510600-6c61b1aa7b0b?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661317306727-64c7a1339a6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function VillasPage({ params }: { params: { villas: string } }) {
  // console.log("villadetails::",villaId)
  // console.log("params::",params.value)
  console.log("params::",params)
  const villaName = decodeURIComponent(params.villas);
  console.log("villaName::",params.villas)
  const [isReady, setIsReady] = useState(false);
  console.log("villaName::",villaName)
  const villaData = villasData.find(villa => villa.villa === villaName);
  console.log("villaData::",villaData)
  // const [villaData, setVillaData] = useState(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset:['start', 'end'] });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vh", `-${(dummyImages.length - 1) * 105.85}vh`] // 40vh per image for parallax
  );

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
    window.scrollTo(0, 0);
    setIsReady(true);
  }, []);

  const smoothParallaxY = useSpring(parallaxY, {
    stiffness: 80,
    damping: 40,
  });
  return (
    <>
      {/* Fixed Header */}
      <div className="top-0 left-0 w-full z-50 bg-white fixed ">
        <Header />
      </div>

      {/* Main Scroll Container, with top padding equal to header height */}
      <div
        className="min-h-[600vh] w-full sticky  " // pt-16 if header is h-16 (64px)
        ref={scrollRef}
      >
        <div className="grid grid-cols-[25%_50%_25%] gap-8 w-full items-start px-12   sticky top-0">
          {/* Left Column - Product Info */}
          <div className="sticky top-16 self-start h-full max-h-screen flex justify-center flex-col pt-[130px]">
            <h2 className="text-4xl font-extrabold text-text">{villaName}</h2>
            <span className="text-sm text-text font-semibold">
              {villaData?.capacity}
            </span>
            <p className="text-text text-lg mt-4">
            {villaData?.description}
              
            </p>
          </div>

          {/* Center Column - Vertical Image Carousel */}
          <div className="sticky top-0 h-screen overflow-hidden  ">
            {isReady && (<motion.div style={{ y: smoothParallaxY }}   initial={false}  className="flex flex-col gap-2 py-[130px]  ">
              {dummyImages.map((src, idx) => (
                <img
                  key={idx}
                  src={`${src}?auto=format&fit=crop&w=800&q=80`}
                  alt={`villa-${idx}`}
                  className="h-screen w-full object-cover rounded-3xl"
                />
              ))}
            </motion.div>
            )}
          </div>

          {/* Right Column - Booking Info (unchanged) */}
          <div className="sticky top-12 self-start h-full max-h-screen max-w-[93%] flex justify-center flex-col pt-[130px]">
            <div>
              <div className="flex items-center justify-between text-sm text-gray-700 w-fit ">
                <span className="text-4xl font-extrabold text-text">
                  ₹3200{" "}
                  <span className="text-text text-sm font-normal">
                    per night
                  </span>
                </span>
              </div>
              <div className="flex flex-col mt-2">
                <span className="text-sm font-semibold text-text">
                  Find your space in the heart of Wayanad.
                </span>
                <span className="text-sm font-semibold text-text">
                  Reserve now
                </span>
                <div className="flex flex-col mt-5">
                  <span className="text-sm text-[#49454F]">
                    Your Stay Duration
                  </span>
                  <div className="flex gap-2">
                    <div className="flex py-4 px-6 rounded-sm border border-[#E4E4E4]">
                      <span className="text-sm text-[#49454F]">
                        21 April 25 to 26 April 25
                      </span>
                    </div>
                    <div className="flex py-4 px-6 rounded-sm border border-[#E4E4E4] items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                      >
                        <path
                          d="M11.6923 16C11.0499 16 10.5048 15.776 10.0568 15.328C9.60875 14.8798 9.38475 14.3346 9.38475 13.6923C9.38475 13.0499 9.60875 12.5048 10.0568 12.0568C10.5048 11.6088 11.0499 11.3848 11.6923 11.3848C12.3346 11.3848 12.8798 11.6088 13.328 12.0568C13.776 12.5048 14 13.0499 14 13.6923C14 14.3346 13.776 14.8798 13.328 15.328C12.8798 15.776 12.3346 16 11.6923 16ZM2.30775 19.5C1.80258 19.5 1.375 19.325 1.025 18.975C0.675 18.625 0.5 18.1974 0.5 17.6923V4.30777C0.5 3.8026 0.675 3.37502 1.025 3.02502C1.375 2.67502 1.80258 2.50002 2.30775 2.50002H3.69225V0.384766H5.23075V2.50002H12.8077V0.384766H14.3077V2.50002H15.6923C16.1974 2.50002 16.625 2.67502 16.975 3.02502C17.325 3.37502 17.5 3.8026 17.5 4.30777V17.6923C17.5 18.1974 17.325 18.625 16.975 18.975C16.625 19.325 16.1974 19.5 15.6923 19.5H2.30775ZM2.30775 18H15.6923C15.7692 18 15.8398 17.9679 15.9038 17.9038C15.9679 17.8398 16 17.7693 16 17.6923V8.30777H2V17.6923C2 17.7693 2.03208 17.8398 2.09625 17.9038C2.16025 17.9679 2.23075 18 2.30775 18Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-5">
                  <span className="text-sm text-[#49454F]">
                  Total Guests
                  </span>
                  <div className="flex gap-2">
                    <div className="flex py-4 px-6 rounded-sm border border-[#E4E4E4]">
                      <span className="text-sm text-[#49454F]">
                        -
                      </span>
                    </div>
                    <div className="flex py-4 px-6 rounded-sm border border-[#E4E4E4]">
                      <span className="text-sm text-[#49454F]">
                        04
                      </span>
                    </div>
                    <div className="flex py-4 px-6 rounded-sm border border-[#E4E4E4]">
                      <span className="text-sm text-[#49454F]">
                        +
                      </span>
                    </div>
                    
                  </div>
                </div>
                <button className="bg-accent text-sm font-semibold text-white py-2 rounded-3xl mt-5">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
