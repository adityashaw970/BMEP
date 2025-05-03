import { useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import { Menu } from "lucide-react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navbar animation
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#navbar-part2 a,#navbar-part2 span", {
      y: -120,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out",
      delay: 5.8,
    });
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <nav className="bg-black top-0 left-0 h-[30vw] lg:h-[12vw] w-full flex items-center justify-between px-[5vw] font-[GillM] relative z-2">
      
        <div className="lg:h-[4vw] lg:w-[5vw] w-[12vw] ">
          <Link to="/"><img src="./logo.jpg" alt="Logo" className="object-cover rounded-full" /></Link>
        </div>

        {/* Navbar Links for Desktop */}
        <div
          id="navbar-part2"
          className="hidden lg:flex gap-[5vw] text-white lg:text-[2.3vw] font-semibold font-[GillM]"
        >
          <Link to="/" className="hover:text-orange-300"><span>Home</span></Link>
          <Link to="/" className="hover:text-orange-300">
            <span
              onClick={() => scrollToSection("about_us")}
              className=" cursor-pointer"
            >
              About
            </span>
          </Link>
          <Link to="/" className="hover:text-orange-300">
            <span
              onClick={() => scrollToSection("events")}
              className="cursor-pointer"
            >
              Events
            </span>
          </Link>
          <Link to="/" className="hover:text-orange-300">
            <span
              onClick={() => scrollToSection("team")}
              className="hover:text-orange-300 cursor-pointer"
            >Our Team
            </span>
          </Link>
          <Link to="/" className="hover:text-orange-300">
            <span
              onClick={() => scrollToSection("contact")}
              className="hover:text-orange-300 cursor-pointer"
            > Contact
            </span>
          </Link>
        </div>

      {/* nitdgp Logo */}
      <div className="hidden lg:flex lg:h-[4vw] lg:w-[6vw] w-[14vw] items-center justify-center">
  <a href="https://nitdgp.ac.in/" target="_blank" rel="noopener noreferrer">
    <img src="https://media.collegedekho.com/media/img/institute/logo/NIT_Durgapur_logo.png" alt="NIT Durgapur Logo" className="object-cover" />
  </a>
      </div>

        {/* Hamburger (Mobile only) */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 border-2 border-white rounded-md shadow-md hover:bg-gray-300"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </nav>

      {/* Hamburger Menu Content */}
      {isMenuOpen && (
        <div className="absolute top-[25vw] right-[5vw] w-[50vw] bg-black text-white rounded-lg shadow-lg py-[3vw] px-[7vw] z-30 flex flex-col gap-3 lg:hidden text-center border border-2">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="border-b-2 py-[1.2vw]"
          >
            Home
          </Link>
          <Link to="/" className="border-b-2 py-[1.2vw] ">
            <span
              onClick={() => scrollToSection("about_us")}
            >
              About
            </span></Link>
            <Link to="/" className="border-b-2 py-[1.2vw]">
            <span
              onClick={() => scrollToSection("events")}
            >
              Events
            </span>
          </Link>
          <Link
            to="/team"
            onClick={() => setIsMenuOpen(false)}
            className="border-b-2 py-[1.2vw]"
          >
            Team
          </Link>
          <Link to="/" className="py-[1vw]">
            <span
              onClick={() => scrollToSection("contact")}
              
            >
              Contact
            </span>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;



// <Link to="/" onClick={() => scrollToSection("events")}
//             className="border-b-2 r py-[1.2vw]"
//           >Events
//           </Link>
