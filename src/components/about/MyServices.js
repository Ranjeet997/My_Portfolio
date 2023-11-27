import React from 'react'
import ServiceCard from './ServiceCard'
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";



export default function MyServices() {
  return (
    <>
      <div className="grid md:grid-cols-2">
          <ServiceCard icon={<BiCodeAlt/>} title="Front end Developer" subTitle="Created dynamic features, animations, and user interactions using technologies like JavaScript, CSS, and HTML. The ability to enhance the user experience and create smooth and responsive interfaces can be both challenging and exciting." />
          
          <ServiceCard icon={<BiCodeAlt/>} title="Full stack Developer" subTitle="handled both the front end and back end development of a web application. involves designing and implementing user interfaces, creating and managing databases, developing server-side logic, and integrating various components of the application." />

          <ServiceCard icon={<BiCodeAlt/>} title="ReactJs Developer" subTitle="Creating user interfaces for web applications using the React.js library. and work with JavaScript and JSX to create reusable components that represent different parts of the user interface. Take advantage of React's virtual DOM and component based architecture to efficiently manage and update UI elements." />

          <ServiceCard icon={<FaAppStoreIos/>} title="SEO" subTitle="For an SEO friendly website, focus on keyword research, optimize meta tags and URLs, develop quality content with relevant keywords, ensure mobile friendliness, improve site speed, add XML sitemaps and structured data Apply, Prefer user friendly navigation, integrate social media. Build high quality backlinks, and regularly monitor and analyze performance through tools like Google Analytics and Search Console." />

      </div>
    </>
  )
}
