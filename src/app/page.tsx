import Link from "next/link";
import "./page.css";
export default function Home() {
  return (
    <body>
      <section
        className="w-full h-[95vh] sm:h-[100vh]"
        style={{
          backgroundImage: "url(/herobg.png)",
          backgroundSize: "cover",
        }}
      >
        <header className="w-full flex justify-between items-center px-5 sm:px-10 py-5">
          <div className="flex gap-x-2 items-center">
            <div className="w-10 h-10 rounded-full bg-purple"></div>
            <div className="text-black text-lg flex">
              <p className="mr-1">Arash</p>
              <span className="hidden sm:block">Sheikhmohammadi</span>
            </div>
          </div>
          <ul className="list-none text-subblack gap-x-4 text-sm hidden sm:flex">
            <a href="#work" className="cursor-pointer hover:text-purple">
              Work samples
            </a>
            <a href="#about" className="cursor-pointer hover:text-purple">
              About Me
            </a>
            <a href="#contact" className="cursor-pointer hover:text-purple">
              Contact Me
            </a>
          </ul>
        </header>
        <div className="w-full h-full pt-20 md:pt-40">
          <div className="grid gap-y-7 text-center">
            <h1 className="text-4xl md:text-6xl text-black">
              I Can Make Everything
            </h1>
            <p className="w-[280px] sm:w-[450px] text-xs sm:text-sm text-subblack mx-auto">
              i'm a web developer with over 2 years of coding experience i am
              able to perform pixle perfect coding
            </p>
            <a className="w-40 button mx-auto" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </section>
      <div className="h-32 mb-20" id="fade"></div>
      <main className="px-5 sm:px-20 md:px-32 grid gap-y-40 mb-20">
        <div className="grid gap-y-10">
          <div className="grid gap-y-5 text-black">
            <p className="text-2xl" id="work">
              Work Samples
            </p>
            <p className="text-sm text-subblack">Take note that the design of this pojects are not mine , i simply found them on internet and made them into a website<br />the goal is to showcase my ability to perform pixle perfect coding</p>
          </div>

          <div className="flex flex-wrap justify-around gap-10">
            <Link
              href="https://nexton-gamma.vercel.app/"
              className="w-full sm:w-[500px] grid gap-y-2 bg-lightbg border-borderC border-2 cursor-pointer"
            >
              <img
                src="/Nexton.png"
                alt=""
                className="w-full h-80 bg-white border-b-2 border-borderC hover:scale-105 object-cover"
              />
              <div className="grid gap-y-3 p-4">
                <p className="text-black text-xl">Nexton</p>
                <p className="text-sm text-subblack">
                  nexton is a store website designed to sell clothing products
                </p>
                <div className="flex items-center justify-between text-sm">
                  <a
                    className="text-xs sm:text-sm flex items-center gap-x-2 text-purple hover:opacity-80 relative z-10"
                    href="https://www.figma.com/file/ParQmu9gIXbugVMiNLUsPw/Ecommerce-Website-UI-Design-(Community)?type=design&node-id=0-1&mode=design&t=gP7AMJPt3mVsiPH8-0"
                  >
                    View Design
                    <i className="bi-arrow-up-right"></i>
                  </a>
                  <button className="w-32 button">View</button>
                </div>
              </div>
            </Link>
            <Link
              href="https://fashion-alpha-ecru.vercel.app/"
              className="w-full sm:w-[500px] grid gap-y-2 bg-lightbg border-borderC border-2 cursor-pointer"
            >
              <img
                src="/Fashion.jpg"
                alt=""
                className="w-full h-80 bg-white border-b-2 border-borderC hover:scale-105 object-cover"
              />
              <div className="grid gap-y-3 p-4">
                <p className="text-black text-xl">Fashion</p>
                <p className="text-sm text-subblack">
                  Fashion is also a clothing store made for selling mens and
                  womans clothes
                </p>
                <div className="flex items-center justify-between text-sm">
                  <a
                    className="text-xs sm:text-sm flex items-center gap-x-2 text-purple hover:opacity-80 relative z-10"
                    href="https://dribbble.com/shots/18142456-Fashion-Store-Homepage"
                  >
                    View Design
                    <i className="bi-arrow-up-right"></i>
                  </a>
                  <button className="w-32 button">View</button>
                </div>
              </div>
            </Link>
            <Link
              href="https://boxcars-eosin.vercel.app/"
              className="w-full sm:w-[500px] grid gap-y-2 bg-lightbg border-borderC border-2 cursor-pointer"
            >
              <img
                src="/BOXCARS.png"
                alt=""
                className="w-full h-80 bg-white border-b-2 border-borderC hover:scale-105 object-cover"
              />
              <div className="grid gap-y-3 p-4">
                <p className="text-black text-xl">Boxcars</p>
                <p className="text-sm text-subblack">
                  Boxcars is a website designed for selling top model cars{" "}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <a
                    className="text-xs sm:text-sm flex items-center gap-x-2 text-purple hover:opacity-80 relative z-10"
                    href="https://www.figma.com/design/ty9Vd1alGTZ5ZMocnJxDrp/75%2B-Car-Dealer-Website-Templates-(Community)-(Copy)?node-id=0-1&t=aKTuzpgXKAWrevFh-0"
                  >
                    View Design
                    <i className="bi-arrow-up-right"></i>
                  </a>
                  <button className="w-24 sm:w-32 button">View</button>
                </div>
              </div>
            </Link>
            <Link
              href="https://flexliving.vercel.app/"
              className="w-full sm:w-[500px] grid gap-y-2 bg-lightbg border-borderC border-2 cursor-pointer"
            >
              <img
                src="/Flexliving.png"
                alt=""
                className="w-full h-80 bg-white border-b-2 border-borderC hover:scale-105 object-cover"
              />
              <div className="grid gap-y-3 p-4">
                <p className="text-black text-xl">Flexliving</p>
                <p className="text-sm text-subblack">
                  this is a website made for selling or renting real state and
                  houses{" "}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <a
                    className="text-xs sm:text-sm flex items-center gap-x-2 text-purple hover:opacity-80 relative z-10"
                    href="https://www.figma.com/design/awQY7iVGFTe8w1uTlXRsiU/Flex-Living---House-Renting-Website-(Community)-(Copy)?node-id=0-1&t=7aA7TbFZFeggiie8-0"
                  >
                    View Design
                    <i className="bi-arrow-up-right"></i>
                  </a>
                  <button className="w-32 button">View</button>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <div className="w-full sm:w-1/2 grid gap-y-5">
            <p className="text-4xl text-black" id="about">
              About Me
            </p>
            <p className="text-sm text-subblack">
              my name is Arash and i started coding for fun and i eventually
              made my way into webdeveloping industary i have knowledge over
              farsi and english language.
            </p>
            <div className="grid gap-y-3">
              <p className="text-xl text-black">My Skills :</p>
              <ul className="list-none grid gap-y-2">
                <li className="flex gap-x-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-purple animate-pulse"></div>
                  <p className="text-sm text-subblack">Next Js</p>
                </li>
                <li className="flex gap-x-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-purple animate-pulse"></div>
                  <p className="text-sm text-subblack">React</p>
                </li>
                <li className="flex gap-x-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-purple animate-pulse"></div>
                  <p className="text-sm text-subblack">Jquery</p>
                </li>
                <li className="flex gap-x-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-purple animate-pulse"></div>
                  <p className="text-sm text-subblack">Typescript</p>
                </li>
                <li className="flex gap-x-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-purple animate-pulse"></div>
                  <p className="text-sm text-subblack">Javascript</p>
                </li>
                <li className="flex gap-x-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-purple animate-pulse"></div>
                  <p className="text-sm text-subblack">GIT</p>
                </li>
                <li className="flex gap-x-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-purple animate-pulse"></div>
                  <p className="text-sm text-subblack">HTML</p>
                </li>
                <li className="flex gap-x-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-purple animate-pulse"></div>
                  <p className="text-sm text-subblack">CSS</p>
                </li>
                <li className="flex gap-x-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-purple animate-pulse"></div>
                  <p className="text-sm text-subblack">Tailwind</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/2 h-full place-items-center hidden sm:grid">
            <img className="w-full" src="/11436094_4707122.jpg" alt=""></img>
          </div>
        </div>
        <div className="grid gap-y-10">
          <p className="text-4xl text-black" id="contact">
            Contact
          </p>
          <div className="grid gap-y-5">
            <div className="flex flex-wrap gap-5 items-center justify-between">
              <div className="grid gap-y-2">
                <div className="flex gap-x-2 text-black text-xl">
                  <i className="bi-phone"></i>
                  <p>Phone</p>
                </div>
                <p className="text-sm text-subblack">
                  I am also awaiable on Telegram/Whats app
                </p>
              </div>
              <p className="text-purple text-2xl">+98 930 105 5668</p>
            </div>
            <div className="flex flex-wrap gap-5 items-center justify-between">
              <div className="grid gap-y-2">
                <div className="flex gap-x-2 text-black text-xl">
                  <i className="bi-envelope"></i>
                  <p>Email</p>
                </div>
              </div>
              <p className="text-purple text-2xl">arashbp83@gmail.com</p>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
