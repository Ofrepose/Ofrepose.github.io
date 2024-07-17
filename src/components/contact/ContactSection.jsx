import { FaLinkedin, FaGithub, FaNpm } from "react-icons/fa";



const ContactSection = () => {

    return (
        <div className="flex flex-wrap w-full text-xl">
            <FaLinkedin
                onClick={() => window.open('https://www.linkedin.com/in/danielfpayne/')}
                className="text-gray-500 hover:cursor-pointer hover:text-primaryBlue mr-2"
            />

            <FaGithub
                onClick={() => window.open('https://github.com/Ofrepose')}
                className="text-gray-500 hover:cursor-pointer hover:text-primaryBlue mr-2"
            />

            <FaNpm
                onClick={() => window.open('https://www.npmjs.com/~ofrepose')}
                className="text-gray-500 hover:cursor-pointer hover:text-primaryBlue mr-2"
            />

        </div>
    )
}

export default ContactSection;