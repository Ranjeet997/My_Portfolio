import { React } from "react";
import ResumeTitle from "./ResumeTitle";
import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import ResumeCard from "./ResumeCard";

export default function Education() {
  return (
    <>
      <div className="w-full grid md:grid-cols-9 px-6">
        {/* Education Section */}

        <div className="col-span-4">
          <ResumeTitle icon={<GiGraduateCap />} title="Education" />
          <div>
            <ResumeCard
              badge="2019 - 2023"
              title="KUK University"
              subTitle="Panipat, Haryana"
              des1="I am currently pursuing my B.Tech in Computer Science from Kurukshetra University, University."
            />

            <ResumeCard
              badge="2016 - 1019"
              title="BTEUP University"
              subTitle="shamli, UP"
              des1="I have successfully completed my Polytechnic degree from the Board of Technical Education UP."
            />
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
        </div>

        {/* Experience Section */}
        <div className="col-span-4">
          <ResumeTitle icon={<MdWork />} title="Experience" />
          <div>
            <ResumeCard
              badge="Dec 2022 - Apr 2023"
              title="Quadb Technology"
              subTitle="Remote"
              des1="Constructed a video URL uploading system in the FinFix dashboard using JavaScript, Web3
              server, and REST APIs, increasing user engagement and improving the overall
              user experience, which allows uploading of a maximum URL size of 200MB."
            />

            <ResumeCard
              badge="Apr 2022 - Jun 2022"
              title="Sparks Foundation"
              subTitle="Virtual"
              des1="Achieved proficiency in PHP, NodeJs, Tailwind CSS, and PostgreSQL.
              "
              des2="Developed a Medium clone project, incorporating features such as article
              creation, updating, deletion, and commenting, demonstrating adaptability and
              versatility in working with various technologies."
            />

          </div>
        </div>
      </div>
    </>
  );
}
