import Image from 'next/image'

import FeatImage01 from '@/public/images/issuehubPreview.gif'
import FeatImage02 from '@/public/images/logtasticPreview.gif'
import FeatImage03 from '@/public/images/e2epulserExample.gif'
import FeatImage04 from '@/public/images/speechPythonExample.gif'
import FeatImage05 from '@/public/images/leadpulser.png'
import controlhub from '@/public/images/controlhub2.gif';
import seamless from '@/public/images/seamless.png';
import orthoeast from '@/public/images/orthoeast.png';
import hanta from '@/public/images/hanta.png';
import robinson from '@/public/images/RobinsonAndStith.png';
import hosting from '@/public/images/evolvehosting2.png'
import bughub from '@/public/images/bughub.png';
import docxandria from '@/public/images/docxandria1.gif';
import qi from '@/public/images/QiFull.gif';

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Current Projects</div>
            <h1 className="h2 mb-2">What I've been working on</h1>
            <div className="font-architects-daughter text-xl text-purple-600 mb-2">A few passion projects</div>
          </div>

          {/* Items */}
          <div className="grid gap-20">









          <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={qi} width={540} height={405} alt="Qi" />
              </div>
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="lg:pr-4 lg:pr-12 lg:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Transform Internal Operations with Retrieval-Augmented Generation.</div>
                  <h3 className="h3 mb-3">QI</h3>
                  <p className="text-xl text-gray-400 mb-4">QueryIntelligence is a sophisticated local/offline LLM hosting solution tailored for businesses. Designed to integrate seamlessly with your internal documents, QueryIntelligence leverages Retrieval-Augmented Generation to provide an artificial intelligence assistant that understands and works with your company's real data. QueryIntelligence excels at delivering precise, context-aware responses tailored to your business needs, empowering internal teams with a customized AI tool that enhances productivity and decision-making.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Utilizes Retrieval-Augmented Generation (RAG)</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Customized, Context-Aware AI Assistance</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Secure, Local LLM Hosting Solution</span>
                    </li>
                  </ul>
                  <div data-aos="fade-up" data-aos-delay="400" className='mt-3'>
                    <div
                      className="btn text-white bg-purple-600  w-full mt-4 sm:w-auto sm:mb-0"
                      >
                      In development
                    </div>
                  </div>
                </div>
              </div>
            </div>












          <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={docxandria} width={540} height={405} alt="Logtastic" />
              </div>
              {/* Content */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="lg:pl-4 lg:pl-12 lg:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Client queries, Client Answers.</div>
                  <h3 className="h3 mb-3">Doc-xandria</h3>
                  <p className="text-xl text-gray-400 mb-4">An innovative application designed to streamline access to documentation and APIs for various systems your company utilizes. By listening to your conversations during client calls or meetings, Doc-xandria intelligently fetches and displays relevant documents and APIs in real-time. This empowers you to provide immediate, accurate answers to client inquiries about your product or its ecosystem.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Seamless Information Access</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Real-Time Document Retrieval</span> 
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Intelligent API Integration</span>
                    </li>
                    <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Enhanced Client Interactions</span>
                    </li>
                  </ul>
                  <div data-aos="fade-up" data-aos-delay="600" className='mt-3'>
                    <a
                      className="btn text-white bg-gray-700 hover:bg-gray-800 mt-4 w-full sm:w-auto sm:mb-0"
                      href="https://docxandria.endquery.com"
                      target="_blank" rel="noreferrer">
                      Visit Doc-xandria</a>
                  </div>
                </div>
              </div>
            </div>









          <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={bughub} width={540} height={405} alt="BugHub" />
              </div>
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="lg:pr-4 lg:pr-12 lg:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">The straightforward solution for efficient issue resolution.</div>
                  <h3 className="h3 mb-3">BugHub</h3>
                  <p className="text-xl text-gray-400 mb-4">BugHub is a user-friendly bug tracking application designed specifically for React projects. Unlike complex development platforms, BugHub excels at simplifying the process of identifying, managing, and resolving bugs within your React applications.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Effortless Bug Monitoring</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Detailed Bug Reports</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Simple Integration</span>
                    </li>
                  </ul>
                  <div data-aos="fade-up" data-aos-delay="400" className='mt-3'>
                    <div
                      className="btn text-white bg-purple-600  w-full mt-4 sm:w-auto sm:mb-0"
                      >
                      In development
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={controlhub} width={540} height={405} alt="Logtastic" />
              </div>
              {/* Content */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="lg:pl-4 lg:pl-12 lg:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">All your systems, together.</div>
                  <h3 className="h3 mb-3">ControlHub</h3>
                  <p className="text-xl text-gray-400 mb-4">A secure and unified platform for users to sign in remotely to multiple servers. With customizable modules designed for popular services such as PM2, Apache, Nginx, PostgreSQL, MySQL, and more, users can effortlessly control and monitor their servers from a centralized hub. The intuitive interface streamlines operations, providing a seamless experience for managing files, configuring services, and optimizing server performance.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unified File Management</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span> Customizable Modules</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Centralized Control Center</span>
                    </li>
                    <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Streamlined Operations</span>
                    </li>
                  </ul>
                  <div data-aos="fade-up" data-aos-delay="600" className='mt-3'>
                    <a
                      className="btn text-white bg-gray-700 hover:bg-gray-800 mt-4 w-full sm:w-auto sm:mb-0"
                      href="https://controlhub.endquery.com"
                      target="_blank" rel="noreferrer">
                      Visit ControlHub</a>
                  </div>
                </div>
              </div>
            </div>



            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={FeatImage01} width={540} height={405} alt="IssueHub" />
              </div>
              {/* Content */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="lg:pr-4 lg:pr-12 lg:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"><span className='text-decoration-line: line-through'>find gihtub isssues</span>. Fix GitHub issues.</div>
                  <h3 className="h3 mb-3">IssueHub</h3>
                  <p className="text-xl text-gray-400 mb-4">IssueHub is a platform designed to assist you in discovering and resolving issues for open source projects hosted on GitHub. This tool streamlines the process of finding and fixing problems that require your attention, making it easier for you to contribute meaningfully to various projects.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Stay updated with the projects that matter to you!</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Contribute</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Get involved</span>
                    </li>
                  </ul>
                  <div data-aos="fade-up" data-aos-delay="400" className='mt-3'>
                    <a
                      className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mt-4 sm:w-auto sm:mb-0"
                      href="https://issuehub.endquery.com"
                      target="_blank" rel="noreferrer">
                      Visit IssueHub
                    </a>
                  </div>
                </div>
              </div>
            </div>


            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={FeatImage02} width={540} height={405} alt="Logtastic" />
              </div>
              {/* Content */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="lg:pl-4 lg:pl-12 lg:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More visually engaging logs</div>
                  <h3 className="h3 mb-3">Logtastic</h3>
                  <p className="text-xl text-gray-400 mb-4">Logtastic is a versatile npm package designed to enhance your console logging experience by allowing you to customize the appearance of your log messages with various colors, styles, and backgrounds. By integrating Logtastic into your project, you can make your terminal output more visually engaging and improve the distinction between different types of log messages.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Custom Formatting</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Silent Mode</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Logging to File</span>
                    </li>
                  </ul>
                  <div data-aos="fade-up" data-aos-delay="600" className='mt-3'>
                    <a
                      className="btn text-white bg-gray-700 hover:bg-gray-800 mt-4 w-full sm:w-auto sm:mb-0"
                      href="https://github.com/Ofrepose/logtastic"
                      target="_blank" rel="noreferrer">
                      Visit Repo</a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="lg:pr-4 lg:pr-12 lg:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Project dependency management - streamlined</div>
                  <h3 className="h3 mb-3">End-to-End Pulser </h3>
                  <p className="text-xl text-gray-400 mb-4">E2E Pulser is a versatile tool designed to streamline the management of your project's dependencies, keep you informed about outdated packages, and ensure the functionality of your application through end-to-end (E2E) testing.
                    This application simplifies the process of staying up-to-date, maintaining reliable user journeys, and addressing potential issues.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Dependency Management</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Out-of-Date Notifications</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>End-to-End (E2E) Testing</span>
                    </li>
                  </ul>
                  <div data-aos="fade-up" data-aos-delay="400" className='mt-3'>
                    <a
                      className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mt-4 sm:w-auto sm:mb-0"
                      href="https://e2epulser.endquery.com"
                      target="_blank" rel="noreferrer">
                      Visit E2E Pulser
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={FeatImage04} width={540} height={405} alt="Logtastic" />
              </div>
              {/* Content */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="lg:pl-4 lg:pl-12 lg:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Python Speech Recognition Software with Keyword Overlay</div>
                  <h3 className="h3 mb-3">pyOverlay</h3>
                  <p className="text-xl text-gray-400 mb-4">This Python speech recognition software is designed to enhance video call experiences by listening for specific keywords from a library.
                    When the software detects a keyword, it overlays the definition and example of the keyword on the screen, providing real-time context and information to the user.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Keyword Detection</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Definition Overlay</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Customizable Libraries</span>
                    </li>
                  </ul>
                  <div data-aos="fade-up" data-aos-delay="600" className='mt-3'>
                    <a
                      className="btn text-white bg-gray-700 hover:bg-gray-800 mt-4 w-full sm:w-auto sm:mb-0"
                      href="https://github.com/Ofrepose/speech-dictionary"
                      target="_blank" rel="noreferrer">
                      Download from Repo</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={FeatImage05} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="lg:pr-4 lg:pr-12 lg:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Harness the power of digital insights!</div>
                  <h3 className="h3 mb-3">Lead Pulser </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    With LeadPulser, you gain valuable insights into a business's web presence, identifying opportunities for improvement through detailed evaluations of SEO and accessibility, along with easy-to-understand breakdowns of the issues.
                    Armed with this knowledge, you can offer targeted solutions tailored to each client's specific needs.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Detailed analytics of web presence</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Identifying SEO improvements</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Accessibility scores and breakdowns</span>
                    </li>
                  </ul>
                  <div data-aos="fade-up" data-aos-delay="400" className='mt-3'>
                    <a
                      className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mt-4 sm:w-auto sm:mb-0"
                      href="https://leadpulser.endquery.com"
                      target="_blank" rel="noreferrer">
                      Visit Lead Pulser
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>




      




































      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Professional</div>
            <h1 className="h2 mb-2">Experience</h1>
            <div className="font-architects-daughter text-xl text-purple-600 mb-2">Websites and Applications</div>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={seamless} width={540} height={405} alt="Logtastic" />
              </div>
              {/* Content */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="lg:pl-4 lg:pl-12 lg:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Frontend Engineer</div>
                  <h3 className="h3 mb-3">Seamless.AI</h3>
                  <div data-aos="fade-up" data-aos-delay="600" className='mt-3'>
                    <a
                      className="btn text-white bg-gray-700 hover:bg-gray-800 mt-4 w-full sm:w-auto sm:mb-0"
                      href="https://seamless.ai/"
                      target="_blank" rel="noreferrer">
                      Visit Seamless.AI</a>
                  </div>
                </div>
              </div>
            </div>



            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={orthoeast} width={540} height={405} alt="IssueHub" />
              </div>
              {/* Content */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="lg:pr-4 lg:pr-12 lg:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Web Developer</div>
                  <h3 className="h3 mb-3">Orthopaedics East</h3>

                  <div data-aos="fade-up" data-aos-delay="400" className='mt-3'>
                    <a
                      className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mt-4 sm:w-auto sm:mb-0"
                      href="https://orthoeast.com/"
                      target="_blank" rel="noreferrer">
                      Visit Orthopaedics East
                    </a>
                  </div>
                </div>
              </div>
            </div>


            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={hanta} width={540} height={405} alt="Logtastic" />
              </div>
              {/* Content */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="lg:pl-4 lg:pl-12 lg:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Web Developer</div>
                  <h3 className="h3 mb-3">Hanta Rods and Lures</h3>
                  
                  <div data-aos="fade-up" data-aos-delay="600" className='mt-3'>
                    <a
                      className="btn text-white bg-gray-700 hover:bg-gray-800 mt-4 w-full sm:w-auto sm:mb-0"
                      href="https://hantarodsandlures.com/"
                      target="_blank" rel="noreferrer">
                      Visit Hanta</a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={robinson} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="lg:pr-4 lg:pr-12 lg:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Web Developer</div>
                  <h3 className="h3 mb-3">Robinson & Stith </h3>
                  
                  <div data-aos="fade-up" data-aos-delay="400" className='mt-3'>
                    <a
                      className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mt-4 sm:w-auto sm:mb-0"
                      href="https://www.robinsonstith.com/"
                      target="_blank" rel="noreferrer">
                      Visit Robinson & Stith
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto lg:col-span-5 lg:col-span-6 mb-8 lg:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto lg:max-w-none h-auto shadow-lg" src={hosting} width={540} height={405} alt="Logtastic" />
              </div>
              {/* Content */}
              <div className="max-w-xl lg:max-w-none lg:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="lg:pl-4 lg:pl-12 lg:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Software Developer</div>
                  <h3 className="h3 mb-3">Evolve Hosting Software</h3>
                  <p className="text-xl text-gray-400 mb-4">Hosting automation software to control, repair, and maintain 100+ websites being hosted by mid-size Marketing firm</p>
                  
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="font-architects-daughter text-3xl text-purple-600 mb-2">And Much More!</div>
            <a className="h2 mb-2" href="https://www.linkedin.com/in/danielfpayne/"
                      target="_blank" rel="noreferrer">Let's work together!</a>
          </div>

            

          </div>

        </div>
      </div>
    </section>
  )
}
