"use client";
import React from "react";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  const handleScroll = (evt) => {
    evt.preventDefault();
    document.getElementById("projects")?.scrollBy({
      left: evt.deltaY,
    });
  };

  const projects = [
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/sahabatmuseum_WRHjOZDrF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665742737611",
      title: "Sahabat Museum",
      id: "sahabat-museum",
      description:
        "Sahabat Museum is a web application that allows users to explore museums in Kota Bandung. Users can also book a ticket for a tour of museums.",
      link: "https://sahabatmuseum.com/",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/Screenshot%202023-07-27%20221341_2mkSZ7PoY.png?updatedAt=1690470933482",
      title: "Anime List",
      id: "anime-list",
      description:
        "Anime List is a web application that allows users to explore anime and manga. Users can also add anime and manga to their favorites.",
      link: "https://anime-list-fudhoil.vercel.app/",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/Screenshot%202023-07-27%20221423_m6T-Rn2ct.png?updatedAt=1690470932626",
      title: "Realtime Chat App",
      id: "realtime-chat-app",
      description:
        "Realtime Chat App is a web application that allows users to chat with other users in realtime.",
      link: "https://realtimechat-fudhoil.vercel.app/",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/react-amazon_CficiHbdr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665820014334",
      title: "React Amazon Clone",
      id: "react-amazon-clone",
      description:
        "Amazon Clone is a web application that allows users to explore products and add them to the cart. Users can also checkout the products in the cart.",
      link: "https://reactamazon.vercel.com/",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/ss_Proxsis_web_IzbyLjaNi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665742737216",
      title: "Proxsis Web",
      id: "proxsis-web",
      description:
        "Proxsis Web is a web application for Human Resources Management. This application is used to manage employee data, attendance, and payroll.",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/react-admin-ugm_0nqfAkco-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665819859567",
      title: "React Admin Dashboard for UGM International Forum",
      id: "react-admin-ugm",
      description:
        "Admin Dashboard is a web application that allows users to manage Submitted paper and Registered data from user.",
      link: "https://react-admin-ugm.vercel.app/",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/qrcode_UQ0XtwVvP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665820428646",
      title: "React Native App for UGM International Forum",
      id: "react-native-ugm",
      description:
        "QR Code Scanner (only for this event) is a mobile app using React Native that allows users to scan QR Code and get the data from the QR Code and integrated to database. All data from the QR Code is encrypted securely data can be decrypt using this app.",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/mcn-ss_9IyNnD4XN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665742737409",
      title: "Magitha Citra Nusantara (MCN) Website",
      id: "mcn-web",
      description:
        "Magitra Citra Nusantara (MCN) is a web application that allows users to explore the company and its products. Users can also contact the company.",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/wwc_91QVD0Js9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665821134480",
      title: "World Waterfowl Conference (WWC) Website",
      id: "wwc-web",
      description:
        "World Wide Community (WWC) is a web application that allows users to explore the event and its details. Users can also register for the event.",
    },
    {
      image:
        "https://ik.imagekit.io/4iquqthi3/Screenshot%202023-07-26%20221543_KfKZwlB9Z.png?updatedAt=1690385511538",
      title: "Abracadabra Events Website",
      id: "abracadabra-events-web",
      description:
        "Abracadabra Events is a PWAs web application (privately in development)",
    },
  ];

  React.useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return (
    <div
      id="projects"
      className="relative w-full flex overflow-x-scroll overflow-y-hidden flex-col md:flex-row md:overflow-x-hidden
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#c29adc]/80 pr-5 my-5 gap-5
      lg:grid lg:grid-cols-2">
      {projects.map((project, i) => (
        <div
          key={i}
          id={project.id}
          className="scroll w-full max-w-xl flex-shrink-0 items-center flex flex-col justify-center space-y-4 my-5 lg:max-w-full p-4 relative">
          <span
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "100%",
              height: "30%",
              // bottom
              boxShadow: "4px 4px 0px -2px #ffffff",
            }}></span>
          <div className="relative w-full h-[10rem] md:h-[20rem]">
            <Image
              src={project.image}
              alt="Project Image"
              draggable={false}
              layout="fill"
              objectFit="contain"
              // blurred the last image
              className={`${
                i === projects.length - 1 ? "filter blur-md" : ""
              } "rounded-md"`}
            />
          </div>

          <div className="space-y-5">
            <h4 className="text-xl font-semibold text-start">
              <span className="underline decoration-[#5F9DF7]/50">
                {project.title}
              </span>
            </h4>

            <p className="text-sm text-left">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
