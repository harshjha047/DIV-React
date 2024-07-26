// complete
import React from "react";

function About() {
  return (
    <div>
      <div
        id="page1"
        className="w-full flex flex-col bg-[#111] items-center text-white"
      >
        <div className="h-[15vh]"></div>
        <div className="w-[80%]  ">
          <div className=" flex justify-between">
            <div className=" h-[20vh] my-[2vw] text-[158px] relative  flex font-[BebasNeue] justify-center items-center ">
              <div
                id="aboutCover"
                className=" absolute bg-white h-[2px] w-[0px] bottom-0 "
                // mix-blend-difference
              ></div>
              <h2 id="aboutus" className="font-[BebasNeue]">ABOUT US.</h2>
            </div>
            {/* <div className="h-[30vh]  text-9xl font-semibold flex justify-center items-center">{`</DIV>`}</div> */}
          </div>
          <div className="">
            <p>
              Hay. <br />
              I am Harsh Jha, and I developed this website from the ground up,
              handling both design and development for the frontend and backend.
              For the frontend, I utilized HTML, CSS, and JavaScript as the
              basics and built the application using React. I styled the
              application with Tailwind CSS and incorporated several external
              libraries, including React Router Dom for navigation, GSAP and
              Locomotive for animations, Scroll Trigger for scroll-based
              effects, and Axios for handling HTTP requests.
              <br />
              On the backend, I employed Node.js along with various essential
              components such as Express for the server framework, MongoDB for
              the database, and ejs for templating. I ensured secure handling of
              data using Cookie Parser, Bcrypt for password hashing,
              Jsonwebtoken for authentication, and Crypto for encryption.
              Additionally, I used Cors to manage cross-origin requests, Body
              Parser for parsing request bodies, Mongoose for object data
              modeling with MongoDB, and Multer for handling file uploads.
            </p>
            <div className="flex justify-between mt-[2vw]">
              <div className=" w-[50vw]  p-[1vw]">
                <p>
                  HTML, CSS, and JavaScript form the foundation of web
                  development, with HTML structuring content, CSS styling it,
                  and JavaScript adding interactivity. React is a JavaScript
                  library for building user interfaces, while Tailwind CSS
                  provides utility-first CSS for rapid UI development, and GSAP
                  (GreenSock Animation Platform) enables advanced animations.
                  Node.js allows JavaScript to run server-side, Express is a
                  Node.js framework for building web applications, and MongoDB
                  is a NoSQL database for storing data. React Router DOM manages
                  navigation in React apps, Locomotive Scroll and ScrollTrigger
                  enhance scrolling animations. Axios is a promise-based HTTP
                  client, EJS (Embedded JavaScript) is a templating language,
                  and Cookie-Parser parses cookies. Express also uses bcrypt for
                  password hashing, jsonwebtoken for authentication, crypto for
                  encryption, cors for cross-origin requests, and body-parser
                  for parsing request bodies. Mongoose is an ODM for MongoDB,
                  and multer handles file uploads.
                </p>
              </div>
              <div className="w-[30vw] border p-[1vw] ">
                <p className=" w-full text-center">HTML CSS JavaScript</p>
                <ul className="flex justify-evenly ">
                  <ul>
                    <p>Frontend</p>
                    <li>React</li>
                    <ul>
                      <li>React Router DOM</li>
                      <li>GSAP</li>
                      <ul>
                        <li>Locomotive Scroll</li>
                        <li>Scroll Trigger</li>
                      </ul>
                      <li>Axios</li>
                    </ul>
                    <li>Tailwind CSS</li>
                  </ul>
                  <ul className="flex flex-col justify-center items-center">
                    <p>Backend</p>
                    <li>Node.js</li>
                    <ul className="flex justify-evenly">
                      <ul className="p-1">
                        <li>Express</li>
                        <li>crypto</li>
                        <li>bcrypt</li>
                        <li>Cookie-Parser</li>
                        <li>jsonwebtoken</li>
                      </ul>
                      <ul className="p-1">
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>EJS</li>
                        <li>cors</li>
                        <li>Body-parser</li>
                        <li>multer</li>
                      </ul>
                    </ul>
                  </ul>
                </ul>
              </div>
            </div>

            {/* html css javascript react tailwind gsap node express mongodb
            react-router-dom locomotive-scroll scroll-triger axios ejs
            cookie-parser express bcrypt jsonwebtoken crypto cors body-parser
            mongoose multer */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
