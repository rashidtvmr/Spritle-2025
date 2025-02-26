import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ImageSlider = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const sliderItems = [
    {
      img: "/assets/Rectangle 93092.png",
      text: "How we helped Nestle create personalized nutrition through genetic insights",
    },
    {
      img: "/assets/flight.png",
      text: "Smart Airport Management: Track, Maintain, and Optimize with Precision",
    },
    {
      img: "/assets/run.png",
      text: "A platform for managing and coordinating every sports meet across USA",
    },
    {
      img: "/assets/van.png",
      text: "A major logistics company in the US achieved a 40% reduction in response time.",
    },
    {
      img: "/assets/doctor.png",
      text: "Instant Access to Top Cancer Specialists Across the World – Safe & Effortless",
    },
    {
      img: "/assets/computer.png",
      text: "Unlocking Education with Smooth, Engaging Digital Learning",
    },
  ];

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="md:space-y-5 space-y-0" >
      {/* Heading Section */}
      <div className="text-[#E2E2E2] font-dm-sans font-medium text-[18px] xl:text-[48px]">
        Transforming Business
      </div>
      <p className="text-[#B0B0B0] font-dm-sans text-[14px] xl:text-[34px] tracking-small xl:tracking-widest w-full md:mb-10 mb-1 font-normal">
        Transform your business with generative AI → We help businesses start their digital journey
      </p>

      {/* Swiper Slider */}
      <div className="overflow-hidden w-full flex flex-col items-start">
        <div className="relative w-full mx-auto overflow-hidden">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={false}
            loop={false}
            navigation={{
              prevEl: '#prevBtn',
              nextEl: '#nextBtn',
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
                <div className="flex w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[797px] slider-item relative overflow-hidden group">
                  <div className="relative overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:shadow-xl w-full h-full">
                    <img
                      src={item.img}
                      alt="Slide Image"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute bottom-7 left-1/2 xl:left-1/2 xl:-translate-x-[60%] transform -translate-x-1/2 transition duration-300 py-2 text-white text-lg sm:text-l md:text-xl lg:text-2xl xl:text-[48px] leading-6 sm:leading-8 md:leading-5 lg:leading-[60px] xl:leading-[72px] tracking-tight w-[90%] sm:w-[80%] md:w-[300px] lg:w-[391px] xl:w-[591px] hover:shadow-xl slider-text">
                      {item.text}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
       <div className="flex gap-3 flex-row justify-end items-center w-full mt-6">
  <button
    id="prevBtn"
    className={`rounded-full flex justify-center items-center bg-[#15AED5] hover:bg-[#15AED5] ${
      isBeginning ? 'opacity-50 cursor-not-allowed' : ''
    } w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] p-2 sm:p-2`}
    disabled={isBeginning}
  >
    <img src="/assets/arrowcarousel.png" alt="Previous" className="w-4 sm:w-5 md:w-6" />
  </button>
  <button
    id="nextBtn"
    className={`rounded-full flex justify-center items-center bg-[#15AED5] hover:bg-[#15AED5] text-white ${
      isEnd ? 'opacity-50 cursor-not-allowed' : ''
    }  w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] p-2 sm:p-2`}
    disabled={isEnd}
  >
    <img src="/assets/arrowcar2.png" alt="Next" className="w-4 sm:w-5 md:w-6" />
  </button>
</div>

      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .slider-text {
          position: absolute;
          text-align: left;
          padding-right: 30px;
        }

        .slider-item:hover .slider-text {
          text-shadow: 4px 14px 18px rgba(0, 0, 0, 0.9);
          filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.8))
            drop-shadow(0 0 30px rgba(0, 0, 0, 0.8));
          transform: translateX(30px);
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
      `}</style>
    </div>
  );
};

export default ImageSlider;