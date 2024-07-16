import bugHub1 from 'assets/img/bighub1.png';

export const Logo = ({ textExtra, imageExtra }) => {

    return (
        <div className='flex items-center'>
            <span className={`text-primaryYellow font-poppins md:text-4xl text-2xl ${textExtra}`}>Bug</span>
            <img
                src={bugHub1}
                alt="Logo"
                className={`md:px-2 px-1 md:h-14 h-12 ${imageExtra}`}
                style={{ width: 'auto' }}
            />
            <span className={`text-primaryBlue font-poppins md:text-4xl text-2xl ${textExtra}`}>Hub</span>
        </div>
    )
}

export default Logo;