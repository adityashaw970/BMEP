import {  useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
 
  useEffect(()=>{
    gsap.to(img1Ref.current, {
      perspective: 800,
      rotateY: 15,
      rotateX: 1,
      y: 15,
      scale: 1.2,
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.01,
      ease: "easeInOut",
      scrollTrigger: {
        scrub: true,
        trigger: "#achieve",
        start: "top 10%",
        end: "top 18%",
        pin: true,
        // markers:true,
      },
    }),
    gsap.to(img2Ref.current, {
          perspective: 800,
          rotateY: -15,
          rotateX: 2,
          y: 15,
          scale: 1.2,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.01,
          ease: "easeInOut",
          scrollTrigger: {
            scrub: true,
            trigger: "#achieve",
            start: "top 10%",
            end: "top 18%",
            pin: true,
            // markers:true,
          },
        });
  },[])

  useEffect(()=>{

    if(window.innerWidth>=1024){
      gsap.to("#achieve",{
        scrollTrigger:{
          trigger:"#achieve",
          scroller:"body",
          start:"top top",
          end:"bottom", 
          pin:true,
          scrub:5,
        }
      })

    }else{
      // gsap.to("#achieve",{
      //   scrollTrigger:{
      //     trigger:"#achieve",
      //     start:"top",
      //     end:"bottom top", 
      //     pin:true,
      //     scrub:5,
      //     markers:true
      //   }
      // })
    }
  },[]);

  return (
    <section id="achievements">
      
      <div id="achieve" className=" relative z-2 w-full h-[90vh] lg:h-[50vw] flex flex-col  justify-evenly lg:flex-row items-center py-[2vw] bg-zinc-900 border-white "
      >
        <h1 className="uppercase text-[5vh] lg:text-[5vw] absolute top-[2%] text-white flex justify-center items-center w-full ">Achievements</h1>
        <img ref={img1Ref} className="relative  left-[-5vw] lg:left-[0vw] rounded-[5vw] lg:rounded-[2vw] h-[25vh] w-[25vh] lg:h-[22.5vw] lg:w-[26vw] object-cover opacity-50 blur-sm transition-all ease-in-out duration-500 shadow-[10px_10px_60px_10px_#787876]"
          src="https://res.cloudinary.com/dke15c3sv/image/upload/v1746305198/a-1_1_dpreoz.jpg"
          alt=""
          style={{
            transform:
              "perspective(700px) rotateY(-25deg) scale(0.9) rotateX(10deg)",
          }}
        />

        
        <img ref={img2Ref} className="relative  left-[5vw] lg:left-[0vw] rounded-[5vw] lg:rounded-[2vw] h-[25vh] w-[25vh] lg:h-[22.5vw] lg:w-[26vw] object-cover opacity-50 blur-sm transition-all ease-in-out duration-500 shadow-[10px_10px_60px_10px_#787876]"
          src="https://res.cloudinary.com/dke15c3sv/image/upload/v1746305198/a-1_2_kxo7lq.jpg"
          alt=""
          style={{
            transform:
              "perspective(700px) rotateY(25deg) scale(0.9) rotateX(10deg)",
          }}/>


      </div>
    </section>
  );
};

export default Achievements;
