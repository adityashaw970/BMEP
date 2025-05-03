
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const FullTeam = () => {

  const clgdata = [
    // Additional Office Bearers
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305962/DSC_0219_-_Afridi_siddiqui_pcgyy3.jpg",
      name: "Afridi Siddiqui",
      title: "Head Coordinator",
      linkedin: "",
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305571/pfp_-_Samarth_Kumar_Wadhawan_hwwsdm.jpg",
      name: "Samarth Kumar Wadhawan",
      title: "General Secretary",
      linkedin: "",
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305945/20240503_151646_-_Mahima_Dugar_z1tguy.jpg",
      name: "Mahima Dugar",
      title: "Treasurer",
      linkedin: "https://www.linkedin.com/in/mahima-dugar-1877ab293/",
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305570/IMG-20230411-WA0014_-_Shresthta_Shresthta_jhcy71.jpg",
      name: "Shresthta",
      title: "Girls Coordinator",
      linkedin: null,
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305945/1677564803586_-_Mohammad_Hammad_Ansari_djkhfd.jpg",
      name: "Md. Hammad Ansari",
      title: "Event Head",
      linkedin: null,
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305600/IMG_5067_-_Saptarshi_Khan_poe13r.jpg",
      name: "Saptarshi Khan",
      title: "Event Head",
      linkedin: "https://in.linkedin.com/in/saptarshi-khan-2b7bb9247",
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305962/DSC_0548_-_Abhishek_kumar_aiq7ee.jpg",
      name: "Abhishek Kumar",
      title: "Tech & Web-D Head",
      linkedin:"",
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305948/IMG_20240226_191338648_HDR_-_Subham_Gupta_klscjw.jpg",
      name: "Shubham Gupta",
      title: "Tech & Web-D Head",
      linkedin:"",
     },
    {
      img: "",
      name: "Aditya Chavhan",
      title: "Boys Coordinator",
      linkedin: "https://in.linkedin.com/in/aditya-chavhan-5710ba250",
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305577/20220709_143939_-_Chanti_Medepalli_bhiyon.jpg",
      name: "Chanti Medepalli",
      title: "Boys Coordinator",
      linkedin: "https://in.linkedin.com/in/chanti-medepalli",
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305570/IMG-20240503-WA0014_-_Shalini_yom4m9.jpg",
      name: "Shalini",
      title: "JNV Head",
      linkedin: "https://in.linkedin.com/in/shalini-tigga-4b7a871b4",
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305576/mypic1_-_Yash_Prajapati_bugml9.jpg",
      name: "Yashpal Prajapati",
      title: "JNV Head",
      linkedin: "https://in.linkedin.com/in/yashpal-prajapati-927524322",
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305958/DSC_0222_-_Bishal_kumar_Yadav_bpw3mc.jpg",
      name: "Bishal Kumar Yadav",
      title: "PR & Outreach",
      linkedin:"", },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305964/DSC_0073_-_Siddharth_Prasad_bnhayh.jpg",
      name: "Siddharth Prasad",
      title: "PR & Outreach",
      linkedin:"",},
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305945/1714998623062_-_Gopidesi_Sasisekhar_loedj6.jpg",
      name: "Sasisekhar Gopidesi",
      title: "PR & Outreach",
      linkedin: "https://in.linkedin.com/in/sasisekhar-gopidesi-25g032002",
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305954/IMG_20240209_012307_-_Topu_Meghana_zy228o.jpg",
      name: "Topu Sai Meghana",
      title: "Social Media Head",
      linkedin: null,
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305579/IMG-20240214-WA0065_-_RUCHITHA_HARSHINI_cdxpym.jpg",
      name: "R. Harshini",
      title: "Exam & Admission Head",
      linkedin: null,
    },
    {
      img: "https://res.cloudinary.com/dke15c3sv/image/upload/v1746305946/CHALLA_VENKATA_YASHASWI_tyk4ny.jpg",
      name: "Challa Venkata Yashaswi",
      title: "Exam & Admission Head",
      linkedin: null,
    },
  ];
 
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
  }; 
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <section
      id="team"
      className="font-[GillM] w-full px-[2vw] lg:px-[7vw] bg-[#bae6fd] py-[7vh] lg:py-[4vw]  text-black relative z-2"
    >

      <button onClick={handleClick} className="hidden lg:block lg:h-[4vw] lg:w-[10vw] h-[5vh] w-[10vh] text-[2vh] lg:text-[1.5vw] text-white bg-black rounded-[4vw] lg:rounded-[1vw] cursor-pointer uppercase">Back</button>

      <h1 className="text-[3.5vh] lg:text-[3.5vw] font-semibold uppercase text-center m-[4vw] text-grey-100 ">College Office bearers</h1>

      {clgdata.map((member, index) => (
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



<div className="w-full flex justify-center items-center mt-[5vh] lg:mt-[6vw] relative lg:left-[3vw]"> <button onClick={handleClick} className="lg:h-[4vw] lg:w-[25vw] h-[5vh] w-[25vh] text-[2vh] lg:text-[1.5vw] text-white bg-black rounded-[4vw] lg:rounded-[1vw] cursor-pointer uppercase">Back</button></div>

      
    </section>
  );
};

export default FullTeam;
