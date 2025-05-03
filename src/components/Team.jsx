
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  const data = [
    {
      img: "https://media.licdn.com/dms/image/v2/D5635AQHwn7EgttOjZg/profile-framedphoto-shrink_400_400/B56ZX_xnXDH0Ag-/0/1743752951504?e=1746604800&v=beta&t=gS-N5lcE3fjnxGrVFlFOPAbv8mkKKVfp7dYkWO5cvHo",
      name: "Harsh Vardhan Singh",
      title:"Founder",
      linkedin: "https://www.linkedin.com/in/harshgo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: "https://media.licdn.com/dms/image/v2/D5603AQEK9TYRqsT_UA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1676656058330?e=1751500800&v=beta&t=Ky_3ALU1EPO4NcSzivXePqsIEeq5v3ZOuuEwe-3yp-E",
      name: "Mukesh Kumar",
      title:"President",
      linkedin: "https://www.linkedin.com/in/mukeshkumar2012?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: "https://media.licdn.com/dms/image/v2/C4E03AQHytpMvkfmULQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1605123973854?e=1751500800&v=beta&t=WPMIGS4zEtKbhhuqLpMqooVwTou1y2SYgaUPIiBqvqw",
      name: "Abhinay Parashari",
      title:"Vice-President",
      linkedin: "https://www.linkedin.com/in/abhinay-parashari-6032148a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: "https://media.licdn.com/dms/image/v2/C5603AQHZ852DgWHZCw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517809201780?e=1751500800&v=beta&t=pEsrIJtPlKuM3U_aHf6b6expK15kE0WV0aWpyFq4Kvk",
      name: "Prateek Srivastava",
      title:"Genral Secretary",
      linkedin: "https://www.linkedin.com/in/prateeksrivastava123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      img: "https://media.licdn.com/dms/image/v2/C5103AQEV1hWdhsc-SA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1577127839678?e=1751500800&v=beta&t=trcsB59yo_jdgjuZbCTpEGGMl6vQ-SAGdJUFWR2jn5Y",
      name: "Vaibhav Ojha",
      title:"Assistant Secretary",
      linkedin: "https://www.linkedin.com/in/vaibhav-ojha-53174b19a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];
  const data1=[
    {
        img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305979/faculty_advisor-2-min_euwxym.jpg",
        name: "Joydeep Banerjee",
        title:"Associate Professor",
        linkedin: "https://www.linkedin.com/in/harshgo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
  ]


const handleClick = () => {
  window.location.href="/team";
};

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndex1, setHoveredIndex1] = useState(null);

  return (
    <section
      id="team"
      className="font-[GillM] w-full px-[2vw] lg:px-[7vw] bg-[#bae6fd] py-[7vh] lg:py-[4vw]  text-black rounded-t-[6vw] relative z-2"
    >
      <h1 className="text-[5vh] lg:text-[4vh] lg:text-[6vw] font-semibold uppercase text-center mb-6 text-grey-100">Our Team</h1>
      <h1 className="text-[3.5vh] lg:text-[3.5vw] font-semibold uppercase text-center mb-[4vw] text-grey-100">Faculty Adivsor</h1>

    {data1.map((member, index) => (
        <div key={index} className="flex items-center justify-between lg:py-[2vw] lg:px-[4vw]  py-[4vw] px-[2vw]  hover:bg-black hover:text-white transition-colors duration-500 relative hover:rounded-[3vw] lg:hover:rounded-[1vw]  hover:scale-[1.01] lg:hover:scale-[1.02] font-[GillM] border-black border-t-[0.15vw] border-b-[0.15vw]"
          onMouseEnter={() => setHoveredIndex1(index)}
          onMouseLeave={() => setHoveredIndex1(null)}
        >
          <h4 className="text-[1.8vh] lg:text-[2.3vw] font-medium capitalize w-[15vh] lg:w-auto">
            {member.name}
          </h4>

          {hoveredIndex1 === index && member.img && (
            <div className="lg:w-[15vw] lg:h-[15vw] w-[8vh] h-[8vh] lg:left-[45%] left-[40%] overflow-hidden bg-black shadow-[0px_0px_30px_10px_black] rounded-full absolute  animate-zoom-out scale-[1.3] lg:scale-[1.05]">

              <img src={member.img} className="w-full h-full object-cover object-top "
                alt=""
              />
            </div>
          )}
          
          <div className=" flex items-center gap-[2vw]">
            <h1 className="font-semibold text-[1.2vh] lg:text-[1.5vw] uppercase">{member.title}</h1>
         
          </div>

          
        </div>
      ))}
        <h1 className="text-[4vh] lg:text-[3.5vw] font-semibold uppercase text-center mt-[3.5vw] mb-[3.5vw] text-grey-100">Office bearers</h1>

      {data.map((member, index) => (
        <div
          key={index}
          className={`flex items-center justify-between lg:py-[2vw] lg:px-[4vw]  py-[4vw] px-[2vw]  hover:bg-black hover:text-white transition-colors duration-500 relative hover:rounded-[3vw] lg:hover:rounded-[1vw]  hover:scale-[1.0] lg:hover:scale-[1.02] font-[GillM] border-black border-b-[0.15vw] ${index==0?"border-t-[0.15vw]":""}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h4 className="text-[2vh] lg:text-[2.3vw] font-medium capitalize w-[15vh] lg:w-auto">
            {member.name}
          </h4>

          {hoveredIndex === index && member.img && (
            <div className="lg:w-[15vw] lg:h-[15vw] w-[8vh] h-[8vh] lg:left-[45%] left-[40%] overflow-hidden bg-black shadow-[0px_0px_30px_10px_black] rounded-full absolute  animate-zoom-out scale-[1.3] lg:scale-[1.05]">

              <img src={member.img} className="w-full h-full object-cover object-top "
                alt=""
              />
            </div>
          )}
          
          <div className=" flex items-center gap-[2vw]">
            <h1 className="font-semibold text-[1.2vh] lg:text-[1.5vw] uppercase">{member.title}</h1>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin cursor={"pointer"} size={"2vw"} />
            </a>
          )}
          </div>

          
        </div>
      ))}

     <div className="w-full flex justify-center items-center mt-[5vh] lg:mt-[6vw] relative lg:left-[3vw]"> <button onClick={handleClick} className="lg:h-[4vw] lg:w-[25vw] h-[5vh] w-[25vh] text-[2vh] lg:text-[1.5vw] text-white bg-black rounded-[4vw] lg:rounded-[1vw] cursor-pointer">Meet our Entire Team ↗️</button></div>
    </section>
  );
};

export default Team;
