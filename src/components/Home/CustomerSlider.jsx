import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
 {
    name: 'Floyd Miles',
    rating: 4,
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    image: '/public/assets/star1pic.png'
  },
  {
    name: 'Ronald Richards',
    rating: 5,
    description: 'Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    image: '/public/assets/star2pic.png'
  },
  {
    name: 'Savannah Nguyen',
    rating: 4,
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    image: '/public/assets/starpic3.png'
  },
  {
    name: 'Jane Cooper',
    rating: 5,
    description: 'Exceptional service! The team went above and beyond my expectations.',
    image: '/public/assets/star2pic.png'
  },
  {
    name: 'Robert Fox',
    rating: 4,
    description: 'Very professional and efficient. The results were exactly what I was looking for.',
    image: '/public/assets/starpic3.png'
  },
  {
    name: 'Leslie Alexander',
    rating: 5,
    description: 'Outstanding experience from start to finish. The attention to detail was impeccable.',
    image: '/public/assets/star1pic.png'
  },
  {
    name: 'Jenny Wilson',
    rating: 4,
    description: 'Incredible results! The team was responsive and delivered exactly what we needed.',
    image: '/public/assets/starpic3.png'
  },
  {
    name: 'Wade Warren',
    rating: 5,
    description: 'Top-notch service and expertise. They made the process smooth and stress-free.',
    image: '/public/assets/star1pic.png'
  },
  {
    name: 'Cameron Wright',
    rating: 4,
    description: 'Fantastic work! They understood our requirements perfectly and delivered beyond expectations.',
    image: '/public/assets/star2pic.png'
  }];

const CustomerFeedback = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();
  const handleSlide = (index) => swiperRef.current?.slideTo(index * 3); // Navigate to the start of the group

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.on('slideChange', () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
        setActiveIndex(Math.floor(swiper.realIndex / 3)); // Update active index based on the group
      });
    }
  }, []);

  return (
    <div className="text-white font-dm-sans px-4 md:px-8 py-12">
      <div className="text-center md:text-left mb-8 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-[#E2E2E2] text-[24px] md:text-[32px] xl:text-[48px] leading-[28px] md:leading-[36px] xl:leading-[58px]">
            Our Customer Feedback
          </h2>
          <p className="text-[#B0B0B0] text-[14px] md:text-[16px] xl:text-[24px] leading-[18px] md:leading-[24px] xl:leading-[31.25px] max-w-[968px] mb-4 md:mb-10">
            Don't take our word for it. Trust our customers
          </p>
        </div>
        <div className="flex gap-4 justify-center md:justify-start">
          <button
            onClick={handlePrev}
            className={`border hover:bg-gray-600 text-white font-bold rounded-md focus:outline-none border-[1.33px] ${
              isBeginning ? 'opacity-50 cursor-not-allowed' : ''
            } w-[100px] h-[40px] sm:w-[110px] sm:h-[44px] md:w-[123px] md:h-[48px] p-2 sm:p-3 md:pt-[8px] md:pr-[16px] md:pb-[8px] md:pl-[16px]`}
            disabled={isBeginning}
          >
            <span className="text-[#9BD609]">&lt;</span> Previous
          </button>
          <button
            onClick={handleNext}
            className={`border hover:bg-gray-600 text-white font-bold rounded-md focus:outline-none border-[1.33px] ${
              isEnd ? 'opacity-50 cursor-not-allowed' : ''
            } w-[90px] h-[40px] sm:w-[100px] sm:h-[44px] md:w-[113px] md:h-[48px] p-2 sm:p-3 md:pt-[8px] md:pr-[16px] md:pb-[8px] md:pl-[16px]`}
            disabled={isEnd}
          >
            Next <span className="text-[#9BD609]">&gt;</span>
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true, bulletClass: 'custom-bullet', bulletActiveClass: 'custom-bullet-active' }}
        onSlideChange={(swiper) => setActiveIndex(Math.floor(swiper.realIndex / 3))}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg p-6 border flex flex-col md:h-[300px] lg:h-[389px] pb-3">
              <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:justify-between md:items-center pb-4">
                <img src={t.image} alt={t.name} className="w-16 h-16 lg:w-[80px] lg:h-[80px] mb-4 md:mb-0" />
                <div className="flex space-x-1">
                  {'★'.repeat(t.rating).padEnd(5, '☆').split('').map((s, i) => (
                    <span key={i} className={`${s === '★' ? 'text-yellow-500' : 'text-gray-500'} text-[24px] md:text-[32px]`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <h3 className="font-[Manrope] font-semibold text-[24px] md:text-[26px] lg:text-[29.33px] leading-[32px] md:leading-[36px] lg:leading-[40.07px] tracking-[2%] text-center">
                  {t.name}
                </h3>
                <p
                  className="font-[DM_Sans] font-medium text-[14px] leading-[20px] tracking-[2%] sm:text-[16px] sm:leading-[22px] md:text-[18px] md:leading-[24px] lg:text-[21.33px] lg:leading-[27.78px] lg:max-w-[483.56px] lg:max-h-[173.33px] md:max-h-[113.33px] overflow-hidden text-ellipsis m-1 md:m-6"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 6,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {t.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-2 mt-10">
        {[...Array(Math.ceil(testimonials.length / 3)).keys()].map((btnIndex) => (
          <button
            key={btnIndex}
            onClick={() => handleSlide(btnIndex)}
            className={`w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full ${
              activeIndex === btnIndex ? 'bg-[#9BD609]' : 'bg-[#9BD6094D]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;