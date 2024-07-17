
import EmploymentEntry from 'components/experience/EmploymentEntry';
import Project from 'components/projects/Project';

import controlHub from 'assets/img/controlhub2.gif';
import orthoEast from 'assets/img/orthoeast.png';
import robinsonAndStith from 'assets/img/RobinsonAndStith.png';
import docxandria from 'assets/img/docxandria1.gif';
import e2e from 'assets/img/e2epulserExample.gif';
import leadpulser from 'assets/img/leadpulser.png';
import logtasticPreview from 'assets/img/logtasticPreview.gif';
import ContactSection from 'components/contact/ContactSection';

const MarketingHome = () => {
    return (
        <div className="min-h-screen max-w-100% flex flex-wrap justify-center">
            <div className='bg-lightGray w-full flex flex-wrap justify-center '>
                <div className='w-[1300px] max-w-[1300px] py-3 px-3 2xl:px-0 px-4' >

                    <div className=' min-h-[calc(100vh-80px)] flex flex-wrap items-center content-center justify-between'>
                        <div className='flex flex-wrap items-start content-center lg:w-1/2 pr-4 mb-5 md:mb-10 xl:mb-0'>
                            <h2 className='w-full m-0 p-0 md:text-[40px] text-[30px] text-gray-500 font-poppins md:leading-[50px] leading-[40px]'>Hello 👋, I'm
                            </h2>
                            <h1 className='w-full m-0 p-0 md:text-[50px] text-[40px] text-white font-poppins md:leading-[50px] leading-[40px]'>Daniel Payne
                            </h1>
                            <div>
                                <p className='font-architects text-primaryBlue md:text-2xl text-xl pt-2'>Full Stack Developer </p>
                                <ContactSection />
                            </div>
                        </div>
                        <div className='flex flex-wrap lg:w-1/2 justify-end'>

                            <div>
                                <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                                    <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0'>
                                        <h2 className='md:text-lg text-md font-poppins text-white/80 tracking-widest font-bold uppercase'>About</h2>
                                    </div>
                                    <p className="mb-4 text-gray-500 md:text-lg text-md">
                                        I began my programming journey in 2018 when I discovered the Unity game engine. Creating games with C# was a revelation—it was the first time coding truly clicked for me. A few years later,
                                        I decided to expand my horizons and dive into web development. I loved solving problems and automating tedious tasks with code.
                                    </p>

                                    <p className="mb-4 text-gray-500 md:text-lg text-md">
                                        Today, I primarily use React and Node.js in my professional work, but I often find myself diving into Python for side projects.
                                        To date, I've had the privilege of developing solutions and building products for various clients at a
                                        <a className="font-medium text-white/80 hover:text-primaryBlue focus-visible:text-teal-300" href="https://evolveinc.com/" target="_blank" rel="noreferrer noopener" aria-label="advertising agency (opens in a new tab)">
                                            {' '}marketing firm
                                        </a>
                                        , and contributing to the front-end and extension team at a mid-stage
                                        <a className="font-medium text-white/80 hover:text-primaryBlue focus-visible:text-teal-300" href="https://seamless.ai/" target="_blank" rel="noreferrer noopener" aria-label="start-up (opens in a new tab)">
                                            {' '}start-up.
                                        </a>

                                    </p>
                                    <p className="mb-4 text-gray-500 md:text-lg text-md">
                                        My coding philosophy is to write beautiful, simple code. When I'm not coding, you can find me exploring the latest tech trends, tending to my garden, chasing my dogs around, or playing PVE and RTS video games.
                                    </p>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-lightGray w-full flex flex-wrap justify-center shadow-xl'>
                <div className='w-[1300px] max-w-[1300px] py-3 px-3' >
                    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Experience">
                        <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0'>
                            <h2 className='md:text-lg text-md font-poppins text-white/80 tracking-widest font-bold uppercase'>Experience</h2>
                        </div>
                        <div className='flex flex-wrap'>
                            <div>
                                <ol className="group/list">
                                    <li className="mb-12">
                                        <EmploymentEntry
                                            startDate="2022"
                                            endDate="2023"
                                            jobTitle="Frontend Engineer, Extension"
                                            company="Seamless.AI"
                                            companyUrl="https://seamless.ai"
                                            description={`
                                            I collaborated with product managers and designers to enhance Seamless.AI's user interface based on feedback and design specs. I developed responsive, user-friendly UI components with React, ensuring smooth navigation and data presentation.
                    I led unit testing efforts on the backend, increasing test coverage by 60%, and played a key role in driving product improvements to maintain Seamless.AI's competitive edge.
                                            `}
                                            technologiesUsed={['Javascript', 'React', 'Jest', 'NodeJS']}
                                        />
                                    </li>

                                    <li className="">
                                        <EmploymentEntry
                                            startDate="2020"
                                            endDate="2022"
                                            jobTitle="Lead Developer"
                                            company="Evolve, Inc"
                                            companyUrl="https://evolveinc.com"
                                            description={`
                                            I engineered and managed a suite of internal monitoring and administration tools, enhancing the robustness of our hosting management systems. In a fast-paced agile environment, I collaborated with a dynamic team to deliver mobile-first web applications tailored to diverse client needs. I automated critical processes and streamlined report generation using Python and JavaScript, significantly improving client value and uptime for over 100 websites.
                                                    Additionally, I developed and deployed innovative redundancy server solutions to maximize system uptime and automate failover processes, ensuring continuous protection and reliability.
                                            `}
                                            technologiesUsed={['Javascript', 'React', 'NodeJS', 'Python', 'PHP', 'LAMP', 'ConcreteCMS', 'WordPress', 'Drupal', 'Digital Ocean']}
                                        />
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className='bg-lightGray w-full flex flex-wrap justify-center shadow-xl'>
                <div className='w-[1300px] max-w-[1300px] py-3 px-3' >
                    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Projects">
                        <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0'>
                            <h2 className='md:text-lg text-md font-poppins text-white/80 tracking-widest font-bold uppercase'>Projects</h2>
                        </div>
                        <div className='flex flex-wrap'>
                            <div>

                                <ul class="group/list">
                                    <li class="mb-12">
                                        <Project
                                            name=" ControlHub - Remote Connection|Dynamic GUI's for Terminal Commands"
                                            url=""
                                            label="ControlHub remote server app"
                                            description={`
                                                     I created a secure and unified platform that lets users sign in remotely to multiple servers with ease. Featuring customizable modules for popular services like PM2, Apache, Nginx, PostgreSQL, MySQL, and more, users can effortlessly control and monitor their servers from one central hub. The intuitive interface makes it easy to manage files, configure services, and optimize server performance, providing a seamless experience for all your server management needs.
                                                    `}
                                            imgSrc={controlHub}
                                            tags={['Javascript', 'React', 'NodeJS', 'MongoDB']}
                                        />
                                    </li>

                                    <li class="mb-12">
                                        <Project
                                            name=" OrthoEast"
                                            url="https://orthoeast.com"
                                            label="orthoeast website"
                                            description={`
                                                Orthopaedics East needed a digital makeover to stay competitive, so they came to us for a website redesign and rebuild. I led the development team and collaborated closely with our designers in an agile environment to bring their new website to life.   
                                                `}
                                            imgSrc={orthoEast}
                                            tags={['Javascript', 'WordPress', 'PHP', 'LAMP', 'Digital Ocean']}
                                        />
                                    </li>

                                    <li class="mb-12">
                                        <Project
                                            name="Docxandria | Document aggregation and voice search application"
                                            url=""
                                            label="Docxandria"
                                            description={`
                                                  An application that simplifies access to documentation and APIs for the various systems your company uses. It listens to your conversations during client calls or meetings and intelligently fetches and displays relevant documents and APIs in real-time. This empowers you to provide immediate and accurate answers to client inquiries about your product or its ecosystem, enhancing your efficiency and professionalism.
                                                `}
                                            imgSrc={docxandria}
                                            tags={['Javascript', 'React', 'NodeJS', 'MongoDB', 'Cheerio']}
                                        />
                                    </li>

                                    <li class="mb-12">
                                        <Project
                                            name="Robinson and Stith Insurance"
                                            url="https://www.robinsonstith.com/"
                                            label="Robinson Stith Insurance"
                                            description={`
                                                   Robinson and Stith Insurance Company needed a digital presence that would help them stand out in the competitive local market. They turned to us for a solution. Collaborating closely with our talented design team, we created a modern and visually appealing website that not only showcases their services but also enhances their brand identity. The new site features user-friendly navigation, compelling content, and a sleek design that sets them apart from the competition.
                                                `}
                                            imgSrc={robinsonAndStith}
                                            tags={['Javascript', 'WordPress', 'PHP', 'LAMP', 'Digital Ocean']}
                                        />
                                    </li>

                                    <li class="mb-12">
                                        <Project
                                            name="LeadPulser"
                                            url=""
                                            label="LeadPulser web application"
                                            description={`
                                                   An application that helps you get valuable insights into a business's web presence, pinpointing opportunities for improvement with detailed evaluations of SEO and accessibility. It provides easy-to-understand breakdowns of issues, allowing you to offer targeted solutions tailored to each client's specific needs. Armed with this knowledge, you can help your clients enhance their online performance and reach their goals more effectively.
                                                `}
                                            imgSrc={leadpulser}
                                            tags={['Javascript', 'React', 'NodeJS', 'MongoDB', 'Puppeteer']}
                                        />
                                    </li>

                                    <li class="mb-12">
                                        <Project
                                            name="E2E Pulser"
                                            url=""
                                            label="E2E Pulser application"
                                            description={`
                                                   With this application I set out to streamline project dependency management. E2E Pulser keeps users informed about outdated packages and ensures application functionality through end-to-end (E2E) testing. By simplifying the process of staying up-to-date, maintaining reliable user journeys, and addressing potential issues, this application helps developers focus on building great products without worrying about the intricacies of dependency management.
                                                `}
                                            imgSrc={e2e}
                                            tags={['Javascript', 'React', 'NodeJS', 'MongoDB', 'Playwright']}
                                        />
                                    </li>

                                    <li class="mb-12">
                                        <Project
                                            name="Logtastic"
                                            url="https://github.com/Ofrepose/logtastic"
                                            label="Logtastic NPM package repo link"
                                            description={`
                                                   I wanted an easy way to style my terminal logs for my Node.js backend, so I created Logtastic, a versatile npm package designed to enhance your console logging experience. With Logtastic, you can customize the appearance of your log messages with various colors, styles, and backgrounds. By integrating Logtastic into your project, you can make your terminal output more visually engaging and improve the distinction between different types of log messages.
                                                `}
                                            imgSrc={logtasticPreview}
                                            tags={['Javascript', 'NPM']}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default MarketingHome;