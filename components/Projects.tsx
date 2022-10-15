import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DiReact } from "react-icons/di";
import { IconContext } from "react-icons";

type Props = {};

const Projects = (props: Props) => {
  const [phoneScreen, setPhoneScreen] = React.useState(true);
  const projects = [
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/sahabatmuseum_WRHjOZDrF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665742737611",
      title: "Sahabat Museum",
      description:
        "Sahabat Museum is a web application that allows users to explore museums in Kota Bandung. Users can also book a ticket for a tour of museums.",
      link: "https://sahabatmuseum.com/",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/react-amazon_CficiHbdr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665820014334",
      title: "React Amazon Clone",
      description:
        "Amazon Clone is a web application that allows users to explore products and add them to the cart. Users can also checkout the products in the cart.",
      link: "https://reactamazon.vercel.com/",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/ss_Proxsis_web_IzbyLjaNi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665742737216",
      title: "Proxsis Web",
      description:
        "Proxsis Web is a web application for Human Resources Management. This application is used to manage employee data, attendance, and payroll.",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/react-admin-ugm_0nqfAkco-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665819859567",
      title: "React Admin Dashboard for UGM International Forum",
      description:
        "Admin Dashboard is a web application that allows users to manage Submitted paper and Registered data from user.",
      link: "https://react-admin-ugm.vercel.app/",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/qrcode_UQ0XtwVvP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665820428646",
      description:
        "QR Code Scanner is a mobile app using React Native that allows users to scan QR Code and get the data from the QR Code and integrated to database. Data from the QR Code is used to check-in the user. All data from the QR Code is encrypted securely. This app is the only app that can decrypt the data from the QR Code.",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/mcn-ss_9IyNnD4XN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665742737409",
      title: "Magitra Citra Nusantara (MCN) Website",
      description:
        "Magitra Citra Nusantara (MCN) is a web application that allows users to explore the company and its products. Users can also contact the company.",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/wwc_91QVD0Js9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665821134480",
      title: "World Wide Community (WWC) Website",
      description:
        "World Wide Community (WWC) is a web application that allows users to explore the event and its details. Users can also register for the event.",
    },
  ];

  useEffect(() => {
    if (window.innerWidth > 768) {
      setPhoneScreen(false);
    }
  }, []);
  return (
    <div className="h-screen pb-14 md:pb-32 relative flex overflow-visible flex-col md:flex-row text-left max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute flex flex-col top-24 uppercase tracking-[20px] text-gray-500 text-2xl items-center">
        Projects
        <p>
          <span className="text-sm text-[#5F9DF7] tracking-[3px]">
            {(phoneScreen && "Swipe to see more") || "hold shift & scroll"}
          </span>
        </p>
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#5F9DF7]/80 md:top-[10%]">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center items-center flex flex-col space-y-3 justify-center p-20 md:p-44 md:pb-2 h-screen">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}>
              <Image
                className="w-[200px]"
                src={project.image}
                alt="Sahabat Museum"
                width={450}
                height={240}
                draggable={false}
              />
            </motion.div>

            <div className="space-y-5 px-1 md:px-10 max-w-6xl">
              <h4 className="text-xl font-semibold text-center">
                <span className="underline decoration-[#5F9DF7]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>

              <p className="text-sm text-center md:text-left max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <IconContext.Provider value={{ size: "50rem", color: "#464646" }}>
        <DiReact className="absolute top-[50%] left-[10%] md:top-[-40%] opacity-40 md:left-[-20%] -rotate-45 -z-10" />
      </IconContext.Provider>
      {/* <div className="w-1/2 absolute top-[30%] bg-[#5F9DF7]/10 left-0 h-[400px] -rotate-45 transform origin-top-left"></div> */}
    </div>
  );
};

export default Projects;
