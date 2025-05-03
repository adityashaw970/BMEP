import React from 'react';
import FooterQuery from './FooterQuery';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full z-2 ">
      {/* Footer Query */}

      <FooterQuery />

      

      {/* Footer */}
      <footer className="relative w-full bg-black flex flex-col items-center justify-center border-b-4 border-white lg:h-[20vw] lg:justify-start font-[GillM] py-[5vh] lg:py-[2vw]">
        <h2 className="text-white text-[3vh] leading-[6vw] lg:text-[2vw] hidden lg:block">
          For more updates, below are our socials:
        </h2>
       
        <div className="w-full lg:h-[20%] flex flex-col justify-center items-center gap-5 lg:gap-[10%] py-[2vw] lg:py-[0vw]">
            <h3 className="text-[12vw] text-[5vh] lg:text-[3.5vw] font-medium flex gap-10 lg:gap-4">
            <a href="https://www.instagram.com/bmep_nitdgp/" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-line text-pink-400"></i>
              </a>
              
              <a href="https://www.facebook.com/BMEP.NITD/" target="_blank" rel="noopener noreferrer">
                <i className="ri-facebook-box-fill text-blue-400"></i>
              </a>
              <a href="https://youtu.be/L2QH__g9584?si=9cDHo52wARVEOSug" target="_blank" rel="noopener noreferrer">
                <i className="ri-youtube-fill text-red-500"></i>
              </a>
              <a href="https://www.linkedin.com/company/bihari-more-education-project/" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-fill text-blue-800"></i>
              </a> </h3>
          </div>
        <h4 className="text-[#ffccffcc] text-[2.3vh] mt-4 lg:text-[2vw]">
          &copy; 2025: Designed by  <span className='text-red-500 font-bold'> BMEP WEBD</span> Team
        </h4>
      </footer>
    </section>
  );
};

export default Contact;
