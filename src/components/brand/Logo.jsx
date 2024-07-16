

export const Logo = ({ textExtra, imageExtra }) => {

    return (
        <div className='flex items-center'>
            <span className={`text-primaryYellow font-poppins md:text-4xl text-2xl ${textExtra}`}>Bug</span>
            
            <span className={`text-primaryBlue font-poppins md:text-4xl text-2xl ${textExtra}`}>Hub</span>
        </div>
    )
}

export default Logo;