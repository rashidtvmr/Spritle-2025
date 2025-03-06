import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CarouselSwiper = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const sliderItems = [
    {
      img: "../assets/Rectangle 93092.png",
      text: "How we helped Nestle create personalized nutrition through genetic insights",
    },
    {
      img: "../assets/flight.png",
      text: "Smart Airport Management: Track, Maintain, and Optimize with Precision",
    },
    {
      img: "../assets/run.png",
      text: "A platform for managing and coordinating every sports meet across USA",
    },
    {
      img: "../assets/van.png",
      text: "A major logistics company in the US achieved a 40% reduction in response time.",
    },
    {
      img: "../assets/Rectangle 93092.png",
      text: "Instant Access to Top Cancer Specialists Across the World – Safe & Effortless",
    },
    {
      img: "../assets/computer.png",
      text: "Unlocking Education with Smooth, Engaging Digital Learning",
    },
  ];

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="md:space-y-5 space-y-0 lg:pl-20 md:pl-10 pl-5">
      {/* Heading Section */}
      <div className="font-dm-sans text-heading text-primary">
        Transforming Business
      </div>
      <p className="text-subheading text-secondary w-full md:mb-10 mb-1">
        Transform your business with generative AI → We help businesses start
        their digital journey
      </p>

      {/* Swiper Slider */}
      <div className="overflow-hidden w-full flex flex-col items-start ">
        <div className="relative w-full mx-auto overflow-hidden ">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={false}
            loop={false}
            autoplay={false}
            navigation={{
              prevEl: "#prevBtn",
              nextEl: "#nextBtn",
            }}
            onSlideChange={handleSlideChange}
            className="w-full h-full"
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 80,
              },
            }}
          >
            {sliderItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[797px] slider-item relative overflow-hidden group ">
                  <div className="relative overflow-hidden transition-transform duration-800 ease-in-out group-hover:scale-110 group-hover:shadow-xl w-full h-full ">
                    <img
                      src={item.img}
                      alt="Slide Image"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute bottom-7 left-1/2 xl:left-3/5 xl:-translate-x-[60%] transform -translate-x-1/2 transition  py-2 text-white text-lg text-heading leading-6 sm:leading-8 md:leading-5 lg:leading-[40px] xl:leading-[72px] tracking-tight w-[90%] sm:w-[80%] md:w-[300px] lg:w-[391px] xl:w-[691px] hover:shadow-2xl hover:transition duration-700  slider-text font-[poppins]">
                      {item.text}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 flex-row justify-end items-center w-full mt-6 px-5">
          <button
            id="prevBtn"
            className={`rounded-full flex justify-center items-center bg-[#15AED5] hover:bg-[#15AED5] ${
              isBeginning ? "opacity-50 cursor-not-allowed" : ""
            } w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] p-0 sm:p-2`}
            disabled={isBeginning}
          >
            <img
              src="../assets/arrowcarousel.png"
              alt="Previous"
              className="w-4 p-1 sm:w-5 md:w-6"
            />
          </button>
          <button
            id="nextBtn"
            className={`rounded-full flex justify-center items-center bg-[#15AED5] hover:bg-[#15AED5] text-white ${
              isEnd ? "opacity-50 cursor-not-allowed" : ""
            } w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] p-2 sm:p-2`}
            disabled={isEnd}
          >
            <img
              src="../assets/arrowcar2.png"
              alt="Next"
              className="w-4 p-1 sm:w-5 md:w-6"
            />
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
        .slider-text {
          position: absolute;
          text-align: left;
          padding-right: 30px;
        }

        .slider-item:hover .slider-text {
          text-shadow: 4px 14px 18px rgba(0, 0, 0, 0.9);
          filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.8))
            drop-shadow(0 0 70px rgba(0, 0, 0, 0.8));
          transform: translateX(40px);
           boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
        }

        .slider-item:hover .slider-text::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.2);
          z-index: -1;
          filter: blur(50px);
          border-radius: 10px;
        }

        .slider-text::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: transparent;
          white-space: normal;
          text-shadow: 6px 6px 15px rgba(0, 0, 0, 1), -6px -6px 10px rgba(0, 0, 0, 1);
        }

        .swiper-slide {
          opacity: 1;
          transition: opacity 0.5s ease;
        }

        .swiper-container {
          padding-left: 20px;
        }

        @media (min-width: 768px) {
          .swiper-container {
            padding-left: 30px;
          }
        }

        @media (min-width: 1024px) {
          .swiper-container {
            padding-left: 80px;
          }
        }
      `}
      </style>
    </div>
  );
};

export default CarouselSwiper;
