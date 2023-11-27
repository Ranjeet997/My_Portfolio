import React from "react";
import { useState } from "react";
import Title from "../pagetitles/Title";
import ProjectDetails from "./ProjectDetails";
import ProjectsCard from "./ProjectsCard";
import { motion } from "framer-motion";

// import {
//   workImgOne,
//   workImgTwo,
//   workImgThree,
//   workImgFour,
//   workImgFive,
// } from "@/assets";

export default function Projects() {
  const [project, setProject] = useState(false);

  return (
    <>
      <div className="">
        <Title title="My" subTitle="Projects" />
        <div className="w-full grid grid-cols-2 gap-10 px-6">
          <div onClick={() => {
                setProject(true)
                console.log("call onclick func")
              }}>
            <ProjectsCard
              title="News App"
              gitHubLink="https://github.com/Ranjeet997/News-App"
              githubLinkName="Github Link"
              image="./images/News_app.png"
            />
            </div>
            <ProjectsCard
              title="Netflix Clone"
              gitHubLink="https://github.com/Ranjeet997/NetFlix_Clone"
              githubLinkName="Github Link"
              image="./images/Netflix_Img.jpg"
            />
            <ProjectsCard
              title="Shoes Store Website"
              gitHubLink="https://github.com/Ranjeet997/E-Commerce-Shoes-Store"
              githubLinkName="Github Link"
              image="./images/shoes_img.jpg"
            />
            <ProjectsCard
              title="Blogging Website"
              gitHubLink="https://github.com/Ranjeet997/Medium_Clone"
              githubLinkName="Github Link"
              image="./images/Medium_img.png"
            />
        </div>

        {/* {project && (
                // <motion.div
                //   initial={{ opacity: 0 }}
                //   animate={{ opacity: 1 }}
                //   transition={{ duration: 0.6 }}
                // >
                // </motion.div>
                  <ProjectDetails />
              )} */}
      </div>
    </>
  );
}
