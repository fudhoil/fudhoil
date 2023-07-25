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
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#c29adc]/80 md:space-x-5">
      {projects.map((project, i) => (
        <div
          key={i}
          id={project.id}
          className="scroll w-full max-w-xl flex-shrink-0 items-center flex flex-col space-y-3 justify-center px-0 md:px-0 py-4">
          <div
            style={{
              position: "relative",
            }}>
            <Image
              src={project.image}
              alt="Project Image"
              width={100}
              height={100}
              layout="responsive"
              objectFit="contain"
              draggable={false}
            />
          </div>

          <div className="space-y-5 px-0 md:px-10">
            <h4 className="text-xl font-semibold text-center">
              <span className="underline decoration-[#5F9DF7]/50">
                Case Study {i + 1} of {projects.length}:
              </span>{" "}
              {project.title}
            </h4>

            <p className="text-sm text-center md:text-left">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
