type ButtonType = {
    title?: string;
    background?: 'transparent' | 'white' | 'black';
    image?: string;
    sizeBtn?: 'huge' | 'small';
    additionalImage?: 'google' | '';
    type?: "button" | "submit" | "reset" | undefined;
    onClickHandler?: () => void;
    disabled?: boolean;
}

export const Button:React.FC<ButtonType> = ({ 
    title = '', 
    background = 'transparent', 
    image = '', 
    sizeBtn = 'small',
    additionalImage = '',
    type = 'button',
    disabled = false,
    onClickHandler,
}) => {

    const btnStyles = {
        transparent: {
            background: 'transparent',
            color: 'black'
        },
        black: {
            background: 'bg-black',
            color: 'text-white',
        },
        white: {
            background: 'bg-white',
            color: 'text-black',
        },
        huge: 'px-6 py-5 w-full',
        small: 'p-2 size-10',
        google: {
            additionalImage: "bg-[url('/src/images/EnterIcon.svg')]",
        }
    };

    const btnStyle = `block border disabled:bg-[#9AA5B1] disabled:border-0 ` + 
    ` hover:bg-[#BBEE85] outline-black transition duration-300 ease-in-out` + 
    `border-black ${btnStyles[background].background} ${btnStyles[sizeBtn]}`;

    return (<button
        type={type}
        className={btnStyle}
        onClick={onClickHandler}
        disabled={disabled}
        >
        {title && (
            <div className="flex justify-center items-center gap-2">
                <p className={`block text-xl text-nowrap ${btnStyles[background].color}`}>
                    {title}
                </p>

                {additionalImage && <div className="relative block size-6">
                    <div className={`absolute block size-full ${btnStyles[additionalImage].additionalImage} bg-cover`}></div>
                </div>}
            </div>
        )}

        {image && (
            <div className="relative block w-full pb-[100%]">
                <div className={`absolute block size-full bg-[url('/src/images/Back.svg')] bg-cover`}></div>
            </div>
        )}
    </button>);
}