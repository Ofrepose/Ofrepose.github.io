
import Footer from 'components/footer/FooterAuthDefault';
import TerminalBlock from "components/codeBlock/TerminalBlock";
import { Logo } from 'components/brand/Logo';
import ButtonBrand from 'components/brand/ButtonBrand';
import headerImage from 'assets/img/coder5_edited.png';
import controlHub from 'assets/img/controlhub2.gif';


const MarketingHome = () => {
    return (
        <div className="min-h-screen max-w-100% flex flex-wrap justify-center">
            <div className='bg-lightGray w-full flex flex-wrap justify-center '>
                <div className='w-[1300px] max-w-[1300px] py-3 px-3 2xl:px-0 px-4' >

                    <div className=' h-[calc(100vh-80px)] flex flex-wrap items-center content-center justify-between'>
                        <div className='flex flex-wrap items-start content-center lg:w-1/2 pr-4 mb-5 md:mb-10 xl:mb-0'>
                            <h2 className='w-full m-0 p-0 md:text-[40px] text-[30px] text-gray-500 font-poppins md:leading-[50px] leading-[40px]'>Hello 👋, I'm
                            </h2>
                            <h1 className='w-full m-0 p-0 md:text-[50px] text-[40px] text-white font-poppins md:leading-[50px] leading-[40px]'>Daniel Payne
                            </h1>
                            <div>
                                <p className='font-architects text-primaryBlue md:text-2xl text-xl pt-2'>Full Stack Developer </p>
                                <ButtonBrand
                                    extra={`hidden md:block mt-4`}
                                    onClickHandler={() => window.location.href = '/auth/sign-up'}
                                    buttonText='Contact'
                                />
                            </div>
                        </div>
                        <div className='flex flex-wrap lg:w-1/2 justify-end'>

                            <div>
                                <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                                    <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0'>
                                        <h2 className='text-xl font-poppins text-white/80 tracking-widest'>About</h2>
                                    </div>
                                    <p className="mb-4 text-gray-500 md:text-xl text-md">
                                        I began my programming journey in 2018 when I discovered the Unity game engine. Creating games with C# was a revelation—it was the first time coding truly clicked for me. A few years later,
                                        I decided to expand my horizons and dive into web development. I loved solving problems and automating tedious tasks with code.
                                    </p>

                                    <p className="mb-4 text-gray-500 md:text-xl text-md">
                                        Today, I primarily use React and Node.js in my professional work, but I often find myself diving into Python for side projects.
                                        To date, I've had the privilege of developing solutions and building products for various clients at a
                                        <a className="font-medium text-white/80 hover:text-primaryBlue focus-visible:text-teal-300" href="https://evolveinc.com/" target="_blank" rel="noreferrer noopener" aria-label="advertising agency (opens in a new tab)">
                                            {' '}marketing firm
                                        </a>
                                        , and contributing to the front-end and extension team at a mid-stage
                                        <a className="font-medium text-white/80 hover:text-primaryBlue focus-visible:text-teal-300" href="https://seamless.ai/" target="_blank" rel="noreferrer noopener" aria-label="start-up (opens in a new tab)">
                                            {' '}start-up
                                        </a>
                                        , a
                                        <a className="font-medium text-white/80 hover:text-primaryBlue focus-visible:text-teal-300" href="https://www.apple.com/apple-music/" target="_blank" rel="noreferrer noopener" aria-label="huge corporation (opens in a new tab)">
                                            huge corporation
                                        </a>
                                        , and a
                                        <a className="font-medium text-white/80 hover:text-primaryBlue focus-visible:text-teal-300" href="https://upstatement.com/" target="_blank" rel="noreferrer noopener" aria-label="digital product studio (opens in a new tab)">
                                            digital product studio
                                        </a>.
                                    </p>
                                </section>



                            </div>

                        </div>
                        <ButtonBrand
                            extra={`block md:hidden max-w-[500px] md:w-[150px] w-[90vw] mt-0 md:mt-4 ml-auto mr-auto`}
                            onClickHandler={() => window.location.href = '/auth/sign-up'}
                            buttonText='Contact'
                        />
                    </div>
                </div>
            </div>








            <div className='bg-lightGray w-full flex flex-wrap justify-center shadow-xl'>
                {/* main content */}
                <div className='w-[1300px] max-w-[1300px] py-3 px-3' >
                    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Experience">
                        <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0'>
                            <h2 className='text-xl font-poppins text-white/80 tracking-widest'>Experience</h2>
                        </div>
                        <div className='flex flex-wrap'>
                            <div>
                                <ol className="group/list">



                                    <li className="mb-12">
                                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 text-white/80">

                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                                            </div>
                                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                                                2022 — 2023
                                            </header>
                                            <div className="z-10 sm:col-span-6">
                                                <h3 className="font-medium leading-snug text-slate-200">
                                                    <div>
                                                        <a
                                                            className="inline-flex items-baseline font-medium leading-tight hover:text-primaryBlue group/link text-base"
                                                            href="https://www.seamless.ai"
                                                            target="_blank"
                                                            rel="noreferrer noopener"
                                                            aria-label="Frontend Engineer, Extension at Seamless.AI (opens in a new tab)">
                                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                                            </span>
                                                            <span>
                                                                Frontend Engineer, Extension · {' '}
                                                                <span className="inline-block">
                                                                    Seamless.AI
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                                                                    </path>
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </h3>
                                                <p className="mt-2 text-md leading-normal text-gray-500">
                                                    I collaborated with product managers and designers to enhance Seamless.AI's user interface based on feedback and design specs. I developed responsive, user-friendly UI components with React, ensuring smooth navigation and data presentation.
                                                    I led unit testing efforts on the backend, increasing test coverage by 60%, and played a key role in driving product improvements to maintain Seamless.AI's competitive edge.
                                                </p>
                                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-primaryBlue/10 px-3 py-1 text-xs font-medium leading-5 text-primaryBlue">
                                                            JavaScript
                                                        </div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-primaryBlue/10 px-3 py-1 text-xs font-medium leading-5 text-primaryBlue">
                                                            React
                                                        </div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-primaryBlue/10 px-3 py-1 text-xs font-medium leading-5 text-primaryBlue">
                                                            Jest
                                                        </div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-primaryBlue/10 px-3 py-1 text-xs font-medium leading-5 text-primaryBlue">
                                                            NodeJS
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>







                                    <li className="mb-12">
                                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 text-white/80">

                                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                                            </div>
                                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                                                2020 — 2022
                                            </header>
                                            <div className="z-10 sm:col-span-6">
                                                <h3 className="font-medium leading-snug">
                                                    <div>
                                                        <a
                                                            className="inline-flex items-baseline font-medium leading-tight hover:text-primaryBlue group/link text-base"
                                                            href="https://www.evolveinc.com"
                                                            target="_blank"
                                                            rel="noreferrer noopener"
                                                            aria-label="Lead Developer, Evolve, Inc. (opens in a new tab)">
                                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                                            </span>
                                                            <span>
                                                                Lead Developer · {' '}
                                                                <span className="inline-block">
                                                                    Evolve, Inc
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 20 20" fill="currentColor"
                                                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                                                                        </path>
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </h3>
                                                <p className="mt-2 text-md leading-normal text-gray-500">
                                                    I engineered and managed a suite of internal monitoring and administration tools, enhancing the robustness of our hosting management systems. In a fast-paced agile environment, I collaborated with a dynamic team to deliver mobile-first web applications tailored to diverse client needs. I automated critical processes and streamlined report generation using Python and JavaScript, significantly improving client value and uptime for over 100 websites.
                                                    Additionally, I developed and deployed innovative redundancy server solutions to maximize system uptime and automate failover processes, ensuring continuous protection and reliability.
                                                </p>
                                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-primaryBlue/10 px-3 py-1 text-xs font-medium leading-5 text-primaryBlue">
                                                            JavaScript
                                                        </div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-primaryBlue/10 px-3 py-1 text-xs font-medium leading-5 text-primaryBlue">
                                                            React
                                                        </div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-primaryBlue/10 px-3 py-1 text-xs font-medium leading-5 text-primaryBlue">
                                                            Python
                                                        </div>
                                                    </li>
                                                    <li className="mr-1.5 mt-2">
                                                        <div className="flex items-center rounded-full bg-primaryBlue/10 px-3 py-1 text-xs font-medium leading-5 text-primaryBlue">
                                                            PHP
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                </ol>




                            </div>
                        </div>
                    </section>
                </div>
            </div>














            <div className='bg-lightGray w-full flex flex-wrap justify-center shadow-xl'>
                {/* main content */}
                <div className='w-[1300px] max-w-[1300px] py-3 px-3' >
                    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Projects">
                        <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0'>
                            <h2 className='text-xl font-poppins text-white/80 tracking-widest'>Projects</h2>
                        </div>
                        <div className='flex flex-wrap'>
                            <div>


                                <ul class="group/list">
                                    <li class="mb-12">
                                        <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 text-white/80">
                                            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                                            </div>
                                            <div class="z-10 sm:order-2 sm:col-span-6">
                                                <h3>
                                                    <a
                                                        class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-primaryBlue focus-visible:text-primaryBlue  group/link text-base"
                                                        href="https://www.newline.co/courses/build-a-spotify-connected-app"
                                                        target="_blank"
                                                        rel="noreferrer noopener"
                                                        aria-label="Build a Spotify Connected App (opens in a new tab)">
                                                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                                        </span>
                                                        <span>
                                                            ControlHub - Remote Connection|Dynamic GUI's for Terminal Commands {' '}
                                                            <span class="inline-block">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20" fill="currentColor"
                                                                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                                    aria-hidden="true">
                                                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                                                                    </path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </h3>
                                                <p class="mt-2 text-md leading-normal text-gray-500">
                                                I created a secure and unified platform that lets users sign in remotely to multiple servers with ease. Featuring customizable modules for popular services like PM2, Apache, Nginx, PostgreSQL, MySQL, and more, users can effortlessly control and monitor their servers from one central hub. The intuitive interface makes it easy to manage files, configure services, and optimize server performance, providing a seamless experience for all your server management needs.
                                                </p>
                                            </div>
                                            <img
                                                alt="Build a Spotify Connected App Newline course marketing card"
                                                loading="lazy"
                                                width="200"
                                                height="48"
                                                decoding="async"
                                                data-nimg="1"
                                                class="rounded border-2 border-lightGray transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                                src={controlHub} />
                                        </div>
                                    </li>


                                </ul>

                            </div>
                        </div>
                    </section>
                </div>
            </div>













            


            <div className='bg-gray-0 w-full flex flex-wrap justify-center shadow-xl items-center content-center pt-8 '>
                <Footer />
            </div>








        </div>
    )
}

export default MarketingHome;