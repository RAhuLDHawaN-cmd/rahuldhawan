import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import database from "../public/database.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {

  
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Mali:ital@1&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,600&display=swap" rel="stylesheet"></link>
        
      </Head>
      <main className="bg-white px-10 dark:bg-zinc-900 md:px-20 lg:px-40">
        <section className="min-h-screen" id="banner">
          <nav className=" bg-white pt-10 mb-12 flex justify-evenly sticky top-0 z-50 dark:bg-zinc-900 dark:text-white ">
            <h1 className="font-burtons text-xl mr-20">
            <a href="/">MatchStick</a>
            </h1>
         
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#services">
                  Services
                </a>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#portfolio">
                  Projects
                </a>
              </li>
             
              <li> 
               <a>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl ml-4"/>
              </a>
            </li>
            </ul>

          </nav>
          <div className="text-center">
          
         <span className="text-3xl py-1 dark:text-white heads">Hello, I'm</span> 
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-8xl jumbo">
            Rahul Dhawan
            </h2>
               <div class="bg-white flex space-x-2 p-1 rounded-full justify-center items-center dark:bg-zinc-900">
            <div
            className="bg-blue-600 p-2  w-6 h-6 rounded-full animate-bounce blue-circle"
          ></div>
          <div
            class="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce green-circle"
          ></div>
          <div
            className="bg-red-600 p-2  w-6 h-6 rounded-full animate-bounce red-circle"
          ></div>
          </div>

            <h3 className="text-2xl py-2 dark:text-gray-200 md:text-3xl marker">
              Developer and Designer.
            </h3>
            
            <h4 className="text-md desc py-5 leading-8 max-w-3xl text-gray-800 mx-auto md:text-xl dark:text-gray-200  ">
            Ambition, Dedication, and years of developement empowered me to gain a serious passion for UI effects, animations, and creating intuitive, dynamic user experiences.
            </h4>
            <h4 className="text-md desc py-1 leading-8 text-gray-800 mx-auto md:text-xl dark:text-gray-200 max-w-3xl ">
            Aimed to solve real-world challenges. Let's make something special.!
            </h4>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
         
              <a href="https://github.com/RAhuLDHawaN-cmd">

              <AiFillGithub />
              </a>
              
        
              <a href="https://www.linkedin.com/in/rahul-dhawan27/">

              <AiFillLinkedin />
             </a>

            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" className="shape" />
            </div>
          </div>
        </section>
        <section id="services">
          <div>
            <h3 className="text-3xl py-1 dark:text-white heads">Services offered</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl desc">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> Info-Techs </span>
              consulted for <span className="text-teal-500"> StartUps </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl desc">
            Offering a plethora of services, including Design,
              Programming and User Experience.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-zinc-700 flex-1">

              <Image src={design} width={100} height={100} className="animate-bounce" />
              <h3 className="text-2xl font-medium pt-8 pb-2  dark:text-gray-200 service">
              Swift  Designs
              </h3>
              <p className="py-2 dark:text-gray-200 Roboto">
                Creating elegant designs suited for design theory.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400 text-xl">Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">XD</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Indesign</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-zinc-700 flex-1">
              <Image src={code} width={100} height={100} className="animate-bounce" />
              <h3 className="text-2xl font-medium pt-8 pb-2 dark:text-gray-200 Roboto">
              Responsive
              </h3>
              <p className="py-2 dark:text-gray-200 Roboto">
                Have a great website? Let's make it work on work on any device size.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400 text-xl">Utilities I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Chrome Dev Tools</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Sublime Text</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Visual Studio Code</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Firefox Dev Tools</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-zinc-700 flex-1">
              <Image src={consulting} width={100} height={100} className="animate-bounce"/>
              <h3 className="text-2xl font-medium pt-8 pb-2 dark:text-gray-200 Roboto ">Intuitive</h3>
              <p className="py-2 dark:text-gray-200 Roboto">
              Strong preference for easy to use, intuitive UX/UI.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400 text-xl">Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">FluidUI</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Wix</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Indesign</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-zinc-700 flex-1">
              <Image src={database} width={100} height={100} className="animate-bounce" />
              <h3 className="text-2xl font-medium pt-8 pb-2  dark:text-gray-200 Roboto">
              Dynamic
              </h3>
              <p className="py-2 dark:text-gray-200 Roboto">
              Websites Static?, I love making pages come to life
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400 text-xl">Technologies I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Node</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Mongodb</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Express</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">ECMAScript</p>
            </div>
          </div>
        </section>
        <section className="py-10" id="portfolio">
          <div>
            <h3 className="text-3xl py-1 dark:text-white heads">Portofolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl desc">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500 dark:text-teal-400"> agencies </span>
              consulted for <span className="text-teal-500 dark:text-teal-400">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl desc ">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <a href="https://fooddie-live.herokuapp.com/">
              <Image
                className="rounded-lg object-cover zoom"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                href="#"
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://fooddie-live.herokuapp.com/">
              <Image
                className="rounded-lg object-cover zoom"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://chat-worldd.netlify.app">

              <Image
                className="rounded-lg object-cover zoom"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
              </a>

            </div>
            <div className="basis-1/3 flex-1" >
            <a href="https://chat-worldd.netlify.app">

              <Image
                className="rounded-lg object-cover zoom"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              <Image
                className="rounded-lg object-cover zoom"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover zoom"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
