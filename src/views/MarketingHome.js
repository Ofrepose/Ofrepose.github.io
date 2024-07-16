import global2green from 'assets/img/marketing/global2green.svg';
import globe from 'assets/img/marketing/globe.svg';
import Footer from 'components/footer/FooterAuthDefault';
import TerminalBlock from "components/codeBlock/TerminalBlock";
import { Logo } from 'components/brand/Logo';
import ButtonBrand from 'components/brand/ButtonBrand';


const MarketingHome = () => {
    return (
        <div className="min-h-screen max-w-100% flex flex-wrap justify-center">
            <div className='bg-lightGray w-full flex flex-wrap justify-center '>
                {/* main content */}
                <div className='w-[1300px] max-w-[1300px] py-3 px-3 2xl:px-0 px-4' >
                    <div className="h-90px pt-3 flex flex-wrap justify-between">
                        {/* left side */}
                        <div className='flex flex-wrap items-center justify-around font-poppins'>
                            <div>
                                <Logo
                                    textExtra={`md:text-4xl text-2xl`}
                                    imageExtra={`md:h-14 h-12`}
                                />
                            </div>
                        </div>

                        {/* right side */}
                        <div className='flex flex-wrap items-center justify-around font-poppins'>
                            <div className='md:px-6 px-3 text-gray-500 cursor-pointer hover:text-white transition duration-200 font-poppins xl:text-lg text-sm'
                                onClick={() => window.location.href = '/'}
                            >Docs</div>
                            <div className='md:px-6 px-3 text-gray-500 cursor-pointer hover:text-white transition duration-200 font-poppins xl:text-lg text-sm'
                                onClick={() => window.location.href = '/login'}
                            >Login</div>
                            <ButtonBrand
                            extra={`md:block hidden `}
                            onClickHandler={() => window.location.href = '/auth/sign-up'}
                            buttonText='Get Started Free!'
                        />
                        </div>
                    </div>
                    <div className=' h-[calc(100vh-80px)] flex flex-wrap items-center content-center md:justify-start justify-center'>
                        <div className='flex flex-wrap items-start content-center lg:w-1/2 pr-4 mb-10 xl:mb-0'>
                            <h1 className='w-full m-0 p-0 md:text-[50px] text-[40px] text-gray-500 font-poppins md:leading-[50px] leading-[40px]'><span className='text-primaryYellow'>Simplified</span> Bug Tracking for React Apps
                            </h1>
                            <div>
                                <p className='font-architects text-white md:text-base text-md pt-2'>a straightforward solution for efficient issue resolution </p>
                                <ButtonBrand
                                    extra={`hidden 2xl:block mt-4`}
                                    onClickHandler={() => window.location.href = '/auth/sign-up'}
                                    buttonText='Start Tracking!'
                                />
                            </div>
                        </div>
                        <div className='flex flex-wrap align-center items-center lg:w-1/2'>
                            <div className='font-architects text-primaryBlue md:text-[45px] text-[25px] leading-[10px] z-10 w-full'>Set-up in <span className='text-primaryYellow'>seconds!</span></div>
                            <TerminalBlock
                                codeLanguage={'javascript'}
                                extra={`shadow-xl rounded-lg px-2 py-4 !mt-0 max-w-[90vw] md:!text-[16px] !text-[10px] w-full`}
                                code={`
import {BugCatcher} from '@ofrepose/bughub-react';

<BugCatcher config={config}>
    {/* application */}
</BugCatcher>

          `}
                            />
                        </div>
                        <ButtonBrand
                            extra={`block 2xl:hidden max-w-[500px] md:w-[150px] w-[90vw] mt-4`}
                            onClickHandler={() => window.location.href = '/auth/sign-up'}
                            buttonText='Start Tracking!'
                        />
                    </div>
                </div>
            </div>








            <div className='bg-gray-0 w-full flex flex-wrap justify-center shadow-xl'>
                {/* main content */}
                <div className='w-[1300px] max-w-[1300px] py-3 px-3' >
                    <div className=' h-[calc(50vh)] flex flex-wrap items-center  justify-start '>
                        <div className='flex flex-wrap items-start content-center justify-start lg:w-2/3 h-1/2 md:w-full'>
                            <p className='text-sm text-brand-400'>GUI</p>
                            <h1 className='w-full m-0 p-0 md:text-[50px] text-[30px] text-gray-500 font-poppins text-left '><span className='text-green-400'></span>  Intuitive Interface 🎨</h1>
                            <div>
                                <p className='mt-2 font-mono text-white text-left md:text-base text-sm'>Navigate through your systems with an intuitive graphical user interface. Say goodbye to complex commands and hello to a user-friendly experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




















            <div className='bg-gray-light w-full flex flex-wrap justify-center'>
                {/* main content */}
                <div className='w-[1400px] max-w-[1400px] py-3 px-3' >
                    <div className=' h-[calc(50vh)] flex flex-wrap items-center   '>
                        <div className='flex flex-wrap items-center content-center justify-center lg:w-1/2 h-1/2 md:w-full lg:flex md:hidden  hidden'>
                            <img
                                src={globe}
                                alt="Logo"
                                className="h-full"
                                style={{ width: 'auto' }}
                            />
                        </div>
                        <div className='flex flex-wrap items-start content-center justify-end lg:w-1/2 h-1/2 md:w-full'>
                            <p className='text-sm text-brand-400'>Connect</p>
                            <h1 className='w-full m-0 p-0 text-gray-500 font-poppins text-right md:text-[50px] text-[30px]'><span className='text-green-400'>⚡ Real-Time</span> Connectivity</h1>
                            <div>
                                <p className='mt-2 font-mono text-white text-right md:text-base text-sm'>Unlock the potential of effortless remote system management with ControlHub.
                                    Our innovative software bridges the gap between your local environment and diverse systems, offering a comprehensive solution for streamlined operations.</p>
                            </div>
                            <button
                                className='mt-8 linear w-[150px] rounded-xl bg-brand-400 py-[12px] text-brand font-bold text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 font-poppin '
                                onClick={() => window.location.href = '/auth/sign-up'}
                                type='submit'
                            >
                                Connect.
                            </button>
                        </div>
                    </div>
                </div>
            </div>




















            <div className='bg-gray-0 w-full flex flex-wrap justify-center shadow-xl '>
                {/* main content */}
                <div className='w-[1300px] max-w-[1300px] py-3 px-3' >
                    <div className=' h-[calc(50vh)] flex flex-wrap items-center   '>
                        <div className='flex flex-wrap items-start content-center justify-start lg:w-1/2 h-1/2 md:w-full'>
                            <p className='text-sm text-brand-400'>Synchronize</p>
                            <h1 className='w-full m-0 p-0 text-gray-500 font-poppins md:text-[50px] text-[30px]'><span className='text-green-400'>Unified
                            </span> Access 🌐 </h1>{/* <div className='w-full m-0 p-0 mt-[-20px] text-[50px] text-green-400 font-poppins'>All of your systems</div> */}
                            <div>
                                <p className='mt-2 font-mono text-white text-left md:text-base text-sm'>Access all your systems effortlessly from any browser. Eliminate the need for multiple tools and enjoy a centralized hub for remote management.</p>
                            </div>

                        </div>
                        <div className='flex flex-wrap items-center content-center justify-center lg:w-1/2 h-1/2 md:w-full lg:flex md:hidden  hidden'>
                            <img
                                src={global2green}
                                alt="Logo"
                                className="h-full"
                                style={{ width: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </div>













            <div className='bg-gray-light w-full flex flex-wrap justify-center'>
                {/* main content */}
                <div className='w-[1400px] max-w-[1400px] py-3 px-3' >
                    <div className=' h-[calc(50vh)] flex flex-wrap items-center  justify-center '>
                        <div className='flex flex-wrap items-center content-center lg:w-full h-1/2 md:w-full justify-center'>
                            <h1 className='w-full m-0 p-0 text-gray-500 font-poppins text-center md:text-[50px] text-[30px]'>Ready to <span className='text-brand-400'>Start?</span></h1>
                            <div className='w-full m-0 p-0 md:mt-[-20px] mt-[-10px] font-poppins text-gray-500 text-center md:text-[50px] text-[30px]'>Get started <span className='font-bold text-green-400' >Free</span></div>
                            <div className='flex flex-wrap justify-center'>
                                <p className='font-mono text-white text-center w-full md:text-base text-sm'>Say goodbye to the complexities of remote system management </p>
                                <button
                                    className='mt-4 linear w-[150px] rounded-xl bg-brand-400 py-[12px] text-brand font-bold text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 font-poppin '
                                    onClick={() => window.location.href = '/auth/sign-up'}
                                    type='submit'
                                >
                                    Get Started
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-gray-0 w-full flex flex-wrap justify-center shadow-xl items-center content-center pt-8 '>
                <Footer />
            </div>








        </div>
    )
}

export default MarketingHome;