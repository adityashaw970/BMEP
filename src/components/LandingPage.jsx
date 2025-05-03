// components/LandingPage.jsx


import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303509/IMG_4538_mhkjsw.jpg", r: 1, c: 7 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303504/IMG_2669_vf45jy.jpg", r: 1, c: 2 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303503/IMG_20241020_113155_1_u6fhhe.jpg", r: 2, c: 6 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303497/pg-9.jpeg_khocj8.jpg", r: 2, c: 1 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303498/pg-11.jpeg_nmb8ik.jpg", r: 2, c: 4 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303497/pg-8.jpeg_xlbmw8.jpg", r: 3, c: 4 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303502/DSC03714_1_wdsr1t.jpg", r: 3, c: 2 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303499/WhatsApp_Image_2025-03-18_at_19.22.27_ae963dc2-min_czzu45.jpg", r: 3, c: 7 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303502/IMG_2548_ju9bki.jpg", r: 4, c: 5 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303499/pic1_dfaikc.jpg", r: 4, c: 1 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303499/WhatsApp_Image_2025-03-18_at_19.24.58_4705f3e0-min_emdxzi.jpg", r: 4, c: 8 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303500/WhatsApp_Image_2025-03-18_at_19.22.37_5555b4cb-min_fes1j5.jpg", r: 5, c: 6 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303500/WhatsApp_Image_2025-03-18_at_19.25.40_d9fa5452-min_lfraox.jpg", r: 5, c: 4 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303500/WhatsApp_Image_2025-03-22_at_21.49.24_353e70ca-min_yhparc.jpg", r: 5, c: 2 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303500/WhatsApp_Image_2025-03-18_at_19.05.39_9a98e3f3-min_ab3o4o.jpg", r: 6, c: 2 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303500/WhatsApp_Image_2025-03-18_at_20.26.48_510db152-min_kg6op9.jpg", r: 6, c: 8 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303501/bmep-img-1_t6tr8p.jpg", r: 7, c: 7 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303502/IMG_2269_unf92k.jpg", r: 7, c: 4 },
  { src: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746303502/DSC03714_1_wdsr1t.jpg", r: 7, c: 1 },
];

export default function LandingPage() {

  useEffect(() => {
    // Landing Page Animation
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline();
      let xTransform = gsap.utils.random(-100, 100);

      tl.set(image, {
        transformOrigin: `${xTransform < 0 ? "0" : "100%"}`
      }, "start")
        .to(image, {
          scale: 0,
          ease: "none",
          scrollTrigger: {
            trigger: elem,
            scroller: "body",
            start: "top top",
            end: "bottom top",
            scrub: 5,
          },
        }, "start")
        .to(elem, {
          xPercent: xTransform,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scroller: "body",
            scrub: 5,
          },
        }, "start");
    });
  }, []);

  useEffect(()=>{
   gsap.set(".heading h1",{
    y:200,
   });
   gsap.to(".heading h1",{
    y:0,
    duration:.5,
    delay:5
   })
  },[]);

  useEffect(()=>{
    gsap.set(".grid img",{
      opacity:0,
    }),
    gsap.to(".grid img",{
      opacity:1,
      duration:.4,
      stagger:.2,
      delay:6.5
    })
  },[])

 
  return (



    <section
      id="landing_page"
      className="relative w-full pt-[3vh] h-[140vh] lg:h-[140vw] overflow-hidden bg-black font-[KG]"
    >
      {/* Grid */}
      <div className="grid grid-cols-8 auto-rows-auto gap-2 p-4 page1">
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              gridRow: img.r,
              gridColumn: img.c,
            }}
            className="elem col-span-1 row-span-1 opacity-[.4] lg:opacity-[.7] lg:h-[18vw] lg:w-[15vw] h-[18vh] w-[9vh]"
          >
            <img
              src={img.src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Heading overlay */}
      <div className="heading fixed top-[2vw] left-0 flex flex-col items-center justify-center text-white h-screen w-full pointer-events-none z-1 leading-[5vh] lg:leading-[6vw]">
        <div className="overflow-hidden">
          <h1 className="tracking-wider text-[4.5vh] lg:text-[5vw] font-bold mb-4 uppercase font-heading">
            Bihari
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="tracking-wide text-[4.5vh] lg:text-[5vw] font-bold mb-4 uppercase font-heading">
            More Education
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="tracking-wider text-[4.5vh] lg:text-[5vw] font-bold mb-4 uppercase font-heading">
            Project
          </h1>
        </div>
      </div>
    </section>




  );
}
