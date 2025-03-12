import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./App.css";
import myAvatar from "../public/assets/my-avatar.png";
import aboutAvatarImg1 from "../public/assets/avatar-1.png";
import aboutAvatarImg2 from "../public/assets/avatar-2.png";
import aboutAvatarImg3 from "../public/assets/avatar-3.png";
import aboutAvatarImg4 from "../public/assets/avatar-4.png";
import modalQuoteImg from "../public/assets/icon-quote.svg";
import aboutClintImg1 from "../public/assets/logo-1-color.png";
import aboutClintImg2 from "../public/assets/logo-2-color.png";
import aboutClintImg3 from "../public/assets/logo-3-color.png";
import aboutClintImg4 from "../public/assets/logo-4-color.png";
import aboutClintImg5 from "../public/assets/logo-5-color.png";
import aboutClintImg6 from "../public/assets/logo-6-color.png";
import portfolioImg1 from "../public/assets/project-1.jpg";
import portfolioImg2 from "../public/assets/project-2.png";
import portfolioImg3 from "../public/assets/project-3.jpg";
import portfolioImg4 from "../public/assets/project-4.png";
import portfolioImg5 from "../public/assets/project-5.png";
import portfolioImg6 from "../public/assets/project-6.png";
import portfolioImg7 from "../public/assets/project-7.png";
import portfolioImg8 from "../public/assets/project-8.jpg";
import portfolioImg9 from "../public/assets/project-9.png";
import blogImg1 from "../public/assets/blog-1.jpg";
import blogImg2 from "../public/assets/blog-2.jpg";
import blogImg3 from "../public/assets/blog-3.jpg";
import blogImg4 from "../public/assets/blog-4.jpg";
import blogImg5 from "../public/assets/blog-5.jpg";
import blogImg6 from "../public/assets/blog-6.jpg";
import {
  faFacebook,
  faInstagram,
  faSketch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faAngleUp,
  faBookOpen,
  faCalendarDays,
  faCamera,
  faEnvelope,
  faEye,
  faLocationDot,
  faMobileScreenButton,
  faObjectUngroup,
  faPaperPlane,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { createContext, useContext, useRef, useState } from "react";

const CONTEXT_API = createContext();

function App() {
  const aboutModalRef = useRef();
  return (
    <>
      <BrowserRouter>
        <div className={`bg-main-black min-h-screen relative`}>
          <div
            className={`container mx-auto px-2 py-20 grid gap-5 lg:grid-cols-4`}
          >
            <SideBar />
            <MainContent>
              <Links />
              <CONTEXT_API.Provider value={{ aboutModalRef }}>
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </CONTEXT_API.Provider>
            </MainContent>
            <SmallScreenLinks />
          </div>
          <CONTEXT_API.Provider value={{ aboutModalRef }}>
            <AboutModal />
          </CONTEXT_API.Provider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
const SideBar = () => {
  return (
    <div
      className={`bg-second-black border-[1px] border-white/25 rounded-md lg:col-span-1 text-white p-5 max-h-fit relative`}
    >
      <div className={``}>
        <img
          src={myAvatar}
          alt=""
          className="w-[150px] mx-auto bg-main-gray rounded-4xl overflow-hidden"
        />
        <h1 className={`font-extrabold text-2xl text-center my-3 capitalize`}>
          John Doe
        </h1>
        <p
          className={`w-fit mx-auto bg-main-gray py-2 px-4 rounded-xl text-[12px] capitalize font-bold`}
        >
          web developer
        </p>
      </div>
      <div
        className={`lg:hidden top-0 right-0 overflow-hidden absolute bg-main-black w-8 h-8 text-center content-center text-main-gold text-sm cursor-pointer duration-300 rounded-bl-2xl border-[1px] border-main-gold hover:bg-main-gold hover:text-main-black`}
        onClick={(element) => {
          element.currentTarget.children[0].classList.toggle("absolute");
          element.currentTarget.children[0].classList.toggle("-left-full");
          element.currentTarget.children[1].classList.toggle("absolute");
          element.currentTarget.children[1].classList.toggle("-left-full");
          element.currentTarget.classList.toggle("bg-main-gold");
          element.currentTarget.classList.toggle("text-main-gold");
          element.currentTarget.classList.toggle("text-main-black");
          element.currentTarget.nextElementSibling.classList.toggle(
            "max-lg:border-t-[1px]"
          );
          element.currentTarget.nextElementSibling.classList.toggle(
            "max-lg:border-white/25"
          );
          element.currentTarget.nextElementSibling.classList.toggle(
            "max-lg:pt-5"
          );
          element.currentTarget.nextElementSibling.classList.toggle(
            "max-lg:mt-5"
          );
          element.currentTarget.nextElementSibling.classList.toggle(
            "max-lg:h-fit"
          );
          element.currentTarget.nextElementSibling.classList.toggle(
            "max-lg:opacity-100"
          );
        }}
      >
        <FontAwesomeIcon icon={faAngleDown} />
        <FontAwesomeIcon icon={faAngleUp} className="absolute -left-full" />
      </div>
      <div
        className={`flex flex-col gap-7 max-lg:h-0 overflow-hidden max-lg:opacity-0 duration-500 lg:mt-5 lg:border-t-[1px] lg:border-white/25 lg:pt-5`}
      >
        <div className={`flex items-center gap-3`}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`text-main-gold bg-main-gray p-2 rounded-lg`}
          />
          <div>
            <p className={`font-bold text-[12px] text-second-gray uppercase`}>
              email
            </p>
            <p className={`text-white text-sm font-bold lowercase`}>
              johdoe@gmail.com
            </p>
          </div>
        </div>
        <div className={`flex items-center gap-3`}>
          <FontAwesomeIcon
            icon={faPhone}
            className={`text-main-gold bg-main-gray p-2 rounded-lg`}
          />
          <div>
            <p className={`font-bold text-[12px] text-second-gray uppercase`}>
              phone
            </p>
            <p className={`text-white text-sm font-bold lowercase`}>
              +1 (234)-567-890
            </p>
          </div>
        </div>
        <div className={`flex items-center gap-3`}>
          <FontAwesomeIcon
            icon={faCalendarDays}
            className={`text-main-gold bg-main-gray p-2 rounded-lg`}
          />
          <div>
            <p className={`font-bold text-[12px] text-second-gray uppercase`}>
              birthday
            </p>
            <p className={`text-white text-sm font-bold lowercase`}>
              jan 31, 2004
            </p>
          </div>
        </div>
        <div className={`flex items-center gap-3`}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={`text-main-gold bg-main-gray p-2 rounded-lg`}
          />
          <div>
            <p className={`font-bold text-[12px] text-second-gray uppercase`}>
              location
            </p>
            <p className={`text-white text-sm font-bold lowercase`}>
              cairo, egypt
            </p>
          </div>
        </div>
        <div className={`flex justify-center gap-3`}>
          <FontAwesomeIcon
            icon={faFacebook}
            className={`text-second-gray duration-300 hover:text-white cursor-pointer`}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className={`text-second-gray duration-300 hover:text-white cursor-pointer`}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className={`text-second-gray duration-300 hover:text-white cursor-pointer`}
          />
        </div>
      </div>
    </div>
  );
};
const MainContent = ({ children }) => {
  return (
    <div
      className={`bg-second-black border-[1px] border-white/25 rounded-md lg:col-span-3 p-5 py-10 text-white relative overflow-hidden`}
    >
      {children}
    </div>
  );
};
const Links = () => {
  const location = useLocation();

  const linksList = [
    {
      name: "about",
      path: "/",
    },
    {
      name: "resume",
      path: "/resume",
    },
    {
      name: "portfolio",
      path: "/portfolio",
    },
    {
      name: "blog",
      path: "/blog",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ].map((link, index) => {
    return (
      <Link
        to={link.path}
        key={index}
        onClick={(e) => {
          Array.from(e.currentTarget.parentElement.children).map((child) => {
            child.classList.remove("text-main-gold");
          });
          e.currentTarget.classList.add("text-main-gold");
        }}
        className={`cursor-pointer capitalize duration-300 hover:text-main-gold ${
          link.path === location.pathname && "text-main-gold"
        } text-sm font-bold`}
      >
        {link.name}
      </Link>
    );
  });
  return (
    <div
      className={`max-lg:hidden bg-main-gray w-1/2 absolute top-0 right-0 p-4 px-8 rounded-bl-2xl flex gap-5 justify-between items-center`}
    >
      {linksList}
    </div>
  );
};
const SmallScreenLinks = () => {
  const location = useLocation();
  const linksList = [
    {
      name: "about",
      path: "/",
    },
    {
      name: "resume",
      path: "/resume",
    },
    {
      name: "portfolio",
      path: "/portfolio",
    },
    {
      name: "blog",
      path: "/blog",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ].map((link, index) => {
    return (
      <Link
        to={link.path}
        key={index}
        onClick={(e) => {
          Array.from(e.currentTarget.parentElement.children).map((child) => {
            child.classList.remove("text-main-gold");
          });
          e.currentTarget.classList.add("text-main-gold");
        }}
        className={`cursor-pointer capitalize duration-300 hover:text-main-gold ${
          link.path === location.pathname && "text-main-gold"
        } text-[12px] font-bold`}
      >
        {link.name}
      </Link>
    );
  });
  return (
    <div
      className={`flex gap-5 justify-between p-5 px-8 rounded-tl-2xl rounded-tr-2xl bg-main-gray/85 fixed bottom-0 left-0 w-full text-white lg:hidden`}
    >
      {linksList}
    </div>
  );
};
const About = () => {
  const { aboutModalRef } = useContext(CONTEXT_API);

  const dataOne = [
    {
      icon: faObjectUngroup,
      title: "Web design",
      desc: "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: faSketch,
      title: "Web development",
      desc: "High-quality development of sites at the professional level.",
    },
    {
      icon: faMobileScreenButton,
      title: "Mobile apps",
      desc: "Professional development of applications for iOS and Android.",
    },
    {
      icon: faCamera,
      title: "Photography",
      desc: "I make high-quality photos of any category at a professional level.",
    },
  ].map((e, i) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        key={i}
        className={`flex gap-2 bg-main-black p-3 rounded-xl border-[1px] border-white/25`}
      >
        <FontAwesomeIcon
          icon={e.icon}
          className={`text-main-gold duration-300 hover:text-white cursor-pointer text-2xl`}
        />
        <div>
          <h1 className={`text-white font-bold mb-1`}>{e.title}</h1>
          <p className={`text-second-gray text-[12px] font-bold`}>{e.desc}</p>
        </div>
      </motion.div>
    );
  });

  const dataTwo = [
    {
      img: aboutAvatarImg1,
      title: "Daniel lewis",
      desc: `Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.`,
    },
    {
      img: aboutAvatarImg2,
      title: "Jessica miller",
      desc: `Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.`,
    },
    {
      img: aboutAvatarImg3,
      title: "Emily evans",
      desc: `Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.`,
    },
    {
      img: aboutAvatarImg4,
      title: "Henry william",
      desc: `Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.`,
    },
  ].map((e, i) => {
    return (
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        key={i}
        className={`bg-main-black p-3 rounded-xl border-[1px] border-white/25 cursor-pointer min-w-full lg:min-w-[50%] snap-start`}
        onClick={() => {
          aboutModalRef.current.classList.replace("h-0", "h-full");
          aboutModalRef.current.classList.replace("w-0", "w-full");
          aboutModalRef.current.classList.replace("p-0", "p-5");
          aboutModalRef.current.classList.replace("opacity-0", "opacity-100");
          aboutModalRef.current.children[0].children[0].children[0].src = e.img;
          aboutModalRef.current.children[0].children[1].children[0].textContent =
            e.title;
          aboutModalRef.current.children[0].children[1].children[2].textContent =
            e.desc;
        }}
      >
        <img
          src={e.img}
          alt=""
          className={`bg-main-gray rounded-2xl w-[70px] mt-[-45px]`}
        />
        <h1
          className={`text-white font-bold text-center text-xl capitalize mb-2`}
        >
          {e.title}
        </h1>
        <p className={`text-second-gray font-bold text-sm`}>
          {e.desc.slice(0, 150)}...
        </p>
      </motion.div>
    );
  });

  const dataThree = [
    aboutClintImg1,
    aboutClintImg2,
    aboutClintImg3,
    aboutClintImg4,
    aboutClintImg5,
    aboutClintImg6,
  ].map((e, i) => {
    return (
      <motion.img
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        src={e}
        alt=""
        key={i}
        className={`min-w-[50%] sm:min-w-[33.3%] md:min-w-[25%] lg:min-w-[20%] object-contain max-h-[100px] grayscale-100 cursor-pointer hover:grayscale-0`}
      />
    );
  });

  return (
    <div className="overflow-hidden">
      <h1 className={`text-4xl font-bold text-white`}>About me</h1>
      <span className={`w-[10%] block my-5 h-[4px] bg-main-gold`}></span>
      <p className={`text-second-gray text-sm font-bold mb-3`}>
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working
        in web development and print media. I enjoy turning complex problems
        into simple, beautiful and intuitive designs.
      </p>
      <p className={`text-second-gray text-sm font-bold mb-8`}>
        My job is to build your website so that it is functional and
        user-friendly but at the same time attractive. Moreover, I add personal
        touch to your product and make sure that is eye-catching and easy to
        use. My aim is to bring across your message and identity in the most
        creative way. I created web design for many famous brand companies.
      </p>
      <h1 className={`text-white text-2xl font-bold mb-3`}>What i'm doing</h1>
      <div
        className={`grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8`}
      >
        {dataOne}
      </div>
      <h1 className={`text-white text-2xl font-bold mb-7`}>Testimonials</h1>
      <div
        className={`has-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 mb-8 pt-8`}
      >
        {dataTwo}
      </div>
      <h1 className={`text-white text-2xl font-bold mb-3`}>Clients</h1>
      <div
        className={`has-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4`}
      >
        {dataThree}
      </div>
    </div>
  );
};
const Resume = () => {
  return (
    <div className={``}>
      <h1 className={`text-4xl font-bold text-white`}>Resume</h1>
      <span className={`w-[10%] block my-5 h-[4px] bg-main-gold`}></span>
      <div className={`mb-14`}>
        <h1
          className={`relative pl-8 pb-4 border-l-[1px] border-white/25 w-fit font-bold text-lg`}
        >
          Education
          <FontAwesomeIcon
            icon={faBookOpen}
            className={`absolute top-0 -left-[10px] text-main-gold`}
          />
        </h1>
        <div className={`w-fit py-4 border-l-[1px] border-white/25`}>
          <h1
            className={`pl-8 font-bold text-white relative before:content-[""] before:w-[8px] before:h-[8px] before:rounded-full before:bg-main-gold before:absolute before:left-[-4px] before:top-[7px]`}
          >
            University school of the arts
          </h1>
          <p className={`font-bold text-main-gold my-1 pl-8`}>2007 — 2008</p>
          <p className={`text-sm font-bold text-second-gray pl-8`}>
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et quas molestias exceptur.
          </p>
        </div>
        <div className={`w-fit py-4 border-l-[1px] border-white/25`}>
          <h1
            className={`pl-8 font-bold text-white relative before:content-[""] before:w-[8px] before:h-[8px] before:rounded-full before:bg-main-gold before:absolute before:left-[-4px] before:top-[7px]`}
          >
            New york academy of art
          </h1>
          <p className={`font-bold text-main-gold my-1 pl-8`}>2006 — 2007</p>
          <p className={`text-sm font-bold text-second-gray pl-8 pb-5`}>
            Ratione voluptatem sequi nesciunt, facere quisquams facere menda
            ossimus, omnis voluptas assumenda est omnis..
          </p>
        </div>
        <div className={`w-fit mt-[-10px]`}>
          <h1
            className={`pl-8 font-bold text-white relative before:content-[""] before:w-[8px] before:h-[8px] before:rounded-full before:bg-main-gold before:absolute before:left-[-4px] before:top-[7px]`}
          >
            High school of art and design
          </h1>
          <p className={`font-bold text-main-gold my-1 pl-8`}>2002 — 2004</p>
          <p className={`text-sm font-bold text-second-gray pl-8`}>
            Duis aute irure dolor in reprehenderit in voluptate, quila voluptas
            mag odit aut fugit, sed consequuntur magni dolores eos.
          </p>
        </div>
      </div>
      <div>
        <h1
          className={`relative pl-8 pb-4 border-l-[1px] border-white/25 w-fit font-bold text-lg`}
        >
          Experience
          <FontAwesomeIcon
            icon={faBookOpen}
            className={`absolute top-0 -left-[10px] text-main-gold`}
          />
        </h1>
        <div className={`w-fit py-4 border-l-[1px] border-white/25`}>
          <h1
            className={`pl-8 font-bold text-white relative before:content-[""] before:w-[8px] before:h-[8px] before:rounded-full before:bg-main-gold before:absolute before:left-[-4px] before:top-[7px]`}
          >
            Creative director
          </h1>
          <p className={`font-bold text-main-gold my-1 pl-8`}>2015 — Present</p>
          <p className={`text-sm font-bold text-second-gray pl-8`}>
            Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et qvuas molestias exceptur.
          </p>
        </div>
        <div className={`w-fit py-4 border-l-[1px] border-white/25`}>
          <h1
            className={`pl-8 font-bold text-white relative before:content-[""] before:w-[8px] before:h-[8px] before:rounded-full before:bg-main-gold before:absolute before:left-[-4px] before:top-[7px]`}
          >
            Art director
          </h1>
          <p className={`font-bold text-main-gold my-1 pl-8`}>2013 — 2015</p>
          <p className={`text-sm font-bold text-second-gray pl-8 pb-5`}>
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et quas molestias exceptur.
          </p>
        </div>
        <div className={`w-fit mt-[-10px]`}>
          <h1
            className={`pl-8 font-bold text-white relative before:content-[""] before:w-[8px] before:h-[8px] before:rounded-full before:bg-main-gold before:absolute before:left-[-4px] before:top-[7px]`}
          >
            Web designer
          </h1>
          <p className={`font-bold text-main-gold my-1 pl-8`}>2010 — 2013</p>
          <p className={`text-sm font-bold text-second-gray pl-8`}>
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et quas molestias exceptur.
          </p>
        </div>
        <h1 className="mt-10 mb-5 text-2xl font-bold text-white">My skills</h1>
        <div
          className={`p-5 rounded-2xl border-[1px] border-white/25 bg-main-black flex flex-col gap-8`}
        >
          <div>
            <div className={`mb-3 capitalize flex gap-5 justify-between`}>
              <span className={`font-bold text-white text-sm`}>web design</span>
              <span className={`text-sm text-main-gold font-bold`}>80%</span>
            </div>
            <div className={`bg-main-gray h-[5px] rounded-full`}>
              <motion.span
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 0.5 }}
                className={`block h-full rounded-full bg-main-gold`}
              ></motion.span>
            </div>
          </div>
          <div>
            <div className={`mb-3 capitalize flex gap-5 justify-between`}>
              <span className={`font-bold text-white text-sm`}>
                Graphic design
              </span>
              <span className={`text-sm text-main-gold font-bold`}>70%</span>
            </div>
            <div className={`bg-main-gray h-[5px] rounded-full`}>
              <motion.span
                initial={{ width: "0%" }}
                whileInView={{ width: "70%" }}
                transition={{ duration: 0.5 }}
                className={`block h-full rounded-full bg-main-gold`}
              ></motion.span>
            </div>
          </div>
          <div>
            <div className={`mb-3 capitalize flex gap-5 justify-between`}>
              <span className={`font-bold text-white text-sm`}>Branding</span>
              <span className={`text-sm text-main-gold font-bold`}>90%</span>
            </div>
            <div className={`bg-main-gray h-[5px] rounded-full`}>
              <motion.span
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 0.5 }}
                className={`block h-full rounded-full bg-main-gold`}
              ></motion.span>
            </div>
          </div>
          <div>
            <div className={`mb-3 capitalize flex gap-5 justify-between`}>
              <span className={`font-bold text-white text-sm`}>WordPress</span>
              <span className={`text-sm text-main-gold font-bold`}>50%</span>
            </div>
            <div className={`bg-main-gray h-[5px] rounded-full`}>
              <motion.span
                initial={{ width: "0%" }}
                whileInView={{ width: "50%" }}
                transition={{ duration: 0.5 }}
                className={`block h-full rounded-full bg-main-gold`}
              ></motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Portfolio = () => {
  const [categoryValue, setCategoryValue] = useState("all");

  const allCategory = [
    {
      img: portfolioImg1,
      title: "finance",
      desc: "web development",
    },
    {
      img: portfolioImg2,
      title: "orizon",
      desc: "web development",
    },
    {
      img: portfolioImg3,
      title: "fundo",
      desc: "web design",
    },
    {
      img: portfolioImg4,
      title: "brawlhala",
      desc: "applications",
    },
    {
      img: portfolioImg5,
      title: "dsm.",
      desc: "web design",
    },
    {
      img: portfolioImg6,
      title: "metaspark",
      desc: "web design",
    },
    {
      img: portfolioImg7,
      title: "summary",
      desc: "web development",
    },
    {
      img: portfolioImg8,
      title: "task manager",
      desc: "application",
    },
    {
      img: portfolioImg9,
      title: "arrival",
      desc: "web development",
    },
  ].map((e, i) => {
    return (
      <motion.div
        key={i}
        className={`overflow-hidden cursor-pointer`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={(element) => {
          element.currentTarget.children[0].children[1].classList.replace(
            "h-0",
            "h-full"
          );
        }}
        onMouseLeave={(element) => {
          element.currentTarget.children[0].children[1].classList.replace(
            "h-full",
            "h-0"
          );
        }}
      >
        <div className={`mb-3 relative overflow-hidden`}>
          <img
            src={e.img}
            alt=""
            className={`overflow-hidden rounded-xl max-w-full max-h-full`}
          />
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0 bg-black/50 text-main-gold text-center content-center overflow-hidden rounded-xl duration-300`}
          >
            <FontAwesomeIcon
              icon={faEye}
              className={`p-3 rounded-xl bg-second-black`}
            />
          </div>
        </div>
        <h1 className={`capitalize text-white text-sm font-bold mb-0.5`}>
          {e.title}
        </h1>
        <p className={`text-sm font-bold text-second-gray capitalize`}>
          {e.desc}
        </p>
      </motion.div>
    );
  });
  const webDesignCategory = [
    {
      img: portfolioImg3,
      title: "fundo",
      desc: "web design",
    },
    {
      img: portfolioImg5,
      title: "dsm.",
      desc: "web design",
    },
    {
      img: portfolioImg6,
      title: "metaspark",
      desc: "web design",
    },
  ].map((e, i) => {
    return (
      <motion.div
        key={i}
        className={`overflow-hidden cursor-pointer`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={(element) => {
          element.currentTarget.children[0].children[1].classList.replace(
            "h-0",
            "h-full"
          );
        }}
        onMouseLeave={(element) => {
          element.currentTarget.children[0].children[1].classList.replace(
            "h-full",
            "h-0"
          );
        }}
      >
        <div className={`mb-3 relative overflow-hidden`}>
          <img
            src={e.img}
            alt=""
            className={`overflow-hidden rounded-xl max-w-full max-h-full`}
          />
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0 bg-black/50 text-main-gold text-center content-center overflow-hidden rounded-xl duration-300`}
          >
            <FontAwesomeIcon
              icon={faEye}
              className={`p-3 rounded-xl bg-second-black`}
            />
          </div>
        </div>
        <h1 className={`capitalize text-white text-sm font-bold mb-0.5`}>
          {e.title}
        </h1>
        <p className={`text-sm font-bold text-second-gray capitalize`}>
          {e.desc}
        </p>
      </motion.div>
    );
  });
  const applicationsCategory = [
    {
      img: portfolioImg4,
      title: "brawlhala",
      desc: "applications",
    },
    {
      img: portfolioImg8,
      title: "task manager",
      desc: "application",
    },
  ].map((e, i) => {
    return (
      <motion.div
        key={i}
        className={`overflow-hidden cursor-pointer`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={(element) => {
          element.currentTarget.children[0].children[1].classList.replace(
            "h-0",
            "h-full"
          );
        }}
        onMouseLeave={(element) => {
          element.currentTarget.children[0].children[1].classList.replace(
            "h-full",
            "h-0"
          );
        }}
      >
        <div className={`mb-3 relative overflow-hidden`}>
          <img
            src={e.img}
            alt=""
            className={`overflow-hidden rounded-xl max-w-full max-h-full`}
          />
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0 bg-black/50 text-main-gold text-center content-center overflow-hidden rounded-xl duration-300`}
          >
            <FontAwesomeIcon
              icon={faEye}
              className={`p-3 rounded-xl bg-second-black`}
            />
          </div>
        </div>
        <h1 className={`capitalize text-white text-sm font-bold mb-0.5`}>
          {e.title}
        </h1>
        <p className={`text-sm font-bold text-second-gray capitalize`}>
          {e.desc}
        </p>
      </motion.div>
    );
  });
  const webDevelopmentCategory = [
    {
      img: portfolioImg1,
      title: "finance",
      desc: "web development",
    },
    {
      img: portfolioImg2,
      title: "orizon",
      desc: "web development",
    },

    {
      img: portfolioImg7,
      title: "summary",
      desc: "web development",
    },

    {
      img: portfolioImg9,
      title: "arrival",
      desc: "web development",
    },
  ].map((e, i) => {
    return (
      <motion.div
        key={i}
        className={`overflow-hidden cursor-pointer`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={(element) => {
          element.currentTarget.children[0].children[1].classList.replace(
            "h-0",
            "h-full"
          );
        }}
        onMouseLeave={(element) => {
          element.currentTarget.children[0].children[1].classList.replace(
            "h-full",
            "h-0"
          );
        }}
      >
        <div className={`mb-3 relative overflow-hidden`}>
          <img
            src={e.img}
            alt=""
            className={`overflow-hidden rounded-xl max-w-full max-h-full`}
          />
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0 bg-black/50 text-main-gold text-center content-center overflow-hidden rounded-xl duration-300`}
          >
            <FontAwesomeIcon
              icon={faEye}
              className={`p-3 rounded-xl bg-second-black`}
            />
          </div>
        </div>
        <h1 className={`capitalize text-white text-sm font-bold mb-0.5`}>
          {e.title}
        </h1>
        <p className={`text-sm font-bold text-second-gray capitalize`}>
          {e.desc}
        </p>
      </motion.div>
    );
  });
  return (
    <div>
      <h1 className={`text-4xl font-bold text-white`}>Portfolio</h1>
      <span className={`w-[10%] block my-5 h-[4px] bg-main-gold`}></span>
      <select
        className={`bg-main-black p-3 outline-0 cursor-pointer font-bold text-sm rounded-xl border-[1px] border-white/25 w-[200px]`}
        onChange={(e) => setCategoryValue(e.currentTarget.value)}
      >
        <option value="all">All</option>
        <option value="web design">Web Design</option>
        <option value="applications">Applications</option>
        <option value="web development">Web development</option>
      </select>
      <div
        className={`grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8`}
      >
        {categoryValue === "all" && allCategory}
        {categoryValue === "web design" && webDesignCategory}
        {categoryValue === "applications" && applicationsCategory}
        {categoryValue === "web development" && webDevelopmentCategory}
      </div>
    </div>
  );
};
const Blog = () => {
  const blogData = [
    {
      img: blogImg1,
      date: "Design - Fab 23, 2022",
      title: "Design conferences in 2022",
      desc: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    },
    {
      img: blogImg2,
      date: "Design - Fab 23, 2022",
      title: "Best fonts every designer",
      desc: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
    },
    {
      img: blogImg3,
      date: "Design - Fab 23, 2022",
      title: "Design digest #80",
      desc: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
    },
    {
      img: blogImg4,
      date: "Design - Fab 23, 2022",
      title: "UI interactions of the week",
      desc: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
    },
    {
      img: blogImg5,
      date: "Design - Fab 23, 2022",
      title: "The forgotten art of spacing",
      desc: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: blogImg6,
      date: "Design - Fab 23, 2022",
      title: "Design digest #79",
      desc: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
    },
  ].map((e, i) => {
    return (
      <motion.div
        key={i}
        className={`cursor-pointer`}
        onMouseEnter={(element) => {
          element.currentTarget.children[0].children[0].classList.add(
            "scale-[1.2]"
          );
          element.currentTarget.children[1].children[1].classList.replace(
            "text-white",
            "text-main-gold"
          );
        }}
        onMouseLeave={(element) => {
          element.currentTarget.children[0].children[0].classList.remove(
            "scale-[1.2]"
          );
          element.currentTarget.children[1].children[1].classList.replace(
            "text-main-gold",
            "text-white"
          );
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`overflow-hidden rounded-tl-xl rounded-tr-xl`}>
          <img src={e.img} alt="" className={`overflow-hidden duration-300`} />
        </div>
        <div className={`bg-main-black p-4 rounded-bl-xl rounded-br-xl`}>
          <p className={`text-sm font-bold text-second-gray`}>{e.date}</p>
          <h1 className={`text-xl font-bold text-white duration-300 my-1`}>
            {e.title}
          </h1>
          <p className={`text-sm font-bold text-second-gray`}>{e.desc}</p>
        </div>
      </motion.div>
    );
  });
  return (
    <div>
      <h1 className={`text-4xl font-bold text-white`}>Blog</h1>
      <span className={`w-[10%] block my-5 h-[4px] bg-main-gold`}></span>
      <div className={`grid gap-5 md:grid-cols-2 xl:grid-cols-3`}>
        {blogData}
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1 className={`text-4xl font-bold text-white`}>Contact</h1>
      <span className={`w-[10%] block my-5 h-[4px] bg-main-gold`}></span>
      <iframe
        className={`grayscale-100 invert-100`}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6904.54481221097!2d31.274521019082798!3d30.08638384960275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fec8d8de0f7%3A0x82c1345ae52fcf32!2sHadaeq%20Al%20Qubbah%2C%20Hada&#39;iq%20El%20Qobbah%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1741731124421!5m2!1sen!2seg"
        width="100%"
        height="300"
        loading="lazy"
      ></iframe>
      <h1 className={`my-5 font-bold text-2xl text-white`}>Contact Form</h1>
      <form
        action="https://formspree.io/f/xrbpgyve"
        method="POST"
        className={`grid gap-5 md:grid-cols-2`}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className={`bg-main-black p-4 rounded-xl outline-0 border-[1px] border-white/25 text-sm placeholder:duration-300 focus:placeholder:opacity-0 md:col-span-1 duration-300`}
          required
          onInput={(e) => {
            if (e.currentTarget.value.length > 0) {
              e.currentTarget.classList.replace(
                "border-white/25",
                "border-main-gold"
              );
            } else {
              e.currentTarget.classList.replace(
                "border-main-gold",
                "border-white/25"
              );
            }
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className={`bg-main-black p-4 rounded-xl outline-0 border-[1px] border-white/25 text-sm placeholder:duration-300 focus:placeholder:opacity-0 md:col-span-1 duration-300`}
          required
          onInput={(e) => {
            if (
              e.currentTarget.value.length > 0 &&
              e.currentTarget.validity.valid
            ) {
              e.currentTarget.classList.replace(
                "border-white/25",
                "border-main-gold"
              );
            } else {
              e.currentTarget.classList.replace(
                "border-main-gold",
                "border-white/25"
              );
            }
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className={`bg-main-black p-4 rounded-xl outline-0 border-[1px] border-white/25 text-sm placeholder:duration-300 focus:placeholder:opacity-0 resize-none md:col-span-2 min-h-[150px] duration-300`}
          required
          onInput={(e) => {
            if (e.currentTarget.value.length > 0) {
              e.currentTarget.classList.replace(
                "border-white/25",
                "border-main-gold"
              );
            } else {
              e.currentTarget.classList.replace(
                "border-main-gold",
                "border-white/25"
              );
            }
          }}
        ></textarea>
        <div className={`md:col-span-2 w-fit ml-auto relative`}>
          <FontAwesomeIcon
            icon={faPaperPlane}
            className={`absolute left-[10px] top-1/2 -translate-y-1/2 text-main-gold`}
          />
          <input
            type="submit"
            value="Send Message"
            className={`bg-main-black text-main-gold py-2.5 px-5 pl-10 rounded-xl outline-0 text-sm placeholder:duration-300 focus:placeholder:opacity-0 cursor-pointer font-bold`}
          />
        </div>
      </form>
    </div>
  );
};
const AboutModal = () => {
  const { aboutModalRef } = useContext(CONTEXT_API);
  return (
    <div
      ref={aboutModalRef}
      className={`bg-black/50 w-0 h-0 overflow-hidden duration-300 fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-content-center p-0 opacity-0`}
    >
      <div
        className={`bg-main-gray p-5 rounded-2xl border-[1px] border-white/25 relative mx-auto max-w-[500px] flex gap-5 overflow-hidden`}
      >
        <div className={`flex gap-5 flex-col items-center`}>
          <img
            src={aboutAvatarImg1}
            alt=""
            className={`w-[500px] bg-main-black rounded-2xl`}
          />
          <img src={modalQuoteImg} alt="" />
        </div>
        <div>
          <h1 className={`text-2xl text-white font-bold`}>Daniel lewis</h1>
          <p className={`text-sm font-bold text-[12px] text-second-gray my-2`}>
            14 June, 2021
          </p>
          <p className={`text-sm font-bold text-sm text-second-gray`}>
            Richard was hired to create a corporate identity. We were very
            pleased with the work done. She has a lot of experience and is very
            concerned about the needs of client. Lorem ipsum dolor sit amet,
            ullamcous cididt consectetur adipiscing elit, seds do et eiusmod
            tempor incididunt ut laborels dolore magnarels alia.
          </p>
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          className={`text-white absolute top-0 right-0 bg-second-black text-center content-center p-2 cursor-pointer duration-300 hover:bg-second-black/75 rounded-bl-lg`}
          onClick={() => {
            aboutModalRef.current.classList.replace("h-full", "h-0");
            aboutModalRef.current.classList.replace("w-full", "w-0");
            aboutModalRef.current.classList.replace("p-5", "p-0");
            aboutModalRef.current.classList.replace("opacity-100", "opacity-0");
          }}
        />
      </div>
    </div>
  );
};
