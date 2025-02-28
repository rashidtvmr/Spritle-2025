import React, { useEffect, useRef, useState } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

register();

const ImageSlider = () => {
  const swiperElRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { text: "Spritle's Gen AI solutions drive operational cost savings for our clients", img: "../assets/20995.png" },
    { text: "We help businesses improve efficiency using Vision AI", img: "../assets/30713.png" },
    { text: "Spritle simplifies & accelerates digital transformation for your business", img: "../assets/30714.png" },
    { text: "Spritle simplifies & accelerates digital transformation for your business", img: "../assets/2151790123.png" },
    { text: "We are the official partners of Nvidia & Google", img: "../assets/20995 (1).png" },
    { text: "With 15+ years of experience, we create custom apps that transform your business", img: "../assets/30713 (1).png" }
  ];

  useEffect(() => {
    const swiperParams = {
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0, // Default gap (adjusted in breakpoints)
        depth: 100,
        modifier: 1.5,
        slideShadows: false,
      },
      breakpoints: {
        // Mobile (up to 650px)
        320: {
          coverflowEffect: {
            stretch: 50, // No gap on mobile
            modifier: 1, // Reduce modifier for a better look
          },
        },
        // Tablet (651px to 1023px)
        651: {
          coverflowEffect: {
            stretch: 50, // Smaller gap on tablet
            depth: 100, // Restore depth
            modifier: 1.5, // Restore modifier
          },
        },
        // Desktop (1024px and above)
        1024: {
          coverflowEffect: {
            stretch: 107, // Original gap for desktop
          },
        },
      },
      on: {
        slideChange: (swiper) => setActiveIndex(swiper.realIndex), // Update active index
      },
    };

    Object.assign(swiperElRef.current, swiperParams);
    swiperElRef.current.initialize();
  }, []);

  return (
    <div className="relative w-full overflow-hidden flex justify-center items-center md:space-y-5 space-y-2">
      <swiper-container ref={swiperElRef} class="w-full h-full" init="false">
        {slides.map((slide, index) => (
          <swiper-slide key={index}>
            <div className="relative">
              {/* Text container */}
              <div
                className="flex justify-center items-center mb-[10px] transition-opacity duration-500"
                style={{ opacity: activeIndex === index ? 1 : 0, width: '100%', maxWidth: '900px', maxHeight: '180px', margin: '0 auto' }}
              >
                <p className="text-[#F5F5F5] text-center lg:pb-5 pb-2 font-dm-sans lg:font-medium font-light text-[12px] sm:text-lg md:text-xl lg:text-[48px] leading-[1.1] xl:leading-[62.5px] lg:pt-10 pt-0">
                  {slide.text}
                </p>
              </div>

              {/* Image */}
              <div className="relative h-full">
                <img
                  src={slide.img}
                  alt={slide.text}
                  className="object-contain rounded-xl shadow-xl mx-auto md:h-auto w-full h-[20vh]"
                  style={{  maxWidth: '100%', maxHeight: '657px', }}
                />
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>

      <style jsx global>{`
      
        swiper-slide {
          width: 80% !important;
          height: auto !important;
          opacity: 0.5 !important;
          transition: all 1000ms ease !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }

        @media (min-width: 320px) {
          swiper-slide {
            max-width: 70% !important;
            max-height: 45vh !important; /* Adjusted height for mobile */
          }
        }

        @media (min-width: 651px) {
          swiper-slide {
            max-width: 70% !important;
            max-height: 55vh !important; /* Adjusted height for tablet */
          }
        }

        @media (min-width: 1024px) {
          swiper-slide {
            max-width: 1457px !important;
            max-height: 80vh !important; /* Adjusted height for desktop */
          }
        }

        swiper-slide.swiper-slide-active {
          opacity: 1 !important;
          transform: scale(1) !important;
        }

        swiper-slide.swiper-slide-prev,
        swiper-slide.swiper-slide-next {
          opacity: 0.5 !important;
          transform: scale(0.85) !important;
        }

        .swiper-wrapper {
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;