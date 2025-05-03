import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function Loader() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const loadText = useRef(null);
  const loadingDiv = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(loadText.current, {
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    })
      .to(loadText.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          loadText.current.textContent = "नमस्ते";
        },
      })
      .to(loadText.current, {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      })
      .to(loadingDiv.current, {
        y: -1000,
        duration: 1.5,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <>
      {/* Loader */}
      <div
        ref={loadingDiv}
        className="loading h-screen w-full fixed top-0 left-0 z-[100] bg-black text-white font-[GillI] text-[8vh] lg:text-[8vw] uppercase flex justify-center items-center"
      >
        <span ref={loadText} className="opacity-0 text-red-500 font-semibold font-sans">
          Welcome
        </span>
      </div>

      {/* Cursor  */}
      <motion.div
        id="crsr"
        className="fixed rounded-full border-[0.2vw] border-white pointer-events-none mix-blend-difference z-[9999] hidden lg:block"
        style={{
          height: "3.5vw",
          width: "3.5vw",
          left: cursorPosition.x,
          top: cursorPosition.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ left: cursorPosition.x, top: cursorPosition.y }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}
