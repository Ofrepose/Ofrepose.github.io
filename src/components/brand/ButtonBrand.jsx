

const ButtonBrand = ({ extra, onClickHandler, type, buttonText, disabled = false, buttonIsCancel = false }) => {
    return (
        buttonIsCancel ? (
            <button
                className={
                    `linear w-[150px] rounded-xl bg-primaryRed py-[12px] text-white transition duration-200 hover:bg-secondaryRed font-poppins ${extra}`
                }
                onClick={onClickHandler}
                type={type || ''}
                disabled={disabled}
            >
                {buttonText}
            </button>
        ) : (
            <button
                className={
                    `linear w-[150px] rounded-xl bg-primaryBlue py-[12px] text-white transition duration-200 hover:bg-secondaryBlue font-poppins ${extra}`
                }
                onClick={onClickHandler}
                type={type || ''}
                disabled={disabled}
            >
                {buttonText}
            </button>
        )
    )
}

export default ButtonBrand;