import React, { useEffect } from "react";
import gsap from "gsap";
const About=()=>{
    
    useEffect(()=>{
        gsap.set(".about h1",{
            y:-200,
        }),
        gsap.to(".about h1",{
            y:0,
            duration:.4,
            scrollTrigger:{
              trigger:".about",
                // markers:true,
                start:"top 50%",
                end:"top 30%",
                scrub:5,
            }
        })
        gsap.set(".about p",{
            y:200,
        }),
        gsap.to(".about p",{
            y:0,
            duration:.4,
            scrollTrigger:{
              trigger:".about",
                // markers:true,
                start:"top 50%",
                end:"top 30%",
                scrub:5,
            }
        })
    });

    return(
        <>
        
        <section id="about_us">
        <div className="about  lg:h-[45vw] bg-[#dadada] w-full flex flex-col py-[5vw] items-center relative gap-[1vw] overflow-hidden z-2" id="about">
        <h1 className="text-[6.5vh] lg:text-[6vw] font-semibold uppercase">About</h1>
        <p className="w-[90%] lg:h-[20vw] text-center text-[2vh] lg:text-[2vw] relative font-[GillL] font-semibold ">The Bihari More Education Project is a dedicated NGO committed to transforming the lives of underprivileged students through education. We believe that every child deserves access to quality education, regardless of their economic background. Our mission is to identify talented but financially constrained students and provide them with the resources, mentorship, and support they need to pursue their academic dreams. Through our various programs, we offer tutoring, educational materials to help bridge the educational gap and create pathways to success for students in need. Together, we can make quality education accessible to all and empower the next generation of leaders from our community.</p>
       </div>

    
        </section>
        </>
    );
}
export default About;