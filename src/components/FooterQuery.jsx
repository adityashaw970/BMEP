import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const FooterQuery = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    // Check if fields are filled
    if (!name || !email || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const service ='service_m7qcdv1';
    const template='template_sfb0d7u';
    const publickey='bVdnoXvXGIWjhJ__N';
    emailjs
      .sendForm(service, template, form.current, publickey)
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
        window.location.reload(); // Reload the page after submission
      })
      .catch((error) => {
        console.error('Failed to send:', error.text);
        alert('Failed to send message: ' + error.text);
      });
  };

  return (
    <div className="footer-query h-[60vh] w-full flex flex-col lg:flex-row items-center justify-center bg-black relative lg:h-[60vh]">
      
      {/* Left Part */}
      <div className="h-full flex items-center justify-end relative lg:h-1/2 lg:w-[40%] text-[5vh] lg:text-[4vw] font-bold text-[#ffccffcc] font-[GillI]">
        <h1>Let Us Know <br />
          <span><span className='text-red-600'>Your </span>Thoughts</span>
        </h1>
      </div>

      {/* Right Part */}
      <div className="query-part-right h-full w-full flex flex-col items-center justify-center lg:w-[60%] lg:px-[3vw]">
        <form ref={form} onSubmit={sendEmail} className="form flex flex-col items-center justify-center lg:h-[55%] lg:w-[80%] font-[GillI]">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="bg-transparent py-[5vh] text-[3vh] h-[1vw] lg:w-[75%] border-b border-[#787876] text-[#787876] outline-none lg:py-[2.3vw] lg:text-[1.8vw]"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email-id"
            className="bg-transparent py-[5vh] text-[3vh] h-[1vw] lg:w-[75%] border-b border-[#787876] text-[#787876] outline-none lg:py-[2.3vw] lg:text-[1.8vw]"
          />
          <input
            name="message"
            placeholder="Message"
            className="bg-transparent py-[3vh] text-[3vh] lg:w-[75%] border-b border-[#787876] text-[#787876] lg:py-[1.5vw] lg:text-[1.8vw] outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 rounded-full text-white text-[3vh] cursor-pointer lg:mt-[3.3vw] mt-[5vh] h-[5vh] w-[30vh] border-0 outline-0 lg:h-[7vw]  lg:w-[15vw] lg:text-[1.5vw] font-semibold active:scale-[1.08] hover:scale-[1.05] mb-[3vh] lg:mb-[0vw]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default FooterQuery;

