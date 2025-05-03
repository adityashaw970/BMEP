import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const Event = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const data = [
    {
      src: "https://res.cloudinary.com/dke15c3sv/video/upload/v1746307093/edited_ovia80.mp4",
      title: "DANCE PERFORMANCE IN ARROHAN",
      type: "video",
    },
    {
      src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303497/pg-8.jpeg_xlbmw8.jpg",
      title: "DRAWING COMPETITION",
      type: "image",
    },
    {
      src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303498/pg-7_ff6fp3.jpg",
      title: "PROJECTS IN ARROHAN",
      type: "image",
    },
    {
      src: "https://res.cloudinary.com/dke15c3sv/video/upload/v1746307108/DCXBMEP_2_xhrxf7.mov",
      title: "DANCE PERFORMANCE",
      type: "video",
    },
    {
      src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303499/WhatsApp_Image_2025-03-18_at_19.22.14_7b48d6eb-min_gbq0n8.jpg",
      title: "SANITATION CAMP",
      type: "image",
    },
    {
      src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305200/luminous_iazqh6.jpg",
      title: "LUMINOUS",
      type: "image",
    },
    {
      src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303501/daanutsav-min_w6gw10.jpg",
      title: "DAAN-UTSAV",
      type: "image",
    },
  ];


  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;
    const section = sectionRef.current;
    const totalScroll =
      container.scrollWidth -
      window.innerWidth +
      (container.scrollWidth - window.innerWidth) * 0.03;

    const animation = gsap.to(container, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${container.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      animation.kill();
    };
  }, [isDesktop]);

  
  


  // Mobile View (Swiper)
  if (!isDesktop) {
    return (
      <section id="events">
        <div className="events font-[GillM] bg-orange-400 py-[8vh] relative z-2">
          <h2 className="text-white text-[6vh] text-center font-[GillM] uppercase mb-[5vh]">
            Moments
          </h2>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="px-8"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      controls
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="bg-white text-black text-center py-3 text-lg font-semibold">
                    {item.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }

  

  // Desktop View (GSAP Scroll)
  return (
  
    <>
    
    <section
      id="events"
      ref={sectionRef}
      className="events h-screen bg-[#e28a5a] w-full overflow-hidden relative z-2 py-[10vw] font-[GillM]"
    >
      <h1 className="hidden lg:block absolute text-white text-[3vw] top-[100%] left-[60%] -translate-x-[50%] -translate-y-[50%]">Scroll Down ⬇️</h1>
      <div
        ref={containerRef}
        className="event-container flex gap-[5vw] w-max h-full relative items-center"
      >
        <div className="relative h-[40vw] w-[90vw]">
          <div className="event-icons flex items-center justify-center gap-[3vw] w-full h-full absolute z-10">
            <h4 className="text-[12vw] font-medium text-white font-[GillB] uppercase">
              EveNTS
            </h4>
            <svg
              width="500"
              height="500"
              viewBox="811 240 307 127"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="811"
                y="240"
                width="307"
                height="180"
                fill="transparent"
              />
              <path
                d="M885.964 270.269C885.964 262.112 892.575 255.5 900.731 255.5C908.888 255.5 915.5 262.112 915.5 270.269V381.967C915.5 399.4 929.454 413.626 946.884 413.961C964.795 414.306 979.5 399.881 979.5 381.967V367.331C979.5 350.013 993.539 335.974 1010.86 335.974H1089.27L1069.58 355.657L1080.19 366.265L1117.98 328.474L1080.19 290.683L1069.58 301.29L1089.27 320.974H1010.86C985.255 320.974 964.5 341.729 964.5 367.331V381.967C964.5 391.484 956.688 399.147 947.173 398.964C937.913 398.786 930.5 391.229 930.5 381.967V270.269C930.5 253.828 917.172 240.5 900.731 240.5C884.291 240.5 870.964 253.828 870.964 270.269V281.736C870.964 296.227 859.217 307.974 844.727 307.974H811V322.974H844.727C867.501 322.974 885.964 304.512 885.964 281.736V270.269Z"
                fill="white"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className="relative h-[25vw] w-[40vw] bg-orange-200 rounded-[1vw] flex-shrink-0 mix-blend-difference"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                controls
                className="h-full w-full object-cover rounded-[1vw]"
              />
            ) : (
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover rounded-[1vw]"
              />
            )}
            <div className="w-full relative h-[3.5vw] flex items-end justify-center text-center">
              <h4 className="text-center text-white text-[2.3vw] font-medium leading-[2vw] uppercase">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>

   

    </>

  );
};

export default Event;
